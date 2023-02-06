const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the team manager's name?",
            name: "managerName"
        },
        {
            type: "input",
            message: "What is the employee's id?",
            name: "employeeId"
        },
        {
            type: "input",
            message: "What is the employee's email address?",
            name: "employeeEmail"
        },
        {
            type: "input",
            message: "What is the employee's office number?",
            name: "officeNumber"
        },
        {
            type: "checkbox",
            message: "Would you like to add an engineer or intern?",
            name: "addEmployee",
            choices: ["Engineer", "Intern", "None"]
        }
    ])
    .then((response) => {
        console.log(response)
        fs.writeFile('index.html', `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        
        <body>
            <h1>This is a test HTML file</h1>
            <div>
            <ul>
                <li id="managerName">${response.managerName}</li>
                <li id="employeeId">${response.employeeId}</li>
                <li id="employeeEmail">${response.employeeEmail}</li>
                <li id="officeNumber">${response.officeNumber}</li>
            </ul>
        </div>
        
        </body>
        
        </html>`, (err) => (err) ? console.log("whoops something went wrong") : console.log("success!")
        )
    })