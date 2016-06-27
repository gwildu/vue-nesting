"use strict";

var
  Vue = require ('vue'),
  Vuex = require ('vuex');

Vue.use(Vuex);

module.exports = new Vuex.Store({
  state: {
    
    parent: {
      children: [
        {value: 0},
        {value: 0},
        {value: 0}
      ]     
    }

  },
  mutations: {
    CHANGE_CHILDREN_VALUE: function (state, parentHook, newValue) {
      state[parentHook].value = newValue;
    }
  }
});