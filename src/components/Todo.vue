<template>
  <h1>ToDo</h1>
  <hr />

  <ul>
    <div class="card m-2">
      <p>{{ getMyTodoLists }}</p>
      <p>IS CONNECTED ? : {{ getIsConnected }}</p>
    </div>
  </ul>

  <div>
    <p>{{ myTodoName }}</p>
    <div class="form-group">
      <input
        type="text"
        v-model="myTodoName"
        @click="addTodo(name)"
        placeholder="Enter your todo"
      />
      <br />
      <router-link class="btn btn-primary" id="add" to="\#">
         Ajouter un todoList
      </router-link>
      
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  namespaced: true,
  name: "lesTaches",

  data() {
    return {
      myTodoName: "",
      myTodos: [
        {
          id: 1,
          name: "todo name",
        },
      ],
    };
  },

  props: {
    myToken: { type: String, default: "" },
  },

  methods: {
    ...mapActions("todolist", ["createToDoList"]),

    addTodo(name) {
      this.myTodos.push(name);
    },

    create() {
      this.createToDoList({ token: this.token, name: this.myTodoName })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log("Une erreur est apparue:\n", error);
        });
    },

    computed: {
      ...mapGetters("compte", ["myToken"]),
      ...mapGetters("todolist", ["getMyTodoLists"]),
      ...mapGetters("compte", ["getIsConnected"])
    },
  },
};
</script>

<style scoped>
#add {
  margin-top: 1%;
}
#add:hover {
  background-color: aquamarine;
}
</style>
