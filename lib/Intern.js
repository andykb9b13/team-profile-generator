const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, wildCard) {
        super(name, id, email)
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
