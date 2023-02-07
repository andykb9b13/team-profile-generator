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
        return this.role
    }
}

module.exports = Engineer;
