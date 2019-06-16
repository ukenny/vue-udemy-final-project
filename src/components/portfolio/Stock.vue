<template>
  <div class="card text-center bg-transparent mt-2 border-white">
    <h2 class="card-header bg-transparent border-white">{{ stock.name }}</h2>
    <div class="card-body text-light">
      <h4 class="card-title">
        (Price is ${{ stock.price }} | Quantity is: {{ stock.quantity }})
      </h4>
      <div class="form-inline">
        <div clsss="card-subtitle">
          <div class="form-row">
            <label for="numberToBuy" class="control-label col-sm-3">Buy</label>
            <div class="input-group col-sm-7">
              <div class="input-group-prepend">
                <span class="input-group-text">$</span>
              </div>
              <input
                id="numberToBuy"
                min="0"
                step="1"
                type="number"
                class="form-control"
                placeholder="Quantity"
                v-model="quantity"
              />
            </div>
            <div class="col-sm-2">
              <button
                @click="sellStock"
                class="btn btn-outline-light"
                :disabled="quantity <= 0 || !Number.isInteger(Number(quantity))"
              >
                Sell
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      quantity: 0
    };
  },
  props: {
    stock: {
      id: Number,
      name: String,
      price: Number
    }
  },
  methods: {
    ...mapActions(["sellStock"]),
    sellStock: function() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.stock.quantity
      };
      this.sellStock(order);
    }
  }
};
</script>

<style scoped>
.btn-outline-light {
  box-shadow: none;
}
#numberToBuy {
  text-align: justify;
}
input[type="number"],
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
  -moz-appearance: textfield;
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  box-shadow: none !important;
}
</style>
