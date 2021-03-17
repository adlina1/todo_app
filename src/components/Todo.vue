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
export default {
    name : 'lesTaches',
    data(){
        return {
            allArticles: []
        }
    }

}
</script>

<style>

</style>