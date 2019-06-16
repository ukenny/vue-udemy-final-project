import stocks from "../../data/stocks.js";

const state = {
  stocks: []
};

const mutations = {
  SET_STOCKS: function(state, stocks) {
    state.stocks = stocks;
  },
  RANDOMIZE_STOCK_PRICES: function(state) {
    const max = 101;
    const min = -100;
    // TODO: Randomize stocks
    state.stocks.forEach(stock => {
      stock.price = Math.round(
        Math.floor(Math.random() * (max - min + 1)) + min
      );
    });
  }
};

const actions = {
  buyStock: function({ commit } /*, order*/) {
    commit();
  },
  initializeStocks: function({ commit }) {
    commit("SET_STOCKS", stocks);
  },
  randomizeStockPrices: function({ commit }) {
    commit("RANDOMIZE_STOCK_PRICES");
  }
};

const getters = {
  getStocks: function(state) {
    return state.stocks;
  }
};

export default {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
