class Task {
    constructor( titole, dueDate ) {
        this.titole = titole;
        this.dueDate = dueDate;
        this.state = "toDo";
    }
}

const app = new Vue (
    {
        el: "#root",
        data: {
            tasks: [
                new Task("titole", "dueDate"),
                new Task("titole1", "dueDate1"),
                new Task("titole2", "dueDate2"),
                new Task("titole3", "dueDate3"),
            ],
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
            }
        }
    }
);