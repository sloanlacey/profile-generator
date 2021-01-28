const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('should create an employee class with the properties of name, employee id, and email');
        const employee = new Employee('Buddy', 9, 'beef@beefyboy.com');

        expect(employee.name).toEqual('Buddy');
        expect(employee.id).toEqual(9);
        expect(employee.email).toEqual('beef@beefyboy.com');
    })

    it('should throw an error if the parameter of name is not a string', () => {
        const callBack = () => new Employee (7, 9, 'beef@beefyboy.com');
        const error = new Error ('Expected the parameter of name to be entered as a string');

        expect(callBack).toThrowError(error);
    })

    it('should throw an error if the parameter of id is not a number', () => {
        const callBack = () => new Employee ('Buddy', 'dog', 'beef@beefyboy.com');
        const error = new Error ('Expected the parameter of id to be a number');

        expect(callBack).toThrowError(error);
    })

    it('should throw an error if the parameter of email is not a string', () => {
        const callBack = () => new Employee ('Buddy', 9, 17);
        const error = new Error ('Expected the parameter of email to be entered as a string');

        expect(callBack).toThrowError(error);

    })

})

describe('getName', () => {
    it('should return the parameter for name that was passed in through the Employee class', () => {
        const employee = new Employee ('Buddy', 9, 'beef@beefyboy.com');

        expect(employee.getName()).toBe('Buddy');
    })
})

describe('getId', () => {
    it('should return the parameter for id that was passed in through the Employee class', () => {
        const employee = new Employee ('Buddy', 9, 'beef@beefyboy.com');

        expect(employee.getId()).toBe(9);
    })
})

describe('getEmail', () => {
    it('should return the parameter for email that was passed in through the Employee class', () => {
        const employee = new Employee ('Buddy', 9, 'beef@beefyboy.com');

        expect(employee.getEmail()).toBe('beef@beefyboy.com');
    })
})

describe('getRole', () => {
    it('should return the parameter for role that was defined by the Employee class', () => {
        const employee = new Employee ('Buddy', 9, 'beef@beefyboy.com');

        expect(employee.getRole()).toBe('Employee');
    })
})

