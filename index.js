const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  { type: "input", message: "What is the team manager's name?", name: "" },
  { type: "input", message: "What is the team manager's id?", name: "" },
  { type: "input", message: "What is the team manager's email?", name: "" },
  { type: "input", message: "What is the team manager's office number?", name: "" },
  { type: "list", message: "Which type of team member would you like to add?", name: "", choices:["Engineer", "Intern", "I don't want any more team members"]}
];

function renderCards(data) {
    // returns the cards needed?
}

function generateHTML(data) {
  return ``;
}

function writeToFile(fileName, data) {
  fs.appendFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("README written...")
  );
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    // pass answers into writeToFile function
    writeToFile("", generateHTML(answers));
  });
}

// Function call to initialize app
init();
