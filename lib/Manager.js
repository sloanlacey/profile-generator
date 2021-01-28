const Employee = require("./Employee");

class Manager extends Employee{
    constructor (name, id, email, officeNumber) {
        if (typeof officeNumber !== 'string' || !officeNumber.trim().length) {
            throw new Error('Expected the parameter of officeNumber to be entered as a string')
        }
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;