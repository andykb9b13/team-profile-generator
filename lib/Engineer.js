const Employee = require('./Employee');
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor(name, role, id, email, github) {
        super(name, role, id, email, github)
        this.github = github;
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return this.role = "engineer"
    }
    // getGithub() {
    //     inquirer
    //         .prompt({
    //             type: "text",
    //             message: "What is your GitHub profile name?",
    //             name: "github"
    //         })
    //         .then((response) => {
    //             this.github = response.github;
    //             console.log(this)
    //         })
    // }

}

module.exports = Engineer;
