let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

function populateVoices() {
  voices = window.speechSynthesis.getVoices();
  voiceSelect.innerHTML = "";
  voices.forEach((voice, i) => {
    voiceSelect.options[i] = new Option(voice.name, i);
  });
  speech.voice = voices[0];
}

window.speechSynthesis.onvoiceschanged = populateVoices;

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[parseInt(voiceSelect.value)];
});

document.querySelector("button").addEventListener("click", () => {
  let text = document.querySelector("textarea").value.trim();
  if (text !== "") {
    speech.text = text;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  }
});
