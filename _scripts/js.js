let speech = new SpeechSynthesisUtterance();

/*---selection de la langue----*/
let voices =[2];
let voiceSelector = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelector.options[i] = new Option(voice.name, i)));
}

voiceSelector.addEventListener("chenge", () => {
    speech.voice = voices[voiceSelector.value];
})

document.querySelector("button").addEventListener("click", () =>{
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
})

