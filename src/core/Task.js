import uuid from 'uuid/v4';

export default class Task {
    constructor(description) {
        this.description = description;
        this.id = uuid();
        this.toggled = false;
    }
}