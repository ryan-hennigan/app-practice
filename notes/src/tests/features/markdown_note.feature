Feature: Creating a note with markdown
  In order to have formatted notes
  As a user
  I want to be able to create formatted notes

  Background:
    Given I open the page
    And I have no notes

  Scenario: Add markdown note
    And I click the "Add Note" button
    And I click the "Add Note" button
    When I type "# markdown1" in note 1
    When I type "## markdown2" in note 2
    Then I should have "h1" in note 1 with message "markdown1"
    Then I should have "h2" in note 2 with message "markdown2"
    Then I have 2 notes
