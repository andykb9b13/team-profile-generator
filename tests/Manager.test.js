const Manager = require('../lib/Manager')

describe("Manager", () => {
    describe("Name", () => {
        it("should return the name of the Employee", () => {
            const name = "Andy";
            const obj = new Manager(name);
            expect(obj.getName()).toEqual(name);
        })
    })
    describe("Id", () => {
        it("should return the Id of the Employee", () => {
            const id = "12345";
            const obj = new Manager('', id);
            expect(obj.getId()).toEqual(id);
        })
    })
    describe("Role", () => {
        it("should return the Role of Employee", () => {
            const obj = new Manager();
            expect(obj.getRole(0)).toEqual("Manager");
        })
    })
    describe("Email", () => {
        it("should return the Email of the Employee", () => {
            const email = "andy.kleindienst@gmail.com";
            const obj = new Manager('', '', email);
            expect(obj.getEmail()).toEqual(email);
        })
    })
    describe("Wild Card", () => {
        it("should return the school name of the Employee", () => {
            const officeNumber = "919-949-1840";
            const obj = new Manager('', '', '', officeNumber);
            expect(obj.getOfficeNumber()).toEqual(officeNumber);

        })
    })
})