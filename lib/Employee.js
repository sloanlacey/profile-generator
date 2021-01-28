class Employee {
    constructor (name, id, email) {
      
        if (typeof name !== 'string' || !name.trim().length) {
            throw new Error('Expected the parameter of name to be entered as a string')
        }
        if (typeof id !== 'number' || isNaN(id)) {
            throw new Error('Expected the parameter of id to be a number')
        }
        if (typeof email !== 'string' || !email.trim().length) {
            throw new Error('Expected the parameter of name to be entered as a string')
        }

        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;