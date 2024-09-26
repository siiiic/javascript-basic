'use strict';

const toDoList = {
    list: [],
    getTask: function (id) {
        return this.list.findIndex(task => task.id === id);
    },
    addTask: function (title, priority) {
        const id = this.list.length + 1;
        this.list.push({title, id, priority});
    },
    deleteTask: function (id) {
        this.getTask(id) === -1 ?
        console.log(`Задачи с id: ${id} нет в списке`) :
        this.list.splice(this.getTask(id), 1);
    },
    sortByPriority: function () {
        this.list.sort((a, b) => a.priority - b.priority);  
    },
    updateTitle: function (id, title) {
        this.list[this.getTask(id)].title = title;
    },
    updatePriority: function (id, priority) {
        this.list[this.getTask(id)].priority = priority;
    }
}

toDoList.addTask('Помыть посуду', 2);
toDoList.addTask('Заказать покушить', 3);
toDoList.addTask('Встретиться с дружочками', 5);
toDoList.addTask('Бильярд', 4);
toDoList.addTask('Сделать дз', 1);
toDoList.updateTitle(5, 'Не делать дз');
toDoList.updatePriority(5, 6)
toDoList.sortByPriority();
toDoList.deleteTask(3);
toDoList.deleteTask(100);
console.log(toDoList);

