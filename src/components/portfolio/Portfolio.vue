<template>
  <div class="card-deck">
    <app-portfolio-stock
      v-for="stock in stocks"
      v-bind:key="stock.stockId"
      :stock="stock"
    >
    </app-portfolio-stock>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PortfolioStock from "./Stock.vue";

export default {
  computed: {
    ...mapGetters({
      stocks: "getStockPortfolio"
    })
  },
  components: {
    AppPortfolioStock: PortfolioStock
  }
};
</script>

<style></style>
