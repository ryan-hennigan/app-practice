const {Given,When,Then} = require("cucumber");
const {openHomePage, checkNoteCount,clickButton} = require("../support/actions");

Given(/^I open the page$/, openHomePage);

Given(/^I click the (.*) button$/, clickButton);

Then("I have {int} notes", checkNoteCount);
