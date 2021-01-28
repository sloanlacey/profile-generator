// Modules
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// Dependencies
const inquirer = require('inquirer');
const fs = require('fs');

// Empty employee array will be populated with employee cards
const employees = [];
// Function init starts the application and calls the initial generation of html and starts the addEmployee function
function initGenerator() {
    generateHtml();
    addEmployee();
}
// addEmployee prompts the user to identify 3 parameters and then choose a role, it then generates the mothod unique to that role as a question for user input--based on user selection, the generator creates a new instance of the employee type and pushes the card into the empty array--when all selections are made, the array cards are appended to the html file and the ending html tags are appended as well, completing the application
function addEmployee() {
    inquirer.prompt([{
        message: 'What is your name? Please include your first and last name in the response.',
        type: 'input',
        name: 'name',
    }, {
        message: 'What is your employee ID number?',
        type: 'number',
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
            employees.push(newEmp);
            newEmpCards(newEmp)
        .then(function() {
            if (addNewEmp === 'yes') {
                addEmployee();
            } else {
                endHtml();
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
// Function to generate the html for new employee cards
// Connect with if statements for role selection
function newEmpCards(newMember) {
    return new Promise(function(resolve, reject) {
        const empName = newMember.getName();
        const empId = newMember.getId();
        const empEmail = newMember.getEmail();
        const role = newMember.getRole();
        let card = '';
        if (role === 'Manager') {
            const officeNum = newMember.getOfficeNumber();
            card = `<div class="col s12 m12 l3">
            <div class="card-panel" style="background-color: #428C85; color: #f5f5f5;">
                <h5>${empName}</h5>
                <h6>Role: ${role}</h6>
                <ul>
                    <li>ID: ${empId}</li>
                    <li>Email: ${empEmail}</li>
                    <li>Office Number: ${officeNum}</li>
                </ul>
            </div>
        </div>`;
        } else if (role === 'Engineer') {
            const gitHub = newMember.getGithub();
            card = `<div class="col s12 m12 l3">
            <div class="card-panel" style="background-color: #428C85; color: #f5f5f5;">
                <h5>${empName}</h5>
                <h6>Role: ${role}</h6>
                <ul>
                    <li>ID: ${empId}</li>
                    <li>Email: ${empEmail}</li>
                    <li>Github Username: ${gitHub}</li>
                </ul>
            </div>
        </div>`;
        } else {
            const schoolName = newMember.getSchool();
            card = `<div class="col s12 m12 l3">
            <div class="card-panel" style="background-color: #428C85; color: #f5f5f5;">
                <h5>${empName}</h5>
                <h6>Role: ${role}</h6>
                <ul>
                    <li>ID: ${empId}</li>
                    <li>Email: ${empEmail}</li>
                    <li>School: ${schoolName}</li>
                </ul>
            </div>
        </div>`;
        }
        console.log('Generating new employee');
        fs.appendFile('./dist/new-team.html', card, function (error) {
            if (error) {
                return reject(error);
            };
                return resolve();
        });
    });
}
// Function adds closing html tags and appends them to the generated html file new-team.html
function endHtml() {
    const html = `</div>
    </div>
    
    </body>
    </html>`;

    fs.appendFile('./dist/new-team.html', html, function (error) {
        if (error) {
            console.log(error);
        };
    });
    console.log('Finished!');
}

// Invoke init function
initGenerator();