import axios from "axios";

export function createToDoList( {commit}, data ){

    let todoListName = data["name"];
    console.log(data["token"]);
    console.log(commit);
    console.log(data);
    // Authorization: <type> <credentials> // bearer: porteur (du jeton)

    axios
    .post("http://138.68.74.39/api/todolist?name="+todoListName,null,
       { header:{
            "Authorization": 'Bearer '+data["token"]
        }
    })
    .then(function(response) {
        commit("createMyTodoList", response.data);
    });

    // +info["name"], null, {headers: {'Authorization': 'Bearer '+info["token"]}})
    //   .then(response => {commit("loadTodoList", response.data);})
    

} 









/*import axios from 'axios';

export function loadTodoLists({ commit }, token){
  axios.get('http://138.68.74.39/api/todolists', {headers: {'Authorization': 'Bearer '+token}})
      .then(response => {commit("loadTodoLists", response.data);})
}

export function loadTodoList({ commit }, info){
  axios.get('http://138.68.74.39/api/todos/'+info["id"], {headers: {'Authorization': 'Bearer '+info['token']}})
      .then(response => {commit("loadTodoList", response.data);})
}

export function createTodoList({ commit }, info){
  axios.post('http://138.68.74.39/api/todolist?name='+info["name"], null, {headers: {'Authorization': 'Bearer '+info["token"]}})
      .then(response => {commit("loadTodoList", response.data);})
}

export function deleteTodoList({ commit }, info){
  axios.delete('http://138.68.74.39/api/todolist/'+info["id"], {headers: {'Authorization': 'Bearer '+info["token"]}})
      .then(response => {commit("unloadTodoList", response.data);})
}

export function createTodo({ commit }, info){
  axios.post('http://138.68.74.39/api/todo?name='+info["name"]+'&completed='+info["completed"]+'&todolist_id='+info["id"], null, {headers: {'Authorization': 'Bearer '+info["token"]}})
      .then(response => {console.log(response.data);
        axios.get('http://138.68.74.39/api/todos/'+info["id"], {headers: {'Authorization': 'Bearer '+info['token']}})
          .then(response => {commit("loadTodoList", response.data);});})
}

export function deleteTodo({ commit }, info){
  axios.delete('http://138.68.74.39/api/todo/'+info["id"], {headers: {'Authorization': 'Bearer '+info["token"]}})
      .then(response => {console.log(response.data);
        axios.get('http://138.68.74.39/api/todos/'+info["listId"], {headers: {'Authorization': 'Bearer '+info['token']}})
          .then(response => {commit("loadTodoList", response.data);});})
}

export function completeTodo({ commit }, info){
  axios.post('http://138.68.74.39/api/completeTodo/'+info["id"]+'?name='+info["name"]+'&completed='+info["completed"]+'&todolist_id='+info["listId"], null, {headers: {'Authorization': 'Bearer '+info["token"]}})
      .then(response => {console.log(response.data);
        axios.get('http://138.68.74.39/api/todos/'+info["listId"], {headers: {'Authorization': 'Bearer '+info['token']}})
          .then(response => {commit("loadTodoList", response.data);});})
}

export function modifyTodo({ commit }, info){
  axios.patch('http://138.68.74.39/api/todo/'+info["id"]+'?name='+info["name"]+'&completed='+info["completed"]+'&todolist_id='+info["listId"], null, {headers: {'Authorization': 'Bearer '+info["token"]}})
      .then(response => {console.log(response.data);
        axios.get('http://138.68.74.39/api/todos/'+info["listId"], {headers: {'Authorization': 'Bearer '+info['token']}})
          .then(response => {commit("loadTodoList", response.data);});})
}*/