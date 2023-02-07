const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, role, id, email, officeNumber) {
        super(name, role, id, email)
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return this.role = "Manager";
    }
}


module.exports = Manager;

    // getOfficeNumber() {
    //     inquirer
    //         .prompt({
    //             type: "text",
    //             message: "What is your office number?",
    //             name: "officeNumber"
    //         })
    //         .then((response) => {
    //             this.officeNumber = response.officeNumber;
    //             console.log(this)
    //             myTeam.push(this);
    //         })
    // }
    // makeNewEmployee(){
    //     inquirer
    //     .prompt({
    //         type:"confirm",
    //         message: "would you like to add a new employee?",
    //         name: "addNew"
    //     },
    //     {
    //         type: "list",
    //         message: "what type of employee would you like to add?",
    //         name: "type",
    //         choices: ["intern", "engineer"]
    //     })
    //     .then((response)=>{
    //         if (response.addNew){
    //             switch(response.type){
    //                 case "intern":
    //             }
    //         }
    //     })
    // }
    // getRole() {
    //     this.role = "Manager";
    // }
