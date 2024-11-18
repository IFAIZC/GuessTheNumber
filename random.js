// an array to list out 1-10
const number = Array.from({ length: 3 }, (_, i) => i + 1);

// to generate random number
const randomNumber = number[Math.floor(Math.random() * number.length)];

let userInput = 2;

function checkNumber(userInput, randomNumber) {
    if (userInput === randomNumber) {
        console.log("You guessed it RIGHT!") 
    } else {
        console.log("You guessed it WRONG!")
    }
}

console.log("User : " + userInput);
console.log("Computer : " + randomNumber);
checkNumber(userInput, randomNumber)