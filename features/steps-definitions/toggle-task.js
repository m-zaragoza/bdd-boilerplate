import { Given, When, Then } from "cucumber";
import assert from 'assert';

Given('Marta has added a task {string}', function (string) {
    this.taskManager.addTask(string);
});

When('Marta toggles the task {string}', function (string) {
    const task = this.taskManager.taskList.find(task => task.description === string);

    this.taskManager.toggleTask(task.id);
});

Then('the task {string} should be set to undone', function (string) {
    const task = this.taskManager.taskList.find(task => task.description === string);

    assert.equal(task.toggled, false);
});

Then('the task {string} should be set to done', function (string) {
    const task = this.taskManager.taskList.find(task => task.description === string);
    
    assert.equal(task.toggled, true);
});