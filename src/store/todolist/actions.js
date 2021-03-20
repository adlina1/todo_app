import axios from "axios";

export function createToDoList( {commit}, name ){

    let todoListName = this.title;

    axios.post("http://138.68.74.39/api/todolist?name="+todoListName)
    .then(function(response) {
        commit("createMyTodoList", response.data);
    })
    .catch(function (error) {
        console.log("Il y a eu une erreur:\n",error);
    });
}