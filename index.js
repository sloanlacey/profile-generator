const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const fs = require('fs');
// const path = require('path');

const employees = [];

function initGenerator() {
    generateHtml();
    addEmployee();
}

function addEmployee() {
    inquirer.prompt([{
        message: 'What is your name? Please include your first and last name in the response.',
        type: 'input',
        name: 'name',
    }, {
        message: 'What is your employee ID number?',
        type: 'input',
        name: 'id',
    }, {
        message: 'What is your email address?',
        type: 'input',
        name: 'email',
    }, {
        message: 'What is your role in the company?',
        type: 'list',
        name: 'role',
        choices: [
            'Manager',
            'Engineer',
            'Intern'
        ],
    }])
        .then(function ({name, id, email, role}) {
            let selection = '';
            if (role === 'Manager') {
                selection = 'office number';
            } else if (role === 'Engineer') {
                selection = 'Github username';
            } else {
                selection = 'school';
            }
        inquirer.prompt([{
            message: `Enter the employee's ${selection}.`,
            name: 'selection',
        }, {
            message: 'Are there any other employees you would like to add?',
            name: 'addNewEmp',
            type: 'list',
            choices: [
                'yes',
                'no',
            ],
    }])
        .then(function({selection, addNewEmp}) {
            let newEmp;
            if (role === 'Manager') {
                newEmp = new Manager(name, id, email, selection);
            } else if (role === 'Engineer') {
                newEmp = new Engineer(name, id, email, selection);
            } else {
                newEmp = new Intern(name, id, email, selection);
            }
            employees.push(newEmp)
            // add html funtion here?
        .then(function() {
            if (addNewEmp === 'yes') {
                addEmployee();
            } else {
                // call function to stop rendering html?
            }
        });
    });
});
}
// Function generates the boiler plate html to start the new page
// Has an error handling function inside generateHtml that prints 'error' to the console log
function generateHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
        <link rel="stylesheet" href="./index.css">
        <title>Employee Generator</title>
    </head>
    <body>
    
    <div class="header">
        <div class="row">
            <div class="col s12 m12 l12 jumbotron">Meet the Team</div>
        </div>
    </div>
    
    <div class="container">
    
    <div class="row">`;
fs.writeFile('./dist/new-team.html', html, function (error) {
    if (error) {
        console.log(error);
    }
})
console.log('start');
}


// .then make a function to handle the name, id, email and role selection
// start with if statements and then make switch cases
// if role === blank then do this, else if blank do this, else do blank and pass through the unique selectors for the employee types
// 
initGenerator();