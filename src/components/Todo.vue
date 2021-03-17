<template>
  <h1>Les taches</h1>
  <hr>
  <ul>
      <li v-bind:key ="index" v-for="(articles,index) in this.allArticles"></li>
      <div class="card m-2" > 
          <!-- <h3>{{articles.body}}</h3> -->
        </div>
  </ul>
</template>

<script>
import axios from 'axios'
export default {
    name : 'lesTaches',
    data(){
        return {
            allArticles: []
        }
    },
    created(){
        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            // for(const article of response.data){
            //     this.allArticles.push(article)
            // } 
        })
    }

}
</script>

<style>

</style>