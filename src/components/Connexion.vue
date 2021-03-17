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
              v-model="motDePasse"
              placeholder="Mot de passe"
            />
          </div>
          <br />
          <button class="btn btn-primary">Connexion</button>
        </form>
      </div>
      <!-- La partie droite  -->
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {
    name : 'connexion',
    data(){
        return {
           user :{
             login : "",
             password : ""
           }
        }
    }
}
</script>

<style scoped>
</style>