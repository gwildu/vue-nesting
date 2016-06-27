<style lang="less">

</style>

<template>

  <header>
    <h1>VUE-NESTING</h1>
  </header>

  <section id="content">

    <r-parent></r-parent>

  </section>

</template>

<script>

  var
      store = require('./vuex/store.js'),
      formElements = require('element~form-elements'),
      formItem = formElements.components.formItem,
      parent = require('component~parent');

  module.exports = {
    el: '#app',
    components: {
      'r-form-item': formItem,
      'r-parent': parent
    },
    store: store,
    replace: false
  };

</script>