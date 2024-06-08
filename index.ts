#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number: ", type: "number", name: "firstNumber" },
  { message: "Enter second number: ", type: "number", name: "secondNumber" },
  {
    message: "Enter operation: ",
    type: "list",
    choices: ["Add", "Subtract", "Multiply", "Divide"],
    name: "operation",
  },
]);

if (answer.operation === "Add") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operation === "Subtract") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operation === "Multiply") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operation === "Divide") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("Invalid operation");
}