<template>
  <div class="conteneur">
    <h1>Connexion</h1>
    <br />
    <br />
    <div class="row">
      <!-- La partie droite  -->
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form>
          <!-- Email -->
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              required
              v-model="email"
              aria-describedby="emailHelp"
              placeholder="Entrer votre adresse email s'il vous plait !"
            />
            <small id="emailHelp" class="form-text text-muted"
              >Nous ne partagerons jamais votre email avec qui que ce
              soit</small
            >
          </div>
          <br />
          <!-- Mot de passe  -->
          <div class="form-group">
            <label for="motDePasse">Mot de passe</label>
            <input
              type="password"
              class="form-control"
              id="motDePasse"
              required
              v-model="password"
              placeholder="Mot de passe"
            />
          </div>
          <br />
          <router-link @click="connectMe" class="btn btn-primary" to="#">
            Connexion
          </router-link>
        </form>
      </div>
      <p class="checkToken">Token : {{ myToken }}</p>
      <p>user : {{ getUser }} </p>

      <!-- La partie droite  -->
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "connexion",

  data() {
    return {
      email: "",
      password: ""
    };
  },

  computed: {
    ...mapGetters("compte", ["currentUser","myToken","getUser"])
  },

  methods: {
    ...mapActions("compte", ["login", "showUser"]),
    connectMe() {
      this.login({ email: this.email, password: this.password })
        .then(function() {
          
        })
        .catch(function(error) {
          console.log("Une erreur a été trouvée: ", error);
        });
    }
  }
};
</script>

<style scoped>
.checkToken {
  margin-top: 3%;
  font-size: 10px;
}
</style>
