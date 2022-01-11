const Employee = require("./lib/Employee")

function renderCards(answers) {
        // console.log(`Render Cards: ${answers}`);
        return answers.map(employee => {
        if (employee.getRole() === "Engineer") {
            return renderEngineerCard(employee)
        } else if (employee.getRole() === "Intern") {
            return renderInternCard(employee)
        } else {
            return renderManagerCard(employee)
        }
        });
}

function renderManagerCard(answers) {
    return`<div class="col-4 d-flex justify-content-center">
                    <div class="card text-white my-3" style="width: 18rem; background-color:rgb(53, 99, 197);">
                        <div class="card-header">
                            <h2>${answers.getName()}</h2>
                            <h3><i class="fas fa-mug-hot"></i> ${answers.getRole()}</h3>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><strong>ID:</strong> ${answers.getId()}</li>
                            <li class="list-group-item"><strong>Email:</strong> ${answers.getEmail()}</li>
                            <li class="list-group-item"><strong>Office Number:</strong> ${answers.getOfficeNum()}</li>
                        </ul>
                    </div>
                </div>`
}

function renderEngineerCard(answers) {
    return`<div class="col-4 d-flex justify-content-center">
                    <div class="card text-white my-3" style="width: 18rem; background-color:rgb(53, 99, 197);">
                        <div class="card-header">
                            <h2>${answers.getName()}</h2>
                            <h3><i class="fas fa-glasses"></i> ${answers.getRole()}</h3>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><strong>ID:</strong> ${answers.getId()}</li>
                            <li class="list-group-item"><strong>Email:</strong> ${answers.getEmail()}</li>
                            <li class="list-group-item"><strong>Github:</strong> ${answers.getGithub()}</li>
                        </ul>
                    </div>
                </div>`
}

function renderInternCard(answers) {
    return`<div class="col-4 d-flex justify-content-center">
                    <div class="card text-white my-3" style="width: 18rem; background-color:rgb(53, 99, 197);">
                        <div class="card-header">
                            <h2>${answers.getName()}</h2>
                            <h3><i class="fas fa-user-graduate"></i> ${answers.getRole()}</h3>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><strong>ID:</strong> ${answers.getId()}</li>
                            <li class="list-group-item"><strong>Email:</strong> ${answers.getEmail()}</li>
                            <li class="list-group-item"><strong>School:</strong> ${answers.getSchool()}</li>
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
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header class="jumbotron jumbotron-fluid">
            <div class="container-fluid text-white" style="background-color:rgb(53, 99, 197);">
                <h1 class="display-4 text-center">My Team</h1>
                <p class="lead text-center">This is your generated team.</p>
            </div>
        </header>
        <main class="container">
            <div class="row">
                ${renderCards(answers).join(`
                `)}
            </div>   
        </main>   
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
    </body>
</html>`;
}


module.exports = {generateHTML}