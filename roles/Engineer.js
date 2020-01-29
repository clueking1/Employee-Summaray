const Employee = require("./Employee");

class Engineer extends Employee {

  constructor(name, id, email, git) {
    super(name, id, email);
    this.git = git;
    console.log(git)
  }

  getRole() {
    return "Engineer";
  }

  getGithub() {
    return this.git;
  }

}

module.exports = Engineer;