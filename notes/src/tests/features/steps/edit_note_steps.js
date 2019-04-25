const {Given,When,Then} = require("cucumber");
const {editNote,checkNote} = require("../support/actions");

When("I type {string} in note {int}", editNote);

Then("note {int} should say {string}",checkNote);
