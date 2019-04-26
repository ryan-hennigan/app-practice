const {Given} = require("cucumber");
const {closePage} = require("../support/actions");

Given(/^I close the page$/, closePage);
