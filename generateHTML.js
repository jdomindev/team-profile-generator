const answersArray = require("./index")
const fs = require("fs")
const Manager = require("./lib/Manager")
const Employee = require("./lib/Employee")

function renderCards(answers) {
    Object.keys(answersArray).forEach(employee => {
    if (answersArray[employee].getRole() === "Engineer") {
        renderEngineerCard(answers)
    } else if (answersArray[employee].getRole() === "Intern") {
        renderInternCard(answers)
    } else 
       renderManagerCard(answers)
    });
    
}

function renderManagerCard(answers) {
    return`<div class="col-4">
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            ${answers.nameFull}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${answers.id}</li>
            <li class="list-group-item">${answers.email}</li>
            <li class="list-group-item">${answers.officeNum}</li>
        </ul>
    </div>
</div>`
}

function renderEngineerCard(answers) {
    return`<div class="col-4">
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            ${answers.nameFull}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${answers.id}</li>
            <li class="list-group-item">${answers.email}</li>
            <li class="list-group-item">${answers.github}</li>
        </ul>
    </div>
</div>`
}

function renderInternCard(answers) {
    return`<div class="col-4 d-flex justify-content-center">
    <div class="card" style="width: 18rem; background-color:rgb(53, 99, 197); color: white;">
        <div class="card-header">
            ${answers.nameFull}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${answers.id}</li>
            <li class="list-group-item">${answers.email}</li>
            <li class="list-group-item">${answers.school}</li>
        </ul>
    </div>
</div>`
}

function generateHTML(answers) {
return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header class="jumbotron jumbotron-fluid">
            <div class="container-fluid text-white" style="background-color: #7f7f7f;">
                <h1 class="display-4 text-center">My Team</h1>
                <p class="lead text-center">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
        </header>
        <main class="container">
            <div class="row">
                ${renderCards(answers)}
            </div>   
        </main>   
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
    </body>
</html>`;
}


module.exports = {generateHTML}