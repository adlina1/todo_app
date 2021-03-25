<template>
  <div>
      <h3>Liste des tâches </h3>
      <input type="text" name="" id=""/> 
      <button>add</button>
      <button>sup</button>
      <div>
        {{"Ident :"+getIdentTodolist }}
      </div>
      <p>
          {{ getTodos }}
      </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name:'ListeTodo',
    props:{
        msg:String
    },

     computed: {
    ...mapGetters("compte", ["myToken", "getUser"]),
    ...mapGetters("todolist", ["getTodos","getIdentTodolist"])
  },

}
</script>

<style>

</style>