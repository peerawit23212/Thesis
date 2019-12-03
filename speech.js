var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition()
recognition.lang = 'th-TH'
recognition.interimResults =  false
recognition.maxAlternatives = 1
recognition.onspeechend = function (){
	recognition.stop();
}

window.onload = function(){
   document.getElementById("textbot").innerHTML = ("วันนี้เธอเหนื่อยมากไหม");
   responsiveVoice.setDefaultVoice("Thai Male");
      document.getElementById("micbot").onclick = function(){  
      recognition.start();
      responsiveVoice.speak("ลองบอกความในใจของคุณมาได้เลยนะ");
      }

   }

   

recognition.onresult = function(event) {
 for (var i = 0; i < event.results.length; i++){
  var speechRecognitionResult = event.results[i]
  for (var j = 0; j < speechRecognitionResult.length; j++){
   var speechRecognitionAlternative = speechRecognitionResult[i]
   console.log('Get word:', speechRecognitionAlternative.transcript)
   console.log('Prob:', speechRecognitionAlternative.confidence)
   var text_input = speechRecognitionAlternative.transcript;
   
  }
 }
 check(text_input);
 
}
var state =0;
function check(result) {
   if(result == "เหนื่อยมาก" && state==0 ){
      document.getElementById("textbot").innerHTML = ("สวัสดี เราเป็นหุ่นยนต์..ชื่อ  Glee วันนี้เราจะคุยเป็นเพื่อนเธอเอง </br> อ้อ..แล้วเมื่อไหร่ที่เธออยาก หยุด หรือ เริ่มใหม่ พูดว่า STOP ได้เลยนะ เริ่มกันเลยไหม ?");
      responsiveVoice.speak("สวัสดี เราเป็นหุ่นยนต์ ชื่อ Glee วันนี้เราจะคุยเป็นเพื่อนเธอเอง..อ้อ..แล้วเมื่อไหร่ที่เธออยาก..หยุด..หรือ....เริ่มใหม่...พูดว่า STOP ได้เลยนะ...เริ่มกันเลยมั้ย..?");
      state +=1;
   }
   if(result == "เริ่มกันเลย" && state==1 ){
      document.getElementById("textbot").innerHTML = "ช่วงนี้เธอมีปัญหาการนอน นอนไม่หลับหรือนอนมากบ้างไหม";
      responsiveVoice.speak("ช่วงนี้เธอมีปัญหาการนอนนอนไม่หลับ..หรือ..นอนมากบ้างมั้ย");
      state +=1;
   }
   if(result == "เป็นประจำ" && state==2 ){
      document.getElementById("textbot").innerHTML = "โอเคไม่เป็นไรนะ เราเข้าใจ ช่วงนี้เธอรู้สึกมีสมาธิน้อยลงไหม";
      responsiveVoice.speak("โอเค...ไม่เป็นไรนะ..เราเข้าใจ..ช่วงนี้เธอรู้สึกมีสมาธิน้อยลงมั้ย");
      state +=1;
   }
   if(result == "น้อยลง" && state==3 ){
      document.getElementById("textbot").innerHTML = "ช่วงนี้เธอรู้สึกหงุดหงิด ไม่อยากคุยกับใคร กระวนกระวายว้าวุ่นใจบ้างไหม";
      responsiveVoice.speak("โอเค ไม่ว่าเธอจะตอบอะไรเรารับฟังเธอเสมอนะ..ช่วงนี้..เธอรู้สึกหงุดหงิด...ไม่อยากคุยกับใคร....กระวนกระวาย..ว้าวุ่นใจบ้างมั้ย");
      state +=1;
   }
}
