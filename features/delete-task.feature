Feature: Delete Task
In order to keep my tasks tidy
As a user
I want to be able to delete tasks

  Scenario: Marta wants to delete a task
    Given Marta has the task 'buy coffee' in her task list
    When Marta deletes the task 'buy coffee'
    Then 'buy coffee' should no longer be on the task list
