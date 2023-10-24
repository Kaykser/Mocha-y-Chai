const Employee = require("./Employee");

class Worker extends Employee {
  constructor(name) {
    super(name);
    this.projects = [];
  }
}

module.exports = Worker;
