const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, role, id, email, wildCard) {
        super(name, role, id, email)
        this.wildCard = wildCard;
    }
    getOfficeNumber() {
        return this.wildCard
    }
    getRole() {
        return this.role = "Manager";
    }
}


module.exports = Manager;

