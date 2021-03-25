import axios from "axios";


/**
 * Recharger les liste
 * @param {*} param0 
 * @param {*} token 
 */
export function loadTodoLists({ commit }, token){
  axios
  .get('http://138.68.74.39/api/todolists', {headers: 
    {'Authorization': 'Bearer '+token}})
  .then(response => {
    console.log(response);
    commit("chargement", response.data);
  })
  .catch(error => {
    console.log("erreur trouvée [chargement todoList]:\n", error);
  });
}

/**
 * creation de la liste
 * @param {*} param0 
 * @param {*} info 
 */
export function createTodoList({ commit }, data){

  axios
  .post('http://138.68.74.39/api/todolist?name='+data["name"], null, 
    {headers: 
    {'Authorization': 'Bearer '+data["token"]}})
  .then(response => {
    commit("ajouter", response.data);
  })
  .catch(error => {
    console.log("erreur trouvée [creation todoList]:\n", error);
  });
}

export function modifCurrentlist({commit} ,key){
  console.log(key);
  commit("setCurrentList", key);
}


/**
 * Suppprimer une liste
 * @param {*} param0 
 * @param {*} data 
 */
export function deleteTodoList({ commit }, data){
  axios
  .delete('http://138.68.74.39/api/todolist/'+data["id"], 
  {headers: {
    'Authorization': 'Bearer '+data["token"]}
  })
  .then(response => {
    commit("suppressionTodoList", response.data);
  })
  .catch(error => {
    console.log("erreur trouvée [supp todoList]:\n", error);
  });
}

/**
 * recuperer les tâches d'une liste
 * @param {*} param0 
 * @param {*} info 
 */
export function loadTodos({ commit }, data){
  console.log("hh");
  axios
  .get('http://138.68.74.39/api/todos/'+data["id"], 
    {headers: 
      {'Authorization': 'Bearer '+data['token']}})
  .then(response => {
    console.log(response);
    commit("set_Todos", response.data);
    commit("set_identTodoList",data["id"]);
  })
  .catch(error => {
    console.log("erreur trouvée [chargement todos]s:\n", error);
  });
}
