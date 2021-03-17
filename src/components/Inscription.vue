<template>
  <div class="conteneur">
    <h1>Inscription</h1>
    <br />
    <br />
    <div class="row">
      <!-- La partie droite  -->
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form>
          <!-- user -->
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="nom"
              required
              v-model="nom"
              placeholder="Entrer votre nom "
            />
          </div>
          <br />
        
          <!-- email -->

          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="email"
              required
              v-model="email"
              aria-describedby="emailHelp"
              placeholder="Entrer votre adresse email"
            />
          </div>
          <br />
          <!-- mot de passe -->
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="motDePasse"
              required
              v-model="motDePasse"
              placeholder="Mot de passe"
            />
          </div>
          <div
            v-if="motDePasse.length > 1 && motDePasse.length < 8"
            class="text-danger"
          >
            Le mot de passe doit contenir minimum 8 caractères!
          </div>
          <br />
          <!-- confirmation mot de passe -->
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="cfr_motDePasse"
              required
              v-model="cfr_motDePasse"
              placeholder="Confirmez votre mot de passe"
            />
          </div>
          <!-- controle de la correspondance des deux mots de passes  -->
          <div v-if="motDePasse != cfr_motDePasse" class="text-danger">
            Mot de passe incorrecte!
          </div>
          <br />

          <button class="btn btn-primary">S'inscrire</button>
          </form>
      </div>
      <!-- La partie droite  -->
      <div class="col-md-3"></div>
       
    </div>
  </div>
</template>

<script>
export default {
  name: "inscription",
  data() {
    return {
      user: "",
      email: "",
      motDePasse: "",
      cfr_motDePasse: ""
    };
  },
  methods: {
    
  },
};
</script>

<style>
</style>