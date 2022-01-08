const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML")

const questions = [
  // {message : "Welcome to the Team Profile Generator. Please fill in details for the members of your team." },
  { type: "input", message: "What is the team manager's name?", name: "nameFull" },
  { type: "input", message: "What is the team manager's id?", name: "id" },
  { type: "input", message: "What is the team manager's email?", name: "email" },
  { type: "input", message: "What is the team manager's office number?", name: "officeNum" },
  { type: "list", message: "Which type of team member would you like to add?", name: "teamChoice", choices:["Engineer", "Intern", "I don't want any more team members"]}
];

const engineerQuestions = [
  { type: "input", message: "What is the engineer's name?", name: "nameFull" },
  { type: "input", message: "What is the engineer's id?", name: "id" },
  { type: "input", message: "What is the engineer's email?", name: "email" },
  { type: "input", message: "What is the engineer's github username?", name: "github" },
  { type: "list", message: "Which type of team member would you like to add?", name: "teamChoice", choices:["Engineer", "Intern", "I don't want any more team members"]}
];

const internQuestions = [
  { type: "input", message: "What is the intern's name?", name: "nameFull" },
  { type: "input", message: "What is the intern's id?", name: "id" },
  { type: "input", message: "What is the intern's email?", name: "email" },
  { type: "input", message: "What is the intern's school?", name: "school" },
  { type: "list", message: "Which type of team member would you like to add?", name: "teamChoice", choices:["Engineer", "Intern", "I don't want any more team members"]}
];

function writeToFile(fileName, data) {
  fs.appendFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Team generated...")
  );
}

function engineerPrompt() {
  inquirer
    .prompt(engineerQuestions)
    .then((answers) =>
    {
      switch (answers.teamChoice) {
        case "Engineer":
          engineerPrompt()
          break;
        case "Intern":
          internPrompt()
          break;
        case "I don't want any more team members":
          writeToFile("index1.html", generateHTML(answers));
          break;
      }
    });
}

function internPrompt() {
  inquirer
    .prompt(internQuestions)
    .then((answers) =>
    {
      switch (answers.teamChoice) {
        case "Engineer":
          engineerPrompt()
          break;
        case "Intern":
          internPrompt()
          break;
        case "I don't want any more team members":
          writeToFile("index1.html", generateHTML(answers));
          break;
      }
    });
}

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // answers need to pass into classes? 
      switch (answers.teamChoice) {
        case "Engineer":
          engineerPrompt()
          break;
        case "Intern":
          internPrompt()
          break;
        case "I don't want any more team members":
          writeToFile("index1.html", generateHTML(answers));
          break;
      }
    });
}

// Function call to initialize app
init();
