const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')

function initiateProgram() {
    inquirer
        .prompt({
            type: "confirm",
            message: "Hi there, would you like to add an employee?",
            name: "init"
        })
        .then((response) => {
            if (response.init) {
                askQuestions()
            } else {
                console.log("Thanks! Goodbye!")
                return
            }
        }
        )
}

function askQuestions() {
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
            console.log(response)
            switch (response.role) {
                case "manager":
                    makeManager(response.name, response.role, response.id, response.email)
                    break
                case "intern":
                    makeIntern(response.name, response.role, response.id, response.email)
                    break
                case 'engineer':
                    makeEngineer(response.name, response.role, response.id, response.email)
                    break
                case 'end':
                    console.log("GoodBye!")
                    return
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
            newManager.officeNumber = response.officeNumber
            console.log(newManager)
            initiateProgram()
        })
}

function makeEngineer(name, role, id, email) {
    const newEngineer = new Engineer(name, role, id, email);
    inquirer
        .prompt({
            type: "text",
            message: "Please enter your gitHub userName...",
            name: "github"
        })
        .then((response) => {
            newEngineer.github = `https://github.com/${response.github}`
            console.log(newEngineer)
            initiateProgram()
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
            newIntern.school = response.school;
            console.log(newIntern)
            initiateProgram()
        })
}

initiateProgram()



