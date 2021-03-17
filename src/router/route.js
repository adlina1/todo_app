import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import Connexion from "../components/Connexion.vue";
import Inscription from "../components/Inscription.vue";
import About from "../components/About.vue";
import Todo from "../components/Todo.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/connexion",
    name: "connexion",
    component: Connexion
  },
  {
    path: "/inscription",
    name: "inscription",
    component: Inscription
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/todo",
    name: "Todo",
    component: Todo
  }
];

const router = createRouter({
  mode : 'history',
  history: createWebHashHistory(),
  routes
});

export default router;
