const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it('should create an extension of the employee class called engineer with the properties of name, employee id, and github username', () => {
        const engineer = new Engineer ('Teal', 32, 'mister@teal.com', 'tealrevolver');

        expect(engineer.name).toEqual('Teal');
        expect(engineer.id).toEqual(32);
        expect(engineer.email).toEqual('mister@teal.com');
        expect(engineer.github).toEqual('tealrevolver');
    })

    it('should throw an error if the parameter of name is not a string', () => {
        const callBack = () => new Engineer (9, 32, 'mister@teal.com', 'tealrevolver');
        const error = new Error ('Expected the parameter of name to be entered as a string');

        expect(callBack).toThrowError(error);
    })

    it('should throw an error if the parameter of id is not a number', () => {
        const callBack = () => new Engineer ('Teal', 'Revlover', 'mister@teal.com', 'tealrevolver');
        const error = new Error ('Expected the parameter of id to be a number');

        expect(callBack).toThrowError(error);
    })

    it('should throw an error if the parameter of email is not a string', () => {
        const callBack = () => new Engineer ('Teal', 32, 12, 'tealrevolver');
        const error = new Error ('Expected the parameter of email to be entered as a string');

        expect(callBack).toThrowError(error);

    })

    it('should throw an error if the parameter of github is not a string', () => {
        const callBack = () => new Engineer ('Teal', 32, 12, 33);
        const error = new Error ('Expected the parameter of github to be entered as a string');

        expect(callBack).toThrowError(error);

    })

})

describe('getName', () => {
    it('should return the parameter for name that was passed in through the Engineer class', () => {
        const engineer = new Engineer ('Teal', 32, 'mister@teal.com', 'tealrevolver');

        expect(engineer.getName()).toBe('Teal');
    })
})

describe('getId', () => {
    it('should return the parameter for id that was passed in through the Engineer class', () => {
        const engineer = new Engineer ('Teal', 32, 'mister@teal.com', 'tealrevolver');

        expect(engineer.getId()).toBe(32);
    })
})

describe('getEmail', () => {
    it('should return the parameter for email that was passed in through the Engineer class', () => {
        const engineer = new Engineer ('Teal', 32, 'mister@teal.com', 'tealrevolver');

        expect(engineer.getEmail()).toBe('mister@teal.com');
    })
})

describe('getGithub', () => {
    it('should return the parameter for github that was passed in through the Engineer class', () => {
        const engineer = new Engineer ('Teal', 32, 'mister@teal.com', 'tealrevolver');

        expect(engineer.getGithub()).toBe('tealrevolver');
    })
})

describe('getRole', () => {
    it('should return the parameter for role that was defined by the Engineer class', () => {
        const engineer = new Engineer ('Teal', 32, 'mister@teal.com', 'tealrevolver');

        expect(engineer.getRole()).toBe('Engineer');
    })
})

})