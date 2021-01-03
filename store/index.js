export const state = () => ({
  s_isModalActive: false,
  s_data: null,
  s_clickedCurrencyIndex: null,
  s_activeCurrencies: [
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
      CharCode: "AUD",
      ID: "R01010",
      Name: "Австралийский доллар",
      Nominal: 1,
      NumCode: "036",
      Previous: 57.0229,
      Value: 56.8404,
    }
  ],
  s_firstCurrVal: null,
  s_secondCurrVal: null,
  s_date: null,
});

export const mutations = {
  m_fetchCurrencies(state, data) {
    state.s_data = data;
    console.log("m_fetchCurrencies", data);
  },
  m_isModalActive(state) {
    state.s_isModalActive = !state.s_isModalActive;
  },
  m_clickedCurrencyIndex(state, index) {
    state.s_clickedCurrencyIndex = index;
  },
  m_activeCurrencies(state, {item, index}) {
    state.s_activeCurrencies[index] = item;
  },
  m_firstCurrVal(state, val) {
    state.s_firstCurrVal = val;
  },
  m_secondCurrVal(state, val) {
    state.s_secondCurrVal = val;
  },
  m_date(state, date) {
    state.s_date = date;
  }
};

export const actions = {
  async a_fetchCurrencies(ctx,url) {
    let response = await fetch(url)
      .then(response => response.json())
      .catch(error => console.log(error));//todo: флаг тута нада нащальника
    ctx.commit("m_fetchCurrencies", response);
  },
  a_toggleModal({commit}) {
    commit("m_isModalActive");
  },
  a_clickedCurrencyIndex({commit}, index) {
    commit("m_clickedCurrencyIndex", index);
  },
  a_setActiveCurr({commit}, {item, index}) {
    commit("m_activeCurrencies", {item, index});
  },
  a_setFirstCurrVal({commit}, val) {
    commit("m_firstCurrVal", val);
  },
  a_setSecondCurrVal({commit}, val) {
    commit("m_secondCurrVal", val);
  },
  a_setDate({commit}, date) {
    commit("m_date", date);
  }
};

export const getters = {
  g_isModalActive: s => s.s_isModalActive,
  g_data: s => s.s_data,
  g_activeCurrencies: s => s.s_activeCurrencies,
  g_clickedCurrencyIndex: s => s.s_clickedCurrencyIndex,
  g_firstCurrVal: s => s.s_firstCurrVal,
  g_secondCurrVal: s => s.s_secondCurrVal,
  g_date: s => s.s_date,
};
