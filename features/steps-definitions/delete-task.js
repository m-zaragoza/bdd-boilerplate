import { Given, When, Then } from 'cucumber';
import assert from 'assert';

Given('Marta has the task {string} in her task list', function (string) {
   this.taskManager.addTask(string);
});

When('Marta deletes the task {string}', function (string) {
    const task = this.taskManager.taskList.find(task => task.description === string);

    this.taskManager.deleteTask(task.id);
});

Then('{string} should no longer be on the task list', function (string) {

    const task = this.taskManager.taskList.find(task => task.description === string);
    
    assert.equal(this.taskManager.taskList.includes(task), false);
});