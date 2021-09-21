class Task {
    constructor( titole, dueDate, state="toDo" ) {
        this.titole = titole;
        this.dueDate = new Date(dueDate+"T00:00");
        this.state = state;
        this.index = 0;
        this.changeMode = false;
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
        computed: {
            toDos: function() {
                return this.tasks.map((el, i) => ({...el, index : i})).filter(task => task.state === "toDo")
            },
            inProgress: function() {
                return this.tasks.map((el, i) => ({...el, index : i})).filter(task => task.state === "inProgress")
            },
            done: function() {
                return this.tasks.map((el, i) => ({...el, index : i})).filter(task => task.state === "done")
            }
        },
        methods: {
            addTask: function(titole, dueDate) {
                this.tasks.push(new Task(titole, dueDate));
            },
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
            isExpired: function(dueDate) {
                if (this.currentDate.getTime() >= dueDate.getTime()) {
                    return "c-task__date--expired";
                }
            },
            changeInfo: function(i) {
                this.tasks[i].changeMode = (this.tasks[i].changeMode)? false : true;
            },
            changeModeOn: function(i) {
                return this.tasks[i].changeMode;
            }
        }
    }
);