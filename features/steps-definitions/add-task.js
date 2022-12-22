import { Given, When, Then } from 'cucumber';
import assert from 'assert';

Given('Marta has a task list', function () {
    assert.deepStrictEqual(this.taskManager.taskList, []);
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('Marta adds the task {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('{string} should be in our task list', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});