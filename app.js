console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1
let favNum = 7;
let userInput = prompt("Try to guess the correct number!");

if (userInput < favNum) {
    alert("Too low!");
} else if (userInput > favNum){
    alert("Too high!");
} else {
    alert("Congratulations!!!")
}

// Exercise 2

let userInput2 = prompt("How many bicycles do you own?");
let userInput2Parse = parseInt(userInput2) - 1;

switch (userInput2Parse) {
    case 0:
       console.log("You own " + userInput2 + " bicycles!" );
       break; 
    case 1:
       console.log("You own " + userInput2 + " bicycles!" );
       break;
    case 2:
       console.log("You own " + userInput2 + " bicycles!" );
       break;
    case 3:
       console.log("You own " + userInput2 + " bicycles!" );
       break;
    case 4:
       console.log("You own " + userInput2 + " bicycles!" );
       break;
    default:
        console.log("You own too many bicycles!");
}