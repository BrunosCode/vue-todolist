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
            tasks: [],
            newTitole: "",
            newDueDate: ""
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
            resetInput: function() {
                this.newTitole = "";
                this.newDueDate = "";
            }
        }
    }
);