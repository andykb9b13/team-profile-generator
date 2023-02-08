const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, role, id, email, wildCard) {
        super(name, role, id, email)
        this.wildCard = wildCard;
    }
    getGithub() {
        return this.wildCard
    }
    getRole() {
        return this.role = "engineer"
    }
}

module.exports = Engineer;
