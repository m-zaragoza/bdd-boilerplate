Feature: add task
In order to remember a task
As a user
I want to be able to add a task to our task list

  Scenario: Marta wants to add a task
    Given Marta has a task list
    When Marta adds the task "buy coffee"
    Then "buy coffee" should be in our task list
