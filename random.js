//an array to list out 1-3.
const number = Array.from({ length: 3 }, (_, i) => i + 1);

function guessNumber() {

    //taking user input field from HTML to use for if else later.
    const userInput = parseInt(document.getElementById('userGuess').value);

    //if user were to enter other number than the stated value, it will show this message.
    if (isNaN(userInput) || userInput < 1 || userInput > 3) {
        showResult.textContent = "Please enter a valid number between 1 and 3!";
        showResult.style.color = "orange"; // Color for NA 
        return;
    }

    //generate a new random number each time the function is called or when guess button is clicked.
    const randomNumber = number[Math.floor(Math.random() * number.length)];

    //if else statements to compare if both user and computer has the same output.
    //using backtick `` allows to pass variable interpolation or multi-line strings.
    if (userInput === randomNumber) {
        showResult.textContent = `You guessed it RIGHT! The number was ${randomNumber}`;
        showResult.style.color = "green"; // Color for correct guess
    } else {
        showResult.textContent = `You guessed it WRONG! The number was ${randomNumber}`;
        showResult.style.color = "red"; // Color for incorrect guess
    }
}

//using document.getElementById is kind of like linking the html <p> tag to Javscript, to display output.
const showResult = document.getElementById("randomNumberResult");

//attach the click event listener to the button. purpose of eventlistener is to allow actions to trigger.
document.getElementById('guessButton').addEventListener('click', guessNumber);

//add event listener for pressing the Enter key.
document.getElementById('userGuess').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { //check if "Enter key" was pressed.
        guessNumber(); //call the guessNumber function
    }
});