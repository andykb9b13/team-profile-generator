const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, wildCard) {
        super(name, id, email)
        this.wildCard = wildCard;
    }
    getGithub() {
        return this.wildCard
    }
    getRole() {
        return this.role = "Engineer"
    }
}

module.exports = Engineer;
