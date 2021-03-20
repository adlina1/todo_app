<template>
  <h1>ToDo</h1>
  <hr/>

  <ul>
    <div class="card m-2">
  </div>
  </ul>

  <div>
    <input type="text" v-model="myTodoName"/>
    <button @click="create">Add a todo</button>
  </div>

</template>

<script>
import { mapActions } from 'vuex';

export default {
  namespaced: true,
  name: 'lesTaches',

  data() {
    return {
      myTodoName: ""
    };
  },

  methods: {

    ...mapActions(
      "todolist", ["createToDoList"]
      ),

    create(){
        this.createToDoList(this.myTodoName)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log("Une erreur est apparue:\n",error);
        });
    }
  }
};
</script>
            