export const state = () => ({
  isModalActive: false,
  currencies: [
    {
      CharCode: "GBP",
      ID: "R01035",
      Name: "Фунт стерлингов Соединенного королевства",
      Nominal: 1,
      NumCode: "826",
      Previous: 101.6017,
      Value: 99.9265,
    },
    {
      CharCode: "USD",
      ID: "R01235",
      Name: "Доллар США",
      Nominal: 1,
      NumCode: "840",
      Previous: 75.4571,
      Value: 74.8392,
    },
    {
      CharCode: "AMD",
      ID: "R01060",
      Name: "Армянских драмов",
      Nominal: 100,
      NumCode: "051",
      Previous: 14.4485,
      Value: 14.3301,
    },
    {
      CharCode: "AUD",
      ID: "R01010",
      Name: "Австралийский доллар",
      Nominal: 1,
      NumCode: "036",
      Previous: 57.0229,
      Value: 56.8404,
    },
    {
      CharCode: "AZN",
      ID: "R01020A",
      Name: "Азербайджанский манат",
      Nominal: 1,
      NumCode: "944",
      Previous: 44.4127,
      Value: 44.049,
    },
  ],
  activeCurrencies: {
    first: {
      CharCode: "GBP",
      ID: "R01035",
      Name: "Фунт стерлингов Соединенного королевства",
      Nominal: 1,
      NumCode: "826",
      Previous: 101.6017,
      Value: 99.9265,
    },
    second: {
      CharCode: "AUD",
      ID: "R01010",
      Name: "Австралийский доллар",
      Nominal: 1,
      NumCode: "036",
      Previous: 57.0229,
      Value: 56.8404,
    }
  },
});

export const mutations = {
  CHANGE_IS_MODAL_ACTIVE(state) {
    state.isModalActive = !state.isModalActive;
  },
};

export const actions = {
  TOGGLE_MODAL({commit}) {
    commit("CHANGE_IS_MODAL_ACTIVE");
  },
};

export const getters = {
  isModalActive: s => s.isModalActive,
  currencies: s => s.currencies,
  activeCurrencies: s => s.activeCurrencies,

};
