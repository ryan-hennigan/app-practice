const {Then} = require("cucumber");
const {checkMarkdown} = require("../support/actions");

Then("I should have {string} in note {int} with message {string}", checkMarkdown);
