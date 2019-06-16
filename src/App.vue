<template>
  <div id="app">
    <app-header></app-header>
    <div class="containor-fluid">
      <div class="row">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    AppHeader: Header
  },
  created: function() {
    this.$store.dispatch("initializeStocks");
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: aliceblue;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 8%;
  padding-top: 0em;
  outline: none;
  border: none !important;
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  box-shadow: none !important;
}
</style>
