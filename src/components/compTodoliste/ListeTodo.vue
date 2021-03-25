<template>
  <div>
      <h3>Liste des tâches</h3>
      <p>
          {{ getTodos }}
      </p>
      <input type="text" name="" id=""/>
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
    ...mapGetters("todolist", ["getTodos"])
  },

}
</script>

<style>

</style>