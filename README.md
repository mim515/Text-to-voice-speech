## Text to Voice Speech

A simple web application that converts typed text into spoken audio using the Web Speech API.

## 🎯 Features

Select from available voices installed in the browser.

Enter any text into a textarea and click a button to hear it spoken aloud.

Uses the browser’s built-in SpeechSynthesis API — no external libraries required.

Lightweight, fast, and easy to integrate into other web pages.

## 🧩 Project Structure
/ (root)
│ index.html        ← main HTML file
│ style.css         ← (optional) styling for UI
│ script.js         ← JavaScript logic handling text-to-speech
│ README.md         ← this file

## 🛠 Installation & Usage

Clone or download the repository:

git clone https://github.com/mim515/Text-to-voice-speech.git


Navigate into the project folder:

cd Text-to-voice-speech


Open index.html in your browser.

In the UI:

Select a voice from the dropdown.

Enter text in the textarea.

Click the “Speak” button and listen.

## ✏️ How It Works

On page load the code retrieves the list of available voices from window.speechSynthesis.getVoices().

The voices are populated into the <select> dropdown.

When you change the voice selection, the speech.voice property is updated.

When you click the button:

The entered text is trimmed and assigned to speech.text.

Any ongoing speech is cancelled via speechSynthesis.cancel().

Then speechSynthesis.speak(speech) plays the text in the selected voice.

## 🎨 Customization Options

Styling: Modify style.css (or add your own) to change colors, fonts, spacing, etc.

Voice behaviour: You can extend the functionality to allow adjusting speech.rate, speech.pitch, and speech.volume.

UI enhancements: Add icons, loader animations, or download audio functionality.

Multi-line support: If your UI supports multi-line input, you could break the text into sentences or paragraphs and speak them sequentially.

## 📝 Notes & Considerations

Voice availability and quality depend on the browser and operating system (Chrome, Firefox, Edge, etc.).

Because of browser security, this app must be served from an HTTP(S) origin (i.e., opened via file:// may behave differently).

Some voices may sound robotic or lack certain languages; you may detect voices.length === 0 and handle accordingly.

Consider providing UI feedback (e.g., “Loading voices…” or “No voices available”).

For better performance and reliability, you might delay speaking until voices are fully loaded.

## 📄 License

This project is open-source and free to use for personal or commercial purposes. Attribution appreciated but not required.

