export const state = () => ({
  s_isModalActive: false,
  s_data: null,
  s_error: null,
  s_clickedCurrencyIndex: null,
  s_clickedInputIndex: null,
  s_activeCurrencies: [
    // {
    //   CharCode: "GBP",
    //   ID: "R01035",
    //   Name: "Фунт стерлингов Соединенного королевства",
    //   Nominal: 1,
    //   NumCode: "826",
    //   Previous: 101.6017,
    //   Value: 99.9265,
    // },
    // {
    //   CharCode: "AUD",
    //   ID: "R01010",
    //   Name: "Австралийский доллар",
    //   Nominal: 1,
    //   NumCode: "036",
    //   Previous: 57.0229,
    //   Value: 56.8404,
    // }
  ],
  s_currencyExistence: {
    first: null,
    second: null
  },
  s_firstCurrVal: null,
  s_secondCurrVal: null,
  s_date: {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  },
  s_info: null,
  s_renderKey: Date.now().toString()
});

export const mutations = {
  m_fetchCurrencies(state, data) {
    state.s_data = data;
  },
  m_isModalActive(state) {
    state.s_isModalActive = !state.s_isModalActive;
  },
  m_clickedCurrencyIndex(state, index) {
    state.s_clickedCurrencyIndex = index;
  },
  m_clickedInputIndex(state, index) {
    state.s_clickedInputIndex = index;
  },
  m_activeCurrencies(state, {item, index}) {
    state.s_activeCurrencies[index] = item;
    if (window.localStorage.activeCurrencies){
      window.localStorage.activeCurrencies = JSON.stringify(state.s_activeCurrencies);
    }else{
      window.localStorage.setItem('activeCurrencies',JSON.stringify(state.s_activeCurrencies))
    }
  },
  m_currencyExistence(state, {condition, index}) {
    if (index == 0){
      state.s_currencyExistence.first = condition;
    } else {
      state.s_currencyExistence.second = condition;
    }
    // if (window.localStorage.currencyExistence){
    //   window.localStorage.currencyExistence = JSON.stringify(state.s_currencyExistence);
    // }else{
    //   window.localStorage.setItem('currencyExistence',JSON.stringify(state.s_currencyExistence))
    // }
  },
  m_firstCurrVal(state, val) {
    state.s_firstCurrVal = val;
    if (window.localStorage.firstCurrVal){
      window.localStorage.firstCurrVal = val;
    }else{
      window.localStorage.setItem('firstCurrVal',JSON.stringify(val))
    }
  },
  m_secondCurrVal(state, val) {
    state.s_secondCurrVal = val;
    if (window.localStorage.secondCurrVal){
      window.localStorage.secondCurrVal = val;
    }else{
      window.localStorage.setItem('secondCurrVal',JSON.stringify(val))
    }
  },
  m_date(state, date) {
    state.s_date = date;
    if (window.localStorage.date){
      window.localStorage.date = JSON.stringify(date);
    }else{
      window.localStorage.setItem('date',JSON.stringify(date))
    }
  },
  m_error(state, condition) {
    state.s_error = condition;
  },
  m_info(state, text) {
    state.s_info = text;
  },
  m_RenderKey(state, key) {
    state.s_renderKey = key;
  }
};

export const actions = {
  async a_fetchCurrencies(ctx, url) {
    let response = await fetch(url)
      .then(res => {
        if (res.ok) {
          return res;
        } else {
          throw new Error(res.statusText);
        }
      })
      .then((res) => {
        ctx.dispatch("a_error", false);
        return res.json();
      })
      .catch((e) => {
        ctx.dispatch("a_error", true);
        return console.log(e);
      });
    ctx.commit("m_fetchCurrencies", response);
  },
  a_error({commit}, condition) {
    commit("m_error", condition);
  },
  a_toggleModal({commit}) {
    commit("m_isModalActive");
  },
  a_clickedCurrencyIndex({commit}, index) {
    commit("m_clickedCurrencyIndex", index);
  },
  a_clickedInputIndex({commit}, index) {
    commit("m_clickedInputIndex", index);
  },
  a_setCurrencyExistence({commit}, {condition, index}) {
      commit("m_currencyExistence", {condition, index});
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
  },
  a_setInfo({commit}, text) {
    commit("m_info", text);
  },
  a_setRenderKey({commit}, key) {
    commit("m_RenderKey", key);
  }
};

export const getters = {
  g_isModalActive: s => s.s_isModalActive,
  g_data: s => s.s_data,
  g_activeCurrencies: s => s.s_activeCurrencies,
  g_clickedCurrencyIndex: s => s.s_clickedCurrencyIndex,
  g_clickedInputIndex: s => s.s_clickedInputIndex,
  g_currencyExistence: s => s.s_currencyExistence,
  g_firstCurrVal: s => s.s_firstCurrVal,
  g_secondCurrVal: s => s.s_secondCurrVal,
  g_date: s => s.s_date,
  g_error: s => s.s_error,
  g_info: s => s.s_info,
  g_renderKey: s => s.s_renderKey,
};
