<template>
  <!-- Navbar permettant de faire le menu et la barre de recherche -->

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">To do Application</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/todo"
              >Liste des tâches
            </router-link>
            <!-- <a class="nav-link active" aria-current="page" href="#">Liste des tâches</a> -->
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">À propos</router-link>
          </li>

          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Deconnexion
            </a>
          </li>
        </ul>

        <!-- Boutons de la sidebar pour la connexion et l'inscription -->
        <form class="d-flex">
          <router-link class="nav-link" to="/connexion">Connexion</router-link>
          <router-link class="btn btn-outline-success" to="/inscription"
            >S'inscrire</router-link
          >
        </form>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.router-link-exact-active {
  color: #060706;
}
</style>
