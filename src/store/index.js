import { createStore } from "vuex";
import compte from "./compte";
import todolist from "./todolist";

export default createStore({
  debug: true,
  modules: {
    compte,
    todolist
  }
});
