<template>
  <h1>Les taches</h1>
  <hr />
  <ul>
    <li v-bind:key="index" v-for="(articles, index) in this.allArticles"></li>
    <div class="card m-2">
      <!-- <h3>{{articles.body}}</h3> -->
    </div>
  </ul>
</template>

<script>
// import axios from 'axios';
export default {
  name: "lesTaches",
  data() {
    return {
      allArticles: []
    };
  }
};

// axios.get('https://api.github.com/users/mapbox')
//   .then((response) => {
//     console.log(response.data);
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.headers);
//     console.log(response.config);
//   });
</script>

<style></style>mport { create
