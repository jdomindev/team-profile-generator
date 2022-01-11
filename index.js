const inquirer = require("inquirer");
const fs = require("fs");
const {generateHTML} = require("./generateHTML");
const Employee = require("./lib/Employee")
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager');


const managerQuestions = [ 
  { type: "input", message: "What is the team manager's name?", name: "nameFull" },
  { type: "input", message: "What is the team manager's id?", name: "id" },
  { type: "input", message: "What is the team manager's email?", name: "email" },
  { type: "input", message: "What is the team manager's office number?", name: "officeNum" },
  { type: "list", message: "Which type of team member would you like to add?", name: "teamChoice", choices:["Manager", "Engineer", "Intern", "I don't want any more team members"]}
]

const engineerQuestions = [
  { type: "input", message: "What is the team engineer's name?", name: "nameFull" },
  { type: "input", message: "What is the team engineer's id?", name: "id" },
  { type: "input", message: "What is the team engineer's email?", name: "email" },
  { type: "input", message: "What is the engineer's github username?", name: "github" },
  { type: "list", message: "Which type of team member would you like to add?", name: "teamChoice", choices:["Manager", "Engineer", "Intern", "I don't want any more team members"]}
];

const internQuestions = [
  { type: "input", message: "What is the team intern's name?", name: "nameFull" },
  { type: "input", message: "What is the team intern's id?", name: "id" },
  { type: "input", message: "What is the team intern's email?", name: "email" },
  { type: "input", message: "What is the intern's school?", name: "school" },
  { type: "list", message: "Which type of team member would you like to add?", name: "teamChoice", choices:["Manager", "Engineer", "Intern", "I don't want any more team members"]}
];

const answersArray = []

function engineerPrompt() {
  inquirer
    .prompt(engineerQuestions)
    .then((answers) =>
    {
      const addEngineer = new Engineer(answers.nameFull, answers.id, answers.email, answers.github)
      answersArray.push(addEngineer)
      console.log(answersArray);
      switch (answers.teamChoice) {
        case "Manager":
          init();
          break;
        case "Engineer":
          engineerPrompt()
          break;
        case "Intern":
          internPrompt()
          break;
        case "I don't want any more team members":
          writeToFile("./dist/team.html", generateHTML(answersArray));
          break;
      }
    });
}

function internPrompt() {
  inquirer
    .prompt(internQuestions)
    .then((answers) =>
    {
      const addIntern = new Intern(answers.nameFull, answers.id, answers.email, answers.school)
      answersArray.push(addIntern)
      switch (answers.teamChoice) {
        case "Manager":
          init();
          break;
        case "Engineer":
          engineerPrompt()
          break;
        case "Intern":
          internPrompt()
          break;
        case "I don't want any more team members":
          writeToFile("./dist/team.html", generateHTML(answersArray));
          break;
      }
    });
}

function writeToFile(fileName, data) {
  fs.appendFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Team generated...")
  );
}

function init() {
  inquirer
    .prompt(managerQuestions)
    .then((answers) => {
      const addManager = new Manager(answers.nameFull, answers.id, answers.email, answers.officeNum)
      answersArray.push(addManager);
      console.log(answersArray);
      switch (answers.teamChoice) {
        case "Manager":
          init();
          break;
        case "Engineer":
          engineerPrompt();
          break;
        case "Intern":
          internPrompt();
          break;
        case "I don't want any more team members":
          writeToFile("./dist/team.html", generateHTML(answersArray));
          break;
      }
    });
}

// Function call to initialize app
init();