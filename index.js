// . Miles-to-Kilometers Converter (Operators):
// • Create a variable named miles and assign a numeric value representing distance in miles.
// • Calculate the equivalent distance in kilometers using the conversion factor (1 mile =
// 1.60934 kilometers). You can achieve this by multiplying miles by 1.60934.
// • Store the converted distance in kilometers in a variable named kilometers.
// • Use console.log to print a message in the following format:
// The distance of 130 kms is equal to 209.2142 miles
// solve using typescript explain question
let miles = 130;
let kilometers = miles * 1.60934;
console.log(`The distance of ${miles} miles  is equal to ${kilometers.toFixed(4)}kilometers`);
//  .Evaluating a number game:
// • Prompt the user to enter a number.
// • Compare the entered number with a dynamic number value.
// • Output the result indicating whether the entered number is greater than, equal to, or less
// than the dynamic number value.
import inquirer from "inquirer";
import chalk from "chalk";
async function userNumberGame() {
    let userInput = await inquirer.prompt([{
            type: "number",
            name: "usernumber",
            message: chalk.bold.greenBright(" ENTER A NUMBER"),
        }]);
    let dynamicNumber = 30;
    if (userInput.usernumber > dynamicNumber) {
        console.log("The entered number is greater than dynamic number value");
    }
    else if (userInput.usernumber < dynamicNumber) {
        console.log("The entered number is less than dynamic number value");
    }
    else {
        console.log("The entered number is equal to dynamic number value");
    }
}
userNumberGame();
// // • Set up two different variables with different values.
// // • Call a function with these variables as arguments and output the result using console.log.
// // • Create a second call to the function with two more numbers as arguments.
let num1 = 20;
let num2 = 10;
function multiply(a, b) {
    return a * b;
}
let result1 = multiply(num1, num2);
console.log(result1);
let result2 = multiply(4, 5);
console.log(result2);
// 3.Friend checker game:
// • Prompt the user to enter a name.
// • Use a switch statement to check if the entered name is a known friend.
//  • Output a confirmation message if the name is known, otherwise output a default
//  response.
let friendName = await inquirer.prompt([{
        name: "name1",
        type: "string",
        message: "Enter a Name :",
    }]);
switch (friendName.name1) {
    case "rabia":
        console.log(`hi rabia you are a known friend`);
        break;
    case "fariya":
        console.log("hi fariya you are a known friend");
        break;
    case "maria":
        console.log("hi maria you are a known friend");
        break;
    case "sadia":
        console.log("hi sadia you are a known friend");
        break;
    case "aisha":
        console.log("hi  aisha you are a known friend");
        break;
    default:
        console.log("i donot recongnize this name");
        break;
}
// Anonymous functions:
// • Assign a function expression to a variable, with one parameter that outputs the provided
// argument to the console.
// • Pass an argument into the function.
// • Create the same function as a normal function declaration
let schoolName = function (str) {
    console.log(str);
};
schoolName("Usman public school");
function variable(str) {
    console.log(str);
}
variable("hello world iam javeria rehman");
// Calculator project using function:
// • Set up two variables containing number values.
// • Set up a variable to hold an operator (+ or -).
// • Create a function that takes two numbers and an operator as parameters, performs the
// corresponding operation, and returns the result.
// • Call the function with the variables and operator, and output the result using console.log.
// • Update the operator value and call the function again with the updated arguments.
let value1 = 40;
let value2 = 60;
let operator = "+";
function result(a, b, operator) {
    if (operator === "+") {
        return a + b;
    }
    else if (operator === "-") {
        return a - b;
    }
    else if (operator === "*") {
        return a * b;
    }
    else if (operator === "/") {
        return a / b;
    }
    else {
        console.log("invalid input");
    }
}
console.log(result(value1, value2, operator));
operator = "-";
console.log(result(47, 7, operator));
operator = "*";
console.log(result(30, 10, operator));
operator = "/";
console.log(result(70, 7, operator));
