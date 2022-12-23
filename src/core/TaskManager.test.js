import TaskManager from "./TaskManager";
import Task from "./Task";


describe('TaskManager', () => {
    let taskManager;

    beforeEach(() => {
        taskManager = new TaskManager();
    })

    it('should have an empty array upon instantiation', async () => {
        expect(taskManager.taskList).toEqual([]);
    });

    describe('Add task', () => {
        it('should add a task with the given description', async () => {
            const testTask = 'test task';

            taskManager.addTask(testTask);

            expect(taskManager.taskList[0]).toBeInstanceOf(Task);
            expect(taskManager.taskList[0].description).toBe(testTask);
        });
    });

    describe('empty description', () => {
        it('should throw an error', async () => {
            expect(() => {
                taskManager.addTask('');
            }).toThrowError('Please provide a task description')
        });

        it('should not store a task', async () => {
            try {
                taskManager.addTask('');
            } catch { }

            expect(taskManager.taskList).not.toContainEqual(
                expect.objectContaining({ description: '' }))
        });
    });

    describe('Toggle task', () => {
        it('should toggle the task for the given ID', async () => {
            const testTask = new Task('buy bread');
            
            taskManager.taskList = [testTask];
            taskManager.toggleTask(testTask.id);

            expect(testTask.toggled).toBe(true);
        });
    });

    describe('Delete task', () => {
        it('should delete the task for the given ID', async () => {
            const testTask = new Task('buy coffee');

            taskManager.taskList = [testTask];
            taskManager.deleteTask(testTask.id);

            expect(taskManager.taskList).not.toContainEqual(expect.objectContaining({ id: testTask.id }));
        });
    });
});