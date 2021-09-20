class Task {
    constructor( titole, dueDate, state="toDo" ) {
        this.titole = titole;
        this.dueDate = new Date(dueDate+"T00:00");
        this.state = state;
        this.index = 0;
    }
}

const app = new Vue (
    {
        el: "#root",
        data: {
            tasks: [
                new Task("Revisione Macchina", "2021-10-14"),
                new Task("Cambiare finestra della cucina", "2021-08-14", "inProgress"),
                new Task("Comprare regalo di compleanno", "2021-09-14", "done"),
                new Task("Questa è la parte più difficile dell'esercizio", "2021-09-20", "inProgress"),
            ],
            currentDate: new Date(),
            // this inputs needs some validation
            newTitole: "",
            newDueDate: "",
        },
        methods: {
            addTask: function(titole, dueDate) {
                this.tasks.push(new Task(titole, dueDate));
            },
            // chenge the task list
            changeState: function(taskIndex, newState) {
                this.tasks[taskIndex].state = newState;
            },
            removeTask: function(taskIndex) {
                this.tasks.splice(taskIndex, 1);
            },
            // ### it needs a refactoring
            resetInput: function() {
                this.newTitole = "";
                this.newDueDate = "";
            },
            // needs a refactoring: should only filter, the map needs to be moved somewhere else
            stateFilter: function(chooseState) {
                return this.tasks.map((el, i) => ({...el, index : i})).filter(task => task.state === chooseState);
            },
            isExpired: function(dueDate) {
                if (this.currentDate.getTime() >= dueDate.getTime()) {
                    return "c-task__date--expired";
                }
            }
        }
    }
);