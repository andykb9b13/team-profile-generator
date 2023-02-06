const inquirer = require('inquirer');
const fs = require('fs');

class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        console.log(this)
    }
    getName() {
        console.log("I'm in getName()...")
        inquirer
            .prompt({
                type: "text",
                message: "what is the name of the employee?",
                name: "name"
            })
            .then((response) => {
                this.name = response.name;
                console.log(this);
                this.getId()
            })

    }
    getId() {
        console.log("shout out from getId()")
        inquirer
            .prompt({
                type: "text",
                message: "What is the employee's ID?",
                name: "id"
            })
            .then((response) => {
                this.id = response.id;
                console.log(this);
                this.getEmail()
            })

    }
    getEmail() {
        console.log("holler back from getEmail()")
        inquirer
            .prompt({
                type: "text",
                message: "What is the employee's email?",
                name: "email"
            })
            .then((response) => {
                this.email = response.email;
                this.getRole();
            })

    }
    getRole() {
        this.role = "Employee";
        console.log(this)
    }
}

const newEmployee = new Employee();
newEmployee.getName()



exports.Employee = Employee;