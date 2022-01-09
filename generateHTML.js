const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')


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
        <div class="jumbotron jumbotron-fluid">
            <div class="container-fluid text-white" style="background-color: #7f7f7f;">
                <h1 class="display-4 text-center">My Team</h1>
                <p class="lead text-center">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <div class="card" style="width: 18rem;">
                        <div class="card-header">
                            ${answers.nameFull}
                            ${Manager.getRole()}
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${answers.id}</li>
                            <li class="list-group-item">${answers.email}</li>
                            <li class="list-group-item">${answers.officeNum}</li>
                        </ul>
                    </div>
                </div>
                ${renderCards(answers)}
            </div>   
        </div>   
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
    </body>
</html>`;
}

function renderCards(answers) {
    switch (answers.teamChoice) {
        case "Engineer":
return `<div class="col-4">
    <div class="card" style="width: 18rem;">
        <div class="card-header">
        ${answers.nameFull}
        ${Engineer.getRole()}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${answers.id}</li>
            <li class="list-group-item">${answers.email}</li>
            <li class="list-group-item">${answers.github}</li>
        </ul>
    </div>
</div>`
        case "Intern": 
return `<div class="col-4">
    <div class="card" style="width: 18rem;">
        <div class="card-header">
        ${answers.nameFull}
        ${Intern.getRole()}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${answers.id}</li>
            <li class="list-group-item">${answers.email}</li>
            <li class="list-group-item">${answers.school}</li>
        </ul>
    </div>
</div>`
        case "I don't want any more team members":
        return ``;
    }
}

module.exports = generateHTML