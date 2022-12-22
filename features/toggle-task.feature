Feature: Toggle Task
In order to keep track of what I did
As a user
I want to be able to toggle tasks from undone to done

  Scenario: Tasks are undone by default
    When Marta adds the task 'buy bread'
    Then the task 'buy bread' should be set to undone

  Scenario: Toggle the task to done
    Given Marta has added a task 'buy bread'
    When Marta toggles the task 'buy bread'
    Then the task 'buy bread' should be set to done
