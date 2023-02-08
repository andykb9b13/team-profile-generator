const Engineer = require('../lib/Engineer')

describe("Engineer", () => {
    describe("Name", () => {
        it("should return the name of the Employee", () => {
            const name = "Andy";
            const obj = new Engineer(name);
            expect(obj.getName()).toEqual(name);
        })
    })
    describe("Id", () => {
        it("should return the Id of the Employee", () => {
            const id = "12345";
            const obj = new Engineer('', id);
            expect(obj.getId()).toEqual(id);
        })
    })
    describe("Role", () => {
        it("should return the Role of Employee", () => {
            const obj = new Engineer();
            expect(obj.getRole(0)).toEqual("Engineer");
        })
    })
    describe("Email", () => {
        it("should return the Email of the Employee", () => {
            const email = "andy.kleindienst@gmail.com";
            const obj = new Engineer('', '', email);
            expect(obj.getEmail()).toEqual(email);
        })
    })
    describe("Wild Card", () => {
        it("should return the gitHub profile name of the Employee", () => {
            const github = "andykb9b13";
            const obj = new Engineer('', '', '', github);
            expect(obj.getGithub()).toEqual(github);

        })
    })
})