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
    url:"",
    is_super_admin:""
  },
  mutations: {
    ADDED_TOKEN: (state, token) => {
      state.token = token;
    },
    RESET_TOKEN_ADMIN:(state)=>{
      state.id = ""
      state.token = ""
      state.name = ""
      state.auth = false
      state.url = ""
      state.is_super_admin= ""
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
    SET_URL: (state, url) => {
      state.url = url;
    },
    SET_SUPERADMIN: (state, x) => {
      state.is_super_admin = x;
    },
  },
  actions: {
    ADD_TOKEN: (context, token) => {
      context.commit("ADDED_TOKEN", token);
    },
    RESET_TOKEN: (context) => {
      context.commit("RESET_TOKEN_ADMIN");
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
    SET_URL_IMG_USER: (context, url) => {
      context.commit("SET_URL", url);
    },
    SET_SUPERADMIN_USER: (context, x) => {
      context.commit("SET_SUPERADMIN", x);
    },
  },
  plugins: [createPersistedState()],
  modules: {},
});
