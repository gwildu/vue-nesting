"use strict";

var
  Vue = require('vue'),
  Vuex = require('vuex'),
  app = require('./app.vue');

Vue.use(Vuex);

var vm = new Vue(app);
