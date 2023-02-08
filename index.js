const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')

const myTeam = [];

function initiateProgram() {
    inquirer
        .prompt({
            type: "confirm",
            message: "Hi there, would you like to add an employee?",
            name: "init"
        })
        .then((response) => {
            if (response.init) {
                makeEmployee();
            } else {
                console.log("Thanks! Goodbye!")
                makeHtml(myTeam);
            }
        })
}

function makeEmployee() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Hello there! Which team member would you like to add?",
                name: "role",
                choices: ["manager", "intern", "engineer"]
            },
            {
                type: "text",
                message: "what is the name of the employee?",
                name: "name"
            },
            {
                type: "text",
                message: "What is the employee's ID?",
                name: "id"
            },
            {
                type: "text",
                message: "What is the employee's email?",
                name: "email"
            }
        ])
        .then((response) => {
            switch (response.role) {
                case "manager":
                    makeManager(response.name, response.role, response.id, response.email);
                    break
                case "intern":
                    makeIntern(response.name, response.role, response.id, response.email);
                    break
                case 'engineer':
                    makeEngineer(response.name, response.role, response.id, response.email);
                    break
            }
        })
}


function makeManager(name, role, id, email) {
    const newManager = new Manager(name, role, id, email);
    inquirer
        .prompt({
            type: "text",
            message: "What is your office number?",
            name: "officeNumber"
        })
        .then((response) => {
            newManager.wildCard = response.officeNumber;
            myTeam.push(newManager);
            console.log("this is my team", myTeam);
            initiateProgram();
        })

}

function makeEngineer(name, role, id, email) {
    let newEngineer = new Engineer(name, role, id, email);
    inquirer
        .prompt({
            type: "text",
            message: "Please enter your gitHub userName...",
            name: "github"
        })
        .then((response) => {
            newEngineer.wildCard = `<a href="https://github.com/${response.github}">${response.github}</a>`;
            myTeam.push(newEngineer);
            console.log("this is my team", myTeam);
            initiateProgram();
        })
}

function makeIntern(name, role, id, email) {
    const newIntern = new Intern(name, role, id, email);
    inquirer
        .prompt({
            type: "text",
            message: "Please enter the school you are attending...",
            name: "school"
        })
        .then((response) => {
            newIntern.wildCard = response.school;
            myTeam.push(newIntern);
            console.log("this is my team", myTeam);
            initiateProgram();
        })
}

initiateProgram()


function makeHtml(team) {
    console.log("This is my team", team)
    const teamArray = team.map(member =>
        `<div class="teamMember card">
        <h2>${member.role}</h2>
        <ul>
            <li>Name: ${member.name}</li>
            <li>Id: 1249023</li>
            <li>Email: <a href=mailto:"${member.email}">${member.email}</a></li>
            <li>${member.wildCard}</li>
        </ul>
    </div>`
    )

    const HTMLwrapper =
        `<!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
                rel="stylesheet">
            <link rel="stylesheet" href="./style.css">
            <title>Document</title>
        </head>

        <body>
            <h1>This is a test HTML file</h1>
      ${teamArray.join("")}
        </body>

        </html>`;
    fs.writeFile('./dist/index.html', HTMLwrapper, (err) => (err) ? console.log("couldn't write html file") : console.log("success! wrote html file"))
    fs.writeFile('./dist/style.css', `body {
            font-family: 'Poppins', sans-serif;
        }

        h1 {
            text-align: center;
        }

        h2 {
            text-align: center;
        }

        #cardContainer {
            display: flex;
            flex-direction: inline-block;
            flex-wrap: wrap;
        }

        .teamMember {
            background-color: paleturquoise;
            border: 1px solid black;
            box-shadow: 1px 1px 2px 1px black;
            margin: 5px;
        }`, (err) => (err) ? console.log("whoops, couldn't write the css file") : console.log('success!! wrote the css file"'));
}


