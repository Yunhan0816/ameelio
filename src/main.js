import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
import firebase from "firebase/app";
import "firebase/auth";
import "firebaseui/dist/firebaseui.css";

Vue.config.productionTip = false

var app = null;
firebase.auth().onAuthStateChanged(async () => {
  if (!app) {
    await store.dispatch("setUser");
    new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
  }
});