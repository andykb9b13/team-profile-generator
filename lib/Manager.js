const Employee = require('./Employee');
const inquirer = require('inquirer');

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        super(name, id, email, role)
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        inquirer
            .prompt({
                type: "text",
                message: "What is your office number?",
                name: "officeNumber"
            })
            .then((response) => {
                this.officeNumber = response.officeNumber
                this.getName()
            })
    }
    getRole() {
        this.role = "Manager";
        console.log(this)
    }
}

// const myManager = new Manager();
// myManager.getOfficeNumber();

exports.Manager = Manager;