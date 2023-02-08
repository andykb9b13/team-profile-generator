const Intern = require('../lib/Intern')

describe("Intern", () => {
    describe("Name", () => {
        it("should return the name of the Employee", () => {
            const name = "Andy";
            const obj = new Intern(name);
            expect(obj.getName()).toEqual(name);
        })
    })
    describe("Id", () => {
        it("should return the Id of the Employee", () => {
            const id = "12345";
            const obj = new Intern('', '', id);
            expect(obj.getId()).toEqual(id);
        })
    })
    describe("Role", () => {
        it("should return the Role of Employee", () => {
            const obj = new Intern();
            expect(obj.getRole(0)).toEqual("Intern");
        })
    })
    describe("Email", () => {
        it("should return the Email of the Employee", () => {
            const email = "andy.kleindienst@gmail.com";
            const obj = new Intern('', '', '', email);
            expect(obj.getEmail()).toEqual(email);
        })
    })
    describe("Wild Card", () => {
        it("should return the school name of the Employee", () => {
            const school = "UNC Chapel Hill";
            const obj = new Intern('', '', '', '', school);
            expect(obj.getSchool()).toEqual(school);

        })
    })
})