const { Console } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');
const queries = require('./db/query');
require ('console.table')



const questions =  () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'store',
            message: 'What would you like to do?',
            choices: [
            "View All Departments", 
            "View All Roles", 
            "View All Employees",
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

function askQuestions() {
questions()
.then((answers) => {
    console.log(answers.store) 
    if (answers.store === "View All Departments") {
        console.log('You chose to view all departments')
        viewDepts()
    }
    if (answers.store === "View All Roles") {
        console.log('You chose to view all roles')
        viewRoles()
    }
    if (answers.store === "View All Employees") {
        console.log('You chose to view all employees')
        viewEmployees()
    }
    if (answers.store === "View All Employees By Department") {
        console.log('You chose to view all employees by department')
        viewAllEmpByDept()
    return;
    }
});
}
function viewDepts(){
    queries.viewAllDepts()
    .then(([data]) => {
        console.table(data)
        askQuestions()
    }) 
}
function viewRoles(){
    queries.viewAllRoles()
    .then(([data]) => {
        console.table(data)
        askQuestions()
    }) 
}
function viewEmployees(){
    queries.viewAllEmployees()
    .then(([data]) => {
        console.table(data)
        askQuestions()
    }) 
}

function viewAllEmpByDept() {
    queries.viewAllEmpByDept()
    .then(([data]) => {
        console.table(data)
        askQuestions()
    })
}

askQuestions();