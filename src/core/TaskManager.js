import Task from './Task';
import AbstractTaskManager from './AbstractTaskManager';

class TaskManager extends AbstractTaskManager {
    constructor() {
        super();
        this.taskList = [];
    }

    addTask(description) {
        if (!description) {
            throw new Error('Please provide a task description');
        }
        const newTask = new Task(description);

        this.taskList.push(newTask);
    }

    toggleTask(taskID) {
        const task = this.taskList.find(task => task.id === taskID);

        task.toggled = !task.toggled;
    }

    deleteTask(taskID) {
        const taskToRemove = this.taskList.find(task => task.id === taskID); 

        const taskIndex = this.taskList.indexOf(taskToRemove);

        if (taskIndex > -1) { this.taskList.splice(taskIndex, 1) }; 
    }
}

export default TaskManager;