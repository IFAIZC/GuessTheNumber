// an array to list out 1-10
const number = Array.from({ length: 3 }, (_, i) => i + 1);

// to generate random number
const randomNumber = number[Math.floor(Math.random() * number.length)];

let userInput = 2;

function checkNumber(userInput, randomNumber) {
    if (userInput === randomNumber) {
        showResult.textContent = "You guessed it RIGHT!";
    } else {
        showResult.textContent = "You guessed it WRONG!";
    }
}

//using document.getElementById is kind of like linking the html <p> tag to Javscript, to display output.
const showResult = document.getElementById("randomNumberResult");


console.log("User : " + userInput);
console.log("Computer : " + randomNumber);
checkNumber(userInput, randomNumber)