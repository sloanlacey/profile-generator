const Employee = require("./Employee");

class Manager extends Employee{
    constructor (name, id, email, officeNumber) {
        if (typeof officeNumber !== 'number' || isNaN(officeNumber)) {
            throw new Error('Expected the parameter of officeNumber to be entered as a number')
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