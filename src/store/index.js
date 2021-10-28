import state from "./state";
import action from "./Action";
import gerrer from "./gerrer";
import module from "./module";
import mutation from "./mutation";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      ...state
    }
  },
  action,
  gerrer,
  module,
  mutation
});

export default store;