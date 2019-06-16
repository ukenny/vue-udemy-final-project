const state = {
  funds: 1000,
  portfolioStocks: []
};
const mutations = {
  BUY_STOCK: function(state, { stockId, quantity, stockPrice }) {
    const stockRecord = state.stocks.find(element => element.id == stockId);
    if (stockRecord) {
      stockRecord.quantity += quantity;
    } else {
      state.state.push({
        id: stockId,
        quantity: quantity
      });
    }
    state.funds -= stockPrice * quantity;
  },
  SELL_STOCK: function(state, { stockId, quantity /*to sell*/, stockPrice }) {
    const stockRecord = state.stocks.find(element => element.id == stockId);
    if (stockRecord.quantity > quantity) {
      stockRecord.quantity -= quantity;
    } else if (stockRecord.quantity == quantity) {
      state.stocks.splice(state.status.indexOf(stockRecord), 1);
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
  getStockPortfolia: function(state, getters) {
    return state.portfolioStocks.map(stock => {
      const stockRecord = getters.stocks.find(
        element => element.stockId == stock.id
      );
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: stockRecord.name,
        price: stockRecord.stockPrice
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
