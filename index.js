const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const fs = require('fs');
// const path = require('path');

const employees = [];

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
    }
])}
// .then make a function to handle the name, id, email and role selection
// start with if statements and then make switch cases
// if role === blank then do this, else if blank do this, else do blank and pass through the unique selectors for the employee types
// 