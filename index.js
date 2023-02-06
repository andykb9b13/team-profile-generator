const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee')

inquirer
    .prompt([{
        type: "text",
        message: Employee.getName(),
        name: "employeeName"
    },
    {
        type: "text",
        message: Employee.getID(),
        name: "employeeId"
    },
    {
        type: "text",
        message: Employee.getEmail(),
        name: "employeeEmail"
    }
    ])
    .then((response) => {
        // console.log(response)
        const newEmployee = new Employee(response.employeeName, response.employeeId, response.employeeEmail)
        console.log(newEmployee)
        // fs.writeFile('index.html', `<!DOCTYPE html>
        // <html lang="en">
        
        // <head>
        //     <meta charset="UTF-8">
        //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
        //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
        //     <title>Document</title>
        // </head>
        
        // <body>
        //     <h1>This is a test HTML file</h1>
        //     <div>
        //     <ul>
        //         <li id="managerName">${response.managerName}</li>
        //         <li id="employeeId">${response.employeeId}</li>
        //         <li id="employeeEmail">${response.employeeEmail}</li>
        //         <li id="officeNumber">${response.officeNumber}</li>
        //     </ul>
        // </div>
        
        // </body>
        
        // </html>`, (err) => (err) ? console.log("whoops something went wrong") : console.log("created HTML file!")
        // )
    })
    // .then(() => {
    //     fs.writeFile('style.css', `body {
    //         font-family: 'Poppins', sans-serif;
    //     }
        
    //     h1 {
    //         text-align: center;
    //     }
        
    //     h2 {
    //         text-align: center;
    //     }
        
    //     #cardContainer {
    //         display: flex;
    //         flex-direction: inline-block;
    //         flex-wrap: wrap;
    //     }
        
    //     .teamMember {
    //         background-color: paleturquoise;
    //         border: 1px solid black;
    //         box-shadow: 1px 1px 2px 1px black;
    //         margin: 5px;
    //     }`, (err) => (err) ? console.log("couldn't make css file") : console.log("created css file!"))
    // })