const state = {
  funds: 1000,
  portfolioStocks: []
};
const mutations = {
  BUY_STOCK: function(state, { stockId, quantity, stockPrice }) {
    const stockRecord = state.portfolioStocks.find(
      element => element.stockId == stockId
    );
    if (stockRecord) {
      stockRecord.quantity += quantity;
    } else {
      state.portfolioStocks.push({
        stockId: stockId,
        quantity: quantity
      });
    }
    state.funds -= stockPrice * quantity;
  },
  SELL_STOCK: function(state, { stockId, stockPrice, quantity }) {
    const stockRecord = state.portfolioStocks.find(
      element => element.stockId == stockId
    );
    if (stockRecord.quantity > quantity) {
      stockRecord.quantity -= quantity;
    } else if (stockRecord.quantity == quantity) {
      state.portfolioStocks.splice(
        state.portfolioStocks.indexOf(stockRecord),
        1
      );
    }
    state.funds += stockPrice * quantity;
  }
};
const actions = {
  sellStock: function({ commit }, order) {
    commit("SELL_STOCK", order);
  }
};
const getters = {
  getStockPortfolio: function(state, getters) {
    return state.portfolioStocks.map(stock => {
      const stockRecord = getters.getStocks.find(
        element => element.id == stock.stockId
      );
      return {
        id: stock.stockId,
        quantity: stock.quantity,
        name: stockRecord.name,
        price: stockRecord.price
      };
    });
  },
  getFunds: function(state) {
    return state.funds;
  }
};

export default {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
