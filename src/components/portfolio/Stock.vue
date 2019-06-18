<template>
  <div class="card text-center mt-2 border-dark">
    <h2 class="card-header bg-dark border-dark">{{ stock.name }}</h2>
    <div class="card-body text-light bg-dark">
      <h4 class="card-title">
        (Price is ${{ stock.price }} | Quantity is: {{ stock.quantity }})
      </h4>
      <div class="form-inline">
        <div clsss="card-subtitle">
          <div class="form-row">
            <label for="numberToSell" class="control-label col-sm-3"
              >Sell</label
            >
            <div class="input-group col-sm-7">
              <div class="input-group-prepend">
                <span class="input-group-text">#</span>
              </div>
              <input
                id="numberToSell"
                min="0"
                step="1"
                type="number"
                class="form-control"
                placeholder="Quantity"
                v-model.number="quantity"
              />
            </div>
            <div class="col-sm-2">
              <button
                @click="sellStock"
                class="btn btn-outline-light"
                :disabled="
                  !sufficientQuantity ||
                    quantity <= 0 ||
                    !Number.isInteger(Number(quantity))
                "
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
  computed: {
    sufficientQuantity: function() {
      return this.quantity  <= this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),
    sellStock: function() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      console.log(order);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
.btn-outline-light {
  box-shadow: none;
}
#numberToSell {
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
