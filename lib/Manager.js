const Employee = require('./Employee');

class Manager extends Employee {
  constructor(nameFull, id, email, officeNum) {

    super(nameFull, id, email);
    this.officeNum = officeNum
  }
  getRole() {
    return "Manager"
  }
}

module.exports = Manager;