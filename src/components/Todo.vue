<template>
  <h1>ToDo</h1>
  <hr/>

  <ul>
    <div class="card m-2">
      <p> {{ getMyTodoLists }} </p>
  </div>
  </ul>

  <div>
    <input type="text" v-model="myTodoName" placeholder="Enter your todo"/> <br>
    <button id="add" @click="create2">Add a todo</button>
  </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';

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
    },

    create2(){
      
    },

     computed: {
    ...mapGetters("todolist", ["getMyTodoLists"]),
    },
  }
};
</script>


<style scoped>
#add{
  margin-top: 1%;
}
#add:hover{
  background-color: aquamarine;
}
</style>