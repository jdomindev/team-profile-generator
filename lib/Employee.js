class Employee {
  constructor(name, id, email) {
  this.name = name;
  this.id = id;
  this.email = email;
  }
  getName = () => {
    console.log(this.name);
  };
  getId = () => {
    console.log(this.id);
    return this.id;
  };
  getEmail = () => {
    console.log(this.email);
    return this.email;
  };
  getRole = () => {
    console.log("Employee");
    return "Employee";
  };
}

const bob = new Employee("bob", 1, "bob@test.com")


bob.getRole();
bob.getName();