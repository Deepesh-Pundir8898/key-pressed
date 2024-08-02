# Key Press Display with Sound and Key History

This project displays the key pressed by the user, plays a sound on each keypress, and shows the keycode and history of keypresses including key combinations like `Ctrl + Z`, `Ctrl + C`, etc.

## Features

1. **Display Key Pressed**: Shows the key pressed by the user in a styled format.
2. **Play Sound**: Plays a sound each time a key is pressed.
3. **Show Keycode**: Displays the keycode of the pressed key.
4. **Key Combinations**: Detects and shows key combinations like `Ctrl + Z`, `Ctrl + C`, etc.
5. **Key History**: Maintains and displays the history of the last 10 keypresses.

## Getting Started

### Prerequisites

- A web browser
- No additional libraries or frameworks are required

### Installation

1. Clone the repository or download the ZIP file.
2. Extract the ZIP file if necessary.

### Running the Project

1. Open `index.html` in your web browser.

### Project Structure


- **index.html**: The main HTML file that contains the structure of the web page.
- **script.js**: The JavaScript file that contains the logic for handling keypress events, playing sound, and updating the key history.
- **README.md**: This file.

### Usage

1. Open the `index.html` file in your web browser.
2. Press any key on your keyboard.
3. The pressed key and its keycode will be displayed on the screen.
4. A sound will be played for each keypress.
5. Key combinations like `Ctrl + Z`, `Shift + A`, etc., will be detected and displayed.
6. The history of the last 10 keypresses will be shown at the bottom of the page.


### Customization

To change the sound played on keypress, replace the `src` attribute in the `<audio>` element in `index.html` with the path to your desired sound file:

```html
<audio id="keypress-sound" src="path/to/your/soundfile.wav" preload="auto"></audio>


