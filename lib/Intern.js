const Employee = require('./Employee');

class Intern extends Employee {
  constructor(nameFull, id, email, school) {

    super(nameFull, id, email);
    this.school = school
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern"
  }
}

module.exports = Intern;