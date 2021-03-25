<template>

  <ul>
      <li>Premère liste</li>
      <li>Deuxième liste</li>
      <li>  N-ème </li>
  </ul>
    

</template>

<script>


export default {
  
    name:'LIsteTodoList',

    // props:{
    //     msg:String,
    // },

    props: {
        monId: {
            type: String,
            required: true
        }
    },

    methods:{

    }
}
</script>

<style>

</style>