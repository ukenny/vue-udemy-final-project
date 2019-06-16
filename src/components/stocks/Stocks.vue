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
  data: function() {
    return {
      stocks: [
        { id: 0, name: "BMW", price: 200 },
        { id: 1, name: "APPL", price: 300 },
        { id: 2, name: "ALPH", price: 299 },
        { id: 3, name: "CCMC", price: 100 }
      ]
    };
  },
  components: {
    AppStocksStock: StocksStock
  }
};
</script>

<style></style>
