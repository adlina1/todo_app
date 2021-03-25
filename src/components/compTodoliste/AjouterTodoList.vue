<template>
  <div>
    <h3>Nouvelle liste</h3>
    <div class="form-group">
      <input v-model="myTodoName" type="text" name="" id="" />
      <button @click="createListe" id="add" class="btn btn-success">
        Ajouter
      </button>
      <button class="btn btn-danger" @click="deleteTodoListe">
        Supprimer
      </button>
    </div>
    <div>
      <ul>
        <!-- {{ load() }} -->
        <div class="list-group">
          <ul>
            <li v-bind:key="index" v-for="(toDolist, index) in load()">
              <button
                type="button"
                class="list-group-item list-group-item-action"
                @click.prevent="showId(toDolist.id, toDolist.name)"
              >
                {{ toDolist.name }}
              </button>
              <ListeTodoListe class = "comp" :monId="idTodoListCurrent"></ListeTodoListe>
              
            </li>
          </ul>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import LIsteTodoList from './LIsteTodoList.vue';

export default {
  name: "AjouterTodoList",
  props: {
    msg: String,
  },

  components: {
    ListeTodoListe : LIsteTodoList
  },

  data() {
    return {
      myTodoName: "",
      idTodoListCurrent: "",
      toke: ""
    };
  },

  computed: {
    ...mapGetters("compte", ["myToken", "getUser"]),
    ...mapGetters("todolist", ["getMyTodoLists","loadTodoList"])
  },

  methods: {
    ...mapActions("todolist", [
      "createTodoList",
      "loadTodoLists",
      "deleteTodoList",
      "loadTodos"
    ]),
    mounted() {
      this.createToDoList();
    },

    createListe() {
      this.createTodoList({ token: this.myToken, name: this.myTodoName });
    },

    load() {
      this.loadTodoLists(this.myToken);
      return this.getMyTodoLists;
    },
    showId(ident, name) {
      this.idTodoListCurrent = ident;
      this.myTodoName = name;
      this.findTodos();
    },

    deleteTodoListe() {
      this.deleteTodoList({ token: this.myToken, id: this.idTodoListCurrent });
      this.load();
      this.myTodoName ="";
    },

    findTodos(){
      this.loadTodos({id:this.idTodoListCurrent,token:this.myToken});
    },

   
  },
  

};
</script>

<style scoped>
.comp {
  display: none;
}

ul{
    list-style: none;
}
#add {
  margin-top: 1%;
}

#add:hover {
  background-color: aquamarine;
}

input {
  margin: 15px;
}

button {
  margin: 10px;
}
</style>>