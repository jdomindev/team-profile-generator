class Employee {
  constructor(nameFull, id, email) {
    this.nameFull = nameFull;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.nameFull;
  };
  getId() {
    return this.id;
  };
  getEmail() {
    return this.email;
  };
  getRole() {
    return "Employee";
  };
}

module.exports = Employee
