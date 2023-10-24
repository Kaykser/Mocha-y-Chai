const Employee = require("./Employee");
class Director extends Employee {
  constructor(name) {
    super(name);
    this.reports = [];
  }
}

module.exports = Director;
