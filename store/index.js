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
    console.log(data);
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
  async a_fetchCurrencies({commit}, date = "2020/12/25") {
    // let res = await fetch(//str.replace(/тест/g,"прошел") "2020/12/25"
    //   "https://www.cbr-xml-daily.ru/archive/"+date+"/daily_json.js"
    // );
    // await fetch("https://www.cbr-xml-daily.ru/daily_json.js")
    //   .then(resp => {
    //     console.log(resp);
    //     resp.json();
    //   })
    //   .then(data => console.log(data))
    //   .catch(err=>console.log(err));

    let response = await fetch(
      "https://www.cbr-xml-daily.ru/daily_json.js"
    );
    const data = await response.json();
    commit("m_fetchCurrencies", data);
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
  g_data:s => s.s_data,
  g_activeCurrencies: s => s.s_activeCurrencies,
  g_clickedCurrencyIndex: s => s.s_clickedCurrencyIndex,
  g_firstCurrVal: s => s.s_firstCurrVal,
  g_secondCurrVal: s => s.s_secondCurrVal,
  g_date: s => s.s_date,
};
