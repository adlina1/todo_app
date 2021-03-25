<template>
  <ul>
      <li>Premère liste</li>
      <li>Deuxième liste</li>
      <li>N ième liste</li>
  </ul>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name:'LIsteTodoList',
    props:{
        msg:String
    },

    methods:{

    }
}
</script>

<style>

</style>