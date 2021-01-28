const Employee = require("./Employee");

class Intern extends Employee{
    constructor (name, id, email, school) {
        if (typeof school !== 'string' || !school.trim().length) {
            throw new Error('Expected the parameter of school to be entered as a string')
        }
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;