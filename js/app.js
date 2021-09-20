class Task {
    constructor( titole, dueDate, state="toDo" ) {
        this.titole = titole;
        this.dueDate = new Date(dueDate+"T00:00");
        this.state = state;
    }
}

const app = new Vue (
    {
        el: "#root",
        data: {
            tasks: [
                new Task("test0", "2021-10-14"),
                new Task("test1", "2021-08-14", "inProgress"),
                new Task("test2", "2021-09-14", "done"),
                new Task("test3", "2021-09-20", "inProgress"),
            ],
            currentDate: new Date(),
            // this inputs needs some validation
            newTitole: "",
            newDueDate: ""
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
            printDate: function() {
                console.log(this.currentDate);
            },
            isExpired: function(dueDate) {
                if (this.currentDate.getTime() >= dueDate.getTime()) {
                    return "c-task__date--expired";
                }
            }
        }
    }
);