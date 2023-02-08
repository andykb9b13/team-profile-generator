const inquirer = require('inquirer')

class Employee {
    constructor(name, role, id, email,) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return this.role = "Employee"
    }
}

module.exports = Employee;


    // getName() {
    //     inquirer
    //         .prompt({
    //             type: "text",
    //             message: "what is the name of the employee?",
    //             name: "name"
    //         }).then((response) => {
    //             this.name = response.name;
    //             this.getId()
    //         })
    // };
    // getId() {
    //     inquirer
    //         .prompt({
    //             type: "text",
    //             message: "What is the employee's ID?",
    //             name: "id"
    //         })
    //         .then((response) => {
    //             this.id = response.id;
    //             this.getEmail()
    //         })
    // }
    // getEmail() {
    //     inquirer
    //         .prompt({
    //             type: "text",
    //             message: "What is the employee's email?",
    //             name: "email"
    //         })
    //         .then((response) => {
    //             this.email = response.email;
    //             // this.getRole()
    //             this.getOfficeNumber();
    //         })
    // }
    // getRole() {
    //     inquirer
    //         .prompt({
    //             type: "list",
    //             message: "what is the role of the employee?",
    //             name: "role",
    //             choices: ["manager", "engineer", "intern"]
    //         })
    //         .then((response) => {
    //             this.role = response.role;
    //             switch (response.role) {
    //                 case "manager":
    //                     this.getOfficeNumber();
    //                     break
    //                 case "engineer":
    //                     this.getGithub()
    //                     break
    //                 case "intern":
    //                     this.getSchool()
    //                     break
    //             }
    //         })
    // }
