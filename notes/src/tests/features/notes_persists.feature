Feature: Note persistance
  In order to keep notes
  As a user
  I want to be able to save notes

  Background:
    Given I open the page

  Scenario: Add note via button
    Given I have no notes
    And I click the "Add Note" button
    And I click the "Add Note" button
    And I close the page
    And I open the page
    Then I have 2 notes
