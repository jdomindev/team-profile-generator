const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(github) {
    const nameFull = Employee.nameFull;
    const id = Employee.id;
    const email = Employee.email;

    super(nameFull, id, email);
    this.github = github
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer"
  }
}

const bob = new Engineer("githubname");
console.log(bob.getGithub());
console.log(bob.getRole());