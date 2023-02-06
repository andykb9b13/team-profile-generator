const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')

inquirer
    .prompt({
        type: "confirm",
        message: "Hello there! Would you like to get started?",
        name: "init"
    })
    .then((response) => {
        if (response.init) {
            const myManager = new Manager();
            myManager.getOfficeNumber()
        }
    })
