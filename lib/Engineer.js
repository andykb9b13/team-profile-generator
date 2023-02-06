const Employee = require('./Employee');
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, email, github, role)
        this.github = github;
    }
    getGithub() {
        inquirer
            .prompt({
                type: "text",
                message: "Please enter your gitHub userName...",
                name: "github"
            })
            .then((response) => {
                this.github = `https://github.com/${response.github}`
                this.getName()
            })
    }
    getRole() {
        this.role = "Engineer";
        console.log(this)
    }
}

// const myEngineer = new Engineer()
// myEngineer.getGithub()
