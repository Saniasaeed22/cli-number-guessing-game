#!/usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6);
const answers = await inquirer.prompt([
    { name: "userGuessedNumber",
        type: "number", message: "please guess a number:",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed right number.");
}
else {
    console.log("Oho! you guessed wrong number.");
}
