<template>
   
</template>

<script>
    import { mapActions, mapGetters } from "vuex";
    import Accueil from '@/components/Accueil.vue';

    export default {
        name: 'Home',
        components: {
            Accueil
        },
        methods: {
            ...mapActions(),
        },
        created() {
            this.load()
        },
        computed: {
        ...mapGetters()
        }
    }
</script>
