const Employee = require('./Employee');

class Manager extends Employee {
  constructor(officeNum) {
    const nameFull = Employee.nameFull;
    const id = Employee.id;
    const email = Employee.email;

    super(nameFull, id, email);
    this.officeNum = officeNum
  }
  getRole() {
    return "Manager"
  }
}


const bob = new Manager(24);
console.log(bob.officeNum);
console.log(bob.getRole());