export function DELETETODO(state, todo) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
}

export function display(state){
    console.log(this.todo.slice(1));
}