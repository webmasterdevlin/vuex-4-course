import { createStore, createLogger } from "vuex";
import heroModule from "./hero";
import authModule from "./auth";

export const store = createStore({
  modules: {
    heroModule,
    authModule,
  },
  plugins: [createLogger()],
});
