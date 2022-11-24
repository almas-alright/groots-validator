const customizeRules = require("./src/rules/customizeRules.json");
const { Validator } = require("./src/validator.ts");
const validator = new Validator();
validator.addRules(customizeRules);
