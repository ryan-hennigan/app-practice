Feature: Creating a note
  In order to have notes
  As a user
  I want to be able to create notes

  Background:
    Given I open the page
    And I have no notes

  Scenario: Add note via button
    And I click the "Add Note" button
    And I click the "Add Note" button
    Then I have 2 notes
