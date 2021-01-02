export const state = () => ({
  s_isModalActive: false,
  s_res:[],
  s_currencies: [
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
  s_date:null,
});

export const mutations = {
  m_fetchCurrencies(state,res){
    state.s_res = res;
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
  m_firstCurrVal(state,val){
    state.s_firstCurrVal = val;
  },
  m_secondCurrVal(state,val){
    state.s_secondCurrVal = val;
  },
  m_date(state,date){
    state.s_date = date;
  }
};

export const actions = {
  async a_fetchCurrencies({commit},date ="2020/12/25"){
    let res = await fetch(//str.replace(/тест/g,"прошел") "2020/12/25"
      "https://www.cbr-xml-daily.ru/archive/"+date+"/daily_json.js"
    );
    const curr = await res.json();
    commit("m_fetchCurrencies",curr);
    console.log('m_fetchCurrencies',curr);
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
  a_setFirstCurrVal({commit},val){
    commit("m_firstCurrVal",val);
  },
  a_setSecondCurrVal({commit},val){
    commit("m_secondCurrVal",val);
  },
  a_setDate({commit},date){
    commit('m_date',date);
  }
};

export const getters = {
  g_isModalActive: s => s.s_isModalActive,
  g_currencies: s => s.s_currencies,
  g_activeCurrencies: s => s.s_activeCurrencies,
  g_clickedCurrencyIndex: s => s.s_clickedCurrencyIndex,
  g_firstCurrVal:s => s.s_firstCurrVal,
  g_secondCurrVal:s => s.s_secondCurrVal,
  g_date:s => s.s_date,
};
