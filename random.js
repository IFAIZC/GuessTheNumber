// an array to list out 1-3
const number = Array.from({ length: 3 }, (_, i) => i + 1);

// to generate random number
const randomNumber = number[Math.floor(Math.random() * number.length)];

//using document.getElementById is kind of like linking the html <p> tag to Javscript, to display output.
const showResult = document.getElementById("randomNumberResult");

let userInput = 2; //to be deleted soon

// to add user input function, and rewrite proper code for this part below.
function checkNumber(userInput, randomNumber) {
    if (userInput === randomNumber) {
        showResult.textContent = "You guessed it RIGHT!";
    } else {
        showResult.textContent = "You guessed it WRONG!";
    }
}
// to add user input function, and rewrite proper code for this part above.

console.log("User : " + userInput);
console.log("Computer : " + randomNumber);
checkNumber(userInput, randomNumber)