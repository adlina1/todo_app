export function chargement(state, myList) {
  state.todoLists = myList;
}


export function ajouter(state,liste){
  state.todoLists.unshift(liste)
}

/**
 * recuperation des listes
 * @param {*} state 
 * @param {*} data 
 */
export function getTodoList(state,data){
  state.todoLists = data;
}

/**
 * 
 * @param {*} data 
 */
export function suppressionTodoList(data){
  console.log(data);
}


export function set_Todos(state,data){
  state.todos = data;
}

export function set_identTodoList(state,ident){
  state.ident = ident;
}



