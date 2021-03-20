<template>
  <h1>Les taches</h1>
  <hr/>

  <ul>
    <div class="card m-2">
  </div>
  </ul>

  <div>
    <input type="text" v-model="myTodoName"/>
    <button @click="create">Submit</button>
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
      "todolisst", ["createToDoList"]
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
            