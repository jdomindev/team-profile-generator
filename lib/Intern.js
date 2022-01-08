const Employee = require('./Employee');

class Intern extends Employee {
  constructor(school) {
    const nameFull = Employee.nameFull;
    const id = Employee.id;
    const email = Employee.email;

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


const bob = new Intern("Penn");
console.log(bob.getSchool());
console.log(bob.getRole());