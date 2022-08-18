const fs = require('fs');
const inquirer = require('inquirer');


const questions =  () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'store',
            message: 'What would you like to do?',
            choices: ["View All Employees",
            "View All Employees By Department",
            "View All Employees By Manager",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Update Employee Manager"
        ]
        }
    ])
}

questions()
.then(answers => {
    console.log(answers)
    return;
});