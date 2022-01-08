class Employee {
  constructor(nameFull, id, email) {
    this.nameFull = nameFull;
    this.id = id;
    this.email = email;
  }
  getName() {
    console.log(this.nameFull);
    return this.nameFull;
  };
  getId() {
    console.log(this.id);
    return this.id;
  };
  getEmail() {
    console.log(this.email);
    return this.email;
  };
  getRole() {
    console.log("Employee");
    return "Employee";
  };
}

module.exports = Employee