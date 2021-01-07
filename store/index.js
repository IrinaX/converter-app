export const state = () => ({
  s_isModalActive: false,
  s_data: null,
  s_error: null,
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
  s_info:null,
});

export const mutations = {
  m_fetchCurrencies(state, data) {
    state.s_data = data;
    // console.log("m_fetchCurrencies", data);
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
  },
  m_error(state, condition) {
    state.s_error = condition;
  },
  m_info(state,text){
    state.s_info = text;
  }
};

export const actions = {
  async a_fetchCurrencies(ctx, url) {
    // const response = await axios.get(url)
    //   .then(res => res.data)
    let response = await fetch(url)
      .then(res => {
        if (res.ok) {
          return res
        } else {
          throw new Error(res.statusText)
        }})
      .then((res)=> {
        ctx.dispatch('a_error',false);
        return res.json();
      })
      .catch(()=> {
        ctx.dispatch('a_error',true);
        return console.log("some error");
      });
    // let data = await response.json();
    // console.log(data);
    ctx.commit("m_fetchCurrencies", response);
  },
  a_error({commit},condition){
    commit("m_error", condition);
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
  },
  a_setInfo({commit},text){
    commit('m_info',text);
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
  g_error: s => s.s_error,
  g_info: s => s.s_info,
};
