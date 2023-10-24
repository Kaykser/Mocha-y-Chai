const Worker = require("./Worker");

class Engineer extends Worker {
  constructor(name, programLanguage = "") {
    super(name);
    this.programLanguage = programLanguage;
  }
}

module.exports = Engineer;
