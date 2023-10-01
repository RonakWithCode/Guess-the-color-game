// Create an array of color names
const colorNames = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black', 'white'];

// Function to generate a random color name from the array
function generateRandomColorName() {
    const randomIndex = Math.floor(Math.random() * colorNames.length);
    return colorNames[randomIndex];
}

const colorBox = document.getElementById('color-box');
const colorInput = document.getElementById('color-input');
const checkButton = document.getElementById('check-button');
const resultMessage = document.getElementById('result-message');
const newGameButton = document.getElementById('new-game-button');

let targetColorName = generateRandomColorName();

// Set the color box's background color
colorBox.style.backgroundColor = targetColorName;

// Check if the entered color name matches the target color name
checkButton.addEventListener('click', () => {
    const userColorName = colorInput.value.toLowerCase();
    
    if (userColorName === targetColorName) {
        resultMessage.textContent = 'Correct! You guessed the color!';
        colorBox.style.backgroundColor = targetColorName;
    } else {
        resultMessage.textContent = 'Try again. Incorrect color.';
    }
});

// Start a new game
newGameButton.addEventListener('click', () => {
    targetColorName = generateRandomColorName();
    colorBox.style.backgroundColor = targetColorName;
    colorInput.value = '';
    resultMessage.textContent = '';
});
