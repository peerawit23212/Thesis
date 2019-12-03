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
    document.getElementById("micbot").onclick = function(){
   recognition.start();
}
}

recognition.onresult = function(event) {
 for (var i = 0; i < event.results.length; i++){
  var speechRecognitionResult = event.results[i]
  for (var j = 0; j < speechRecognitionResult.length; j++){
   var speechRecognitionAlternative = speechRecognitionResult[i]
   console.log('Get word:', speechRecognitionAlternative.transcript)
   console.log('Prob:', speechRecognitionAlternative.confidence)
   if(speechRecognitionAlternative.transcript == "ไม่ค่อยดีเท่าไหร่"){
   document.getElementById("textbot").innerHTML = "งั้นเรามาลองคุยกันดูนะเผื่อจะดีขึ้น";
   responsiveVoice.speak("งั้นเรามาลองคุยกันดูนะเผื่อจะดีขึ้น");
   }
   else if(speechRecognitionAlternative.transcript == "ก็โอเคนะ"){
	document.getElementById("textbot").innerHTML = "งั้นก็ดีแล้ว";
   }
  }
 }
}

