const Employee = require('./Employee');
const inquirer = require('inquirer');

class Intern extends Employee {
    constructor(name, role, id, email, school) {
        super(name, role, id, email)
        this.school = school;
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return this.role = "intern"
    }

    // getSchool() {
    //     inquirer
    //         .prompt({
    //             type: "text",
    //             message: "What is your school?",
    //             name: "school"
    //         })
    //         .then((response) => {
    //             this.school = response.school;
    //             console.log(this)
    //         })
    // }

}

// const myIntern = new Intern();
// myIntern.getSchool();

module.exports = Intern;