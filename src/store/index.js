import { createStore } from "vuex";
import compte from "./compte";
import todolist from "./todolist";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    compte,
    todolist
  }
});
