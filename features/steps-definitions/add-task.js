import { Given, When, Then } from 'cucumber';
import assert from 'assert';

Given('Marta has a task list', function () {
    assert.deepStrictEqual(this.taskManager.taskList, []);
});

When('Marta adds the task {string}', function (string) {
    if (string === null) {
        string = '';
    }
    try {
        this.taskManager.addTask(string);
    } catch (error) {
        this.receivedError = error;
    }
});

Then('{string} should be in our task list', function (string) {
    assert.deepStrictEqual(this.taskManager.taskList[0].description, string);
});

Then('she should be notified to give a description', function () {
    assert.equal(this.receivedError.message, 'Please provide a description');
});