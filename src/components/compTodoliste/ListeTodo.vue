<template>
  <div>
      <h3>Liste des tâches </h3>
      <input v-model="todo_name" type="text" name="" id=""/> 
      <button class="btn btn-primary" @click="createTodo({name: todo_name, todolist_id: getCurrentList.id, token: myToken})"> Ajouter </button>
      <button class="btn-supr btn btn-danger">Supprimer</button>
      <div> 
        {{"Ident :"+getIdentTodolist }}
      </div>
      
      <ul>
        <li v-for="todo in getCurrentList" v-bind:key="todo">{{ todo.name }}</li>
      </ul>

      <!-- {{getCurrentList}} -->
      <!-- {{todo_name}} -->

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name:'ListeTodo',

    data(){
      return {
        todo_name: ''
    }},


    props:{
        msg:String
    },

    methods: {
      ...mapActions("todolist", ["createTodo"])
    },

     computed: {
    ...mapGetters("compte", ["myToken", "getUser"]),
    ...mapGetters("todolist", ["getTodos","getIdentTodolist","getMyTodoLists","getCurrentList"])
  },

}
</script>

<style scoped>

</style>