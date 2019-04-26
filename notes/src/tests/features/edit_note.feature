Feature: Editing a note
  In order to maintain notes
  As a user
  I want to be able to edit notes

  Background:
    Given I open the page
    And I have no notes

  Scenario: Edit blank note via click
    And I click the "Add Note" button
    And I have 1 notes
    When I type "new note" in note 1
    Then note 1 should say "new note"

  Scenario: Edit existing note via click
    And I click the "Add Note" button
    And I click the "Add Note" button
    And I have 2 notes
    When I type "new note" in note 1
    And I type "222" in note 2
    Then note 2 should say "222"
    Then note 1 should say "new note"
