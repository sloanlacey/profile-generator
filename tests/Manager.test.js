const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it('should create an extension of the employee class called manager with the properties of name, employee id, and office number', () => {
        const manager = new Manager ('Phteven', 77, 'phteven@manager.com', 3);

        expect(manager.name).toEqual('Phteven');
        expect(manager.id).toEqual(77);
        expect(manager.email).toEqual('phteven@manager.com');
        expect(manager.officeNumber).toEqual(3);
    })

    it('should throw an error if the parameter of name is not a string', () => {
        const callBack = () => new Manager (55, 77, 'phteven@manager.com', 3);
        const error = new Error ('Expected the parameter of name to be entered as a string');

        expect(callBack).toThrowError(error);
    })

    it('should throw an error if the parameter of id is not a number', () => {
        const callBack = () => new Manager ('Phteven', 'hello', 'phteven@manager.com', 3);
        const error = new Error ('Expected the parameter of id to be a number');

        expect(callBack).toThrowError(error);
    })

    it('should throw an error if the parameter of email is not a string', () => {
        const callBack = () => new Manager ('Phteven', 77, 46, 3);
        const error = new Error ('Expected the parameter of email to be entered as a string');

        expect(callBack).toThrowError(error);

    })

    it('should throw an error if the parameter of officeNumber is not a number', () => {
        const callBack = () => new Manager ('Phteven', 77, 'phteven@manager.com', 'office num');
        const error = new Error ('Expected the parameter of officeNumber to be entered as a number');

        expect(callBack).toThrowError(error);

    })

})

describe('getName', () => {
    it('should return the parameter for name that was passed in through the Manager class', () => {
        const manager = new Manager ('Phteven', 77, 'phteven@manager.com', 3);

        expect(manager.getName()).toBe('Phteven');
    })
})

describe('getId', () => {
    it('should return the parameter for id that was passed in through the Manager class', () => {
        const manager = new Manager ('Phteven', 77, 'phteven@manager.com', 3);

        expect(manager.getId()).toBe(77);
    })
})

describe('getEmail', () => {
    it('should return the parameter for email that was passed in through the Manager class', () => {
        const manager = new Manager ('Phteven', 77, 'phteven@manager.com', 3);

        expect(manager.getEmail()).toBe('phteven@manager.com');
    })
})

describe('getOfficeNumber', () => {
    it('should return the parameter for officeNumber that was passed in through the Manager class', () => {
        const manager = new Manager ('Phteven', 77, 'phteven@manager.com', 3);

        expect(manager.getOfficeNumber()).toBe(3);
    })
})

describe('getRole', () => {
    it('should return the parameter for role that was defined by the Manager class', () => {
        const manager = new Manager ('Phteven', 77, 'phteven@manager.com', 3);

        expect(manager.getRole()).toBe('Manager');
    })
})

})