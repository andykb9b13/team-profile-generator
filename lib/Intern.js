const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, role, id, email, wildCard) {
        super(name, role, id, email)
        this.wildCard = wildCard;
    }
    getSchool() {
        return this.wildCard
    }
    getRole() {
        return this.role = "Intern"
    }
}

module.exports = Intern;
