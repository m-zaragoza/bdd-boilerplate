import { setWorldConstructor } from "cucumber";

class World {
    constructor() {
        this.taskManager = new TaskManager();
    }
}

setWorldConstructor(World);