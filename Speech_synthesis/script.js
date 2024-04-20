const voiceSelect = document.getElementById("voice-select");

const speech = window.speechSynthesis;
let voices;
function addVoice() {
  voices = speech.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
}

function onSubmit(e) {
  e.preventDefault();

  const inputText = document.getElementById("text-input");
  const utterThis = new SpeechSynthesisUtterance(inputText.value);

  const speechVoices = voiceSelect.selectedOptions[0].getAttribute("data-name");
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name == speechVoices) {
      utterThis.voice = voices[i];
    }
  }

  speech.speak(utterThis);
}

addVoice();
if (speechSynthesis.onvoiceschanged == undefined) {
  speechSynthesis.onvoiceschanged = addVoice;
}
document.querySelector("#form").addEventListener("submit", onSubmit);
