<template>
  <div class="card-deck">
    <app-stocks-stock
      v-for="stock in stocks"
      v-bind:key="stock.id"
      :stock="stock"
    ></app-stocks-stock>
  </div>
</template>

<script>
import StocksStock from "./Stock.vue";

export default {
  computed: {
    stocks: function() {
      return this.$store.getters.getStocks;
    }
  },
  components: {
    AppStocksStock: StocksStock
  }
};
</script>

<style></style>
