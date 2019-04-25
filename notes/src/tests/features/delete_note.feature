Feature: Deleting a note
  In order to remove a note
  As a user
  I want to be able to delete notes

  Scenario: Delete note via button
    Given I open the page
    And I have 0 notes
    And I click the "Add Note" button
    And I have 1 notes
    And I click the "Delete Note" button
    Then I have 0 notes
