const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(nameFull, id, email, github) {

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

module.exports = Engineer;