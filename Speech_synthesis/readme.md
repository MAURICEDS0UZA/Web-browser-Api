# Speech Synthesis Example

## Overview

This is a simple web application demonstrating the use of the Speech Synthesis API in JavaScript. The application allows users to input text and select a voice from a dropdown menu to speak the text using the selected voice.

## Features

1. **Text Input**: Users can enter text in an input field.
2. **Voice Selection**: Users can select a voice from a dropdown menu.
3. **Speech Synthesis**: When the user submits the form, the selected text is spoken aloud using the chosen voice.
4. **Automatic Voice Population**: The dropdown menu is automatically populated with available voices when the page loads or when new voices become available.

## How to Use

1. **Input Text**: Enter the text you want to be spoken into the input field.
2. **Select Voice**: Choose a voice from the dropdown menu.
3. **Submit**: Click the submit button or press Enter to hear the text spoken aloud using the selected voice.

## Code Explanation

- `voice-select`: This is the ID of the `<select>` element where the user can choose a voice.
- `addVoice()`: This function populates the dropdown menu with available voices. It loops through the available voices obtained from `speechSynthesis.getVoices()`, creates an `<option>` element for each voice, and appends it to the dropdown menu.
- `onSubmit(e)`: This function is called when the form is submitted. It prevents the default form submission behavior, retrieves the input text, selects the chosen voice from the dropdown menu, creates a `SpeechSynthesisUtterance` object with the input text, sets the chosen voice for the utterance, and then uses `speechSynthesis.speak()` to speak the text aloud.
- `speechSynthesis.onvoiceschanged`: This event listener is set to `addVoice` to automatically populate the dropdown menu with available voices when the page loads or when new voices become available.

## Compatibility

- This application should work in modern web browsers that support the Speech Synthesis API, such as Google Chrome, Mozilla Firefox, Safari, and Microsoft Edge.

## Contributing

- Contributions to improve this example or add new features are welcome. Please fork the repository, make your changes, and submit a pull request.
