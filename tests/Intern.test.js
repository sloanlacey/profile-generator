const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it('should create an extension of the employee class called intern with the properties of name, employee id, and school name');
        const intern = new Intern ('Callisto', 35, 'moonchild@jupiter.com', 'PSU');

        expect(intern.name).toEqual('Callisto');
        expect(intern.id).toEqual(35);
        expect(intern.email).toEqual('moonchild@jupiter.com');
        expect(intern.school).toEqual('PSU');

    })

    it('should throw an error if the parameter of name is not a string', () => {
        const callBack = () => new Intern (3, 35, 'moonchild@jupiter.com', 'PSU');
        const error = new Error ('Expected the parameter of name to be entered as a string');

        expect(callBack).toThrowError(error);
    })

    it('should throw an error if the parameter of id is not a number', () => {
        const callBack = () => new Intern ('Callisto', 'moon', 'moonchild@jupiter.com', 'PSU');
        const error = new Error ('Expected the parameter of id to be a number');

        expect(callBack).toThrowError(error);
    })

    it('should throw an error if the parameter of email is not a string', () => {
        const callBack = () => new Intern ('Callisto', 35, 6, 'PSU');
        const error = new Error ('Expected the parameter of email to be entered as a string');

        expect(callBack).toThrowError(error);

    })

    it('should throw an error if the parameter of school is not a string', () => {
        const callBack = () => new Intern ('Callisto', 35, 'moonchild@jupiter.com', 54);
        const error = new Error ('Expected the parameter of school to be entered as a string');

        expect(callBack).toThrowError(error);

    })

})

describe('getName', () => {
    it('should return the parameter for name that was passed in through the Intern class', () => {
        const intern = new Intern ('Callisto', 35, 'moonchild@jupiter.com', 'PSU');

        expect(intern.getName()).toBe('Callisto');
    })
})

describe('getId', () => {
    it('should return the parameter for id that was passed in through the Intern class', () => {
        const intern = new Intern ('Callisto', 35, 'moonchild@jupiter.com', 'PSU');

        expect(intern.getId()).toBe(35);
    })
})

describe('getEmail', () => {
    it('should return the parameter for email that was passed in through the Intern class', () => {
        const intern = new Intern ('Callisto', 35, 'moonchild@jupiter.com', 'PSU');

        expect(intern.getEmail()).toBe('moonchild@jupiter.com');
    })
})

describe('getSchool', () => {
    it('should return the parameter for school that was defined by the Intern class', () => {
        const intern = new Intern ('Callisto', 35, 'moonchild@jupiter.com', 'PSU');

        expect(intern.getRole()).toBe('PSU');
    })
})

describe('getRole', () => {
    it('should return the parameter for role that was defined by the Intern class', () => {
        const intern = new Intern ('Callisto', 35, 'moonchild@jupiter.com', 'PSU');

        expect(intern.getRole()).toBe('Intern');
    })
})