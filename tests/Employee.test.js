const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Name", () => {
        it("should return the name of the Employee", () => {
            const name = "Andy";
            const obj = new Employee(name);
            expect(obj.getName()).toEqual(name);
        })
    })
    describe("Id", () => {
        it("should return the Id of the Employee", () => {
            const id = "12345";
            const obj = new Employee('', '', id);
            expect(obj.getId()).toEqual(id);
        })
    })
    describe("Role", () => {
        it("should return the Role of Employee", () => {
            const obj = new Employee();
            expect(obj.getRole(0)).toEqual("Employee");
        })
    })
    describe("Email", () => {
        it("should return the Email of the Employee", () => {
            const email = "andy.kleindienst@gmail.com";
            const obj = new Employee('', '', '', email);
            expect(obj.getEmail()).toEqual(email);
        })
    })
})