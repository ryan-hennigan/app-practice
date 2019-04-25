Feature: Creating a note
  In order to have notes
  As a user
  I want to be able to create notes

  Scenario: Add note via button
    Given I open the page
    And I have 0 notes
    And I click the "Add Note" button
    Then I have 1 notes
