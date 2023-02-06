const Employee = require('./Employee');
const inquirer = require('inquirer');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    getSchool() {
        inquirer
            .prompt({
                type: "text",
                message: "What school are you currently attending?",
                name: "school"
            })
            .then((response) => {
                this.school = response.school;
                console.log(this);
                this.getName();
            })
    }
    getRole() {
        this.role = "Intern";
        console.log(this);
    }
}

// const myIntern = new Intern();
// myIntern.getSchool();

module.exports = Intern;