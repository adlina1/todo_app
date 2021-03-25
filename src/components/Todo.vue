<template>
  <div>
    
    <div class="container">
      <div class="row">
        <!-- colonne de droite -->
        <div class="col-lg-6">
          <ajouterList id="ajoutList" />
        </div>
         <div class="col-lg-6">
           <!-- <listeTodo id="tache"/> -->
         </div>
      </div>
    </div>
  </div>
</template>

<script>
import ajouterList from '@/components/compTodoliste/AjouterTodoList.vue';
//import listeTodo from '@/components/compTodoliste/ListeTodo.vue';
// import { mapActions, mapGetters } from "vuex";

export default {
  namespaced: true,
  name: "Todo",

  data() {
    return {
     value:'',
    };
  },

  

  methods: {
    
  },
  components: {
    ajouterList,
    //listeTodo
  }

  
};
</script>

<style scoped>


#ajoutList{
  margin-top: 0px
}
#tache{
  margin-top: 20px;
}
</style>
