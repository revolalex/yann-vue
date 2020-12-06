import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import "es6-promise/auto";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id: "",
    auth: false,
    token: "",
    name: "",
  },
  mutations: {
    ADDED_TOKEN: (state, token) => {
      state.token = token;
    },
    AUTH_IS_TRUE: (state) => {
      state.auth = true;
    },
    SET_ID: (state, id) => {
      state.id = id;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
  },
  actions: {
    ADD_TOKEN: (context, token) => {
      context.commit("ADDED_TOKEN", token);
    },
    AUTH_TRUE: (context) => {
      context.commit("AUTH_IS_TRUE");
    },
    SET_ID_USER: (context, id) => {
      context.commit("SET_ID", id);
    },
    SET_NAME_USER: (context, name) => {
      context.commit("SET_NAME", name);
    },
  },
  plugins: [createPersistedState()],
  modules: {},
});
