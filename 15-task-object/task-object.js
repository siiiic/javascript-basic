'use strict';

const _ = undefined;  // Использовать для изменения приоритета задачи без изменения заголовка updateTitlePriority(id, _, priority)

const toDoList = {
    list: [],
    idCounter: 0,
    getTask: function (taskId) {
        return this.list.find(({ id }) => id === taskId);
    },
    addTask: function (task) {
        let message = 'Task entry error';

        if (!task) {
            return message;
        }

        task.id = this.idCounter++; 
        this.list.push(task);
        return message = `The task with id: ${task.id} successfully added`;
    },
    deleteTask: function (id) {
        let message = `The task with id: ${id} was not found`;
        const isAdded = this.getTask(id);

        if (!isAdded) {
            return message;
        }

        this.list = this.list.filter(task => task.id !== isAdded.id);
        return message = `The task with id: ${id} successfully deleted`;
    },
    sortByPriority: function (statment = true) {
        let message = `There should be more than one task`;
        if(this.list.length <= 1) {
            return message;
        }

        this.list.sort((a, b) => 
        statment ?
        a.priority - b.priority : 
        b.priority - a.priority);

        statment ? 
        message = `Tasks sorted in ascending order` :
        message = `Tasks sorted in descending order`;
        return message;
    },
    updateTitlePriority: function (id, title = undefined , priority = undefined) {
        let message = `ID entry error`
        const task = this.getTask(id);

        if (!task) {
            return message;
        }

        switch(true) {
            case (title !== undefined && priority !== undefined):
                task.title = title;
                task.priority = priority;
                return message = `In task with id: ${id} title and priority successfully changed`;
            case (title !== undefined):
                task.title = title;
                return message = `In task with id: ${id} title successfully changed`;
            case (priority !== undefined): 
                task.priority = priority;
                return message = `In task with id: ${id} priority successfully changed`;
            default: 
            return message = 'Enter title or priority';
        }
    }
};

const Task1 = {
    title: 'Покормить кота',
    priority: 2
};

const Task2 = {
    title: 'Купить пластинки',
    priority: 1
};

const Task3 = {
    title: 'Заказать пиццу',
    priority: 3
};

const Task4 = {
    title: 'Бильярд',
    priority: 4
};

console.log(toDoList.addTask(Task1));
console.log(toDoList.addTask(Task2));
console.log(toDoList.addTask(Task3));
console.log(toDoList.addTask(Task4));

console.log(toDoList.list);

console.log(toDoList.sortByPriority());
console.log(toDoList.list);
console.log(toDoList.sortByPriority(false));
console.log(toDoList.list);

console.log(toDoList.deleteTask(4));
console.log(toDoList.deleteTask(3));
console.log(toDoList.list);

console.log(toDoList.updateTitlePriority(2, 'Приготовить пиццу'));

console.log(toDoList.list);