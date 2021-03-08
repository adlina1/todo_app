
<template>

<ul>
  <li v-for="todo in todos" v-bind:key="todo.id">
    {{ todo.name }} 
    <input type='checkbox' v-model="todo.completed">
    <label for="checkbox"> Completed ? {{ todo.completed }} </label>
    <button v-on:click="deleteTodo(todo)">Supprimer</button>
  </li>
</ul>

<p> Hello </p>

<footer class = "footer" v-show="hasTodos">
  <ul class = "filters">
    <li> Toutes </li>
    <li> A faire </li>
    <li> Faites </li>
  </ul>
  <button class = "clear-completed" v-show="completed" @click.prevent="deleteCompleted">
    Supprimer les tâches finies </button>
</footer>

<!-- <div id="app">
	<dropdown :on-click='changeInstrument' :items='instruments'></dropdown>
	<p>Currently selected instrument: <span>{{activeInstrument}}</span></p>
</div> -->

</template>


<script>

export default {
  name: 'App',
  components: {

  },
  computed: {
    // filterTodos() {
    //   if(this.filter === 'todo'){

    //   } else if(this.filter === 'done'){

    //   }
    // }
  }

}
</script>



<style>
</style>

