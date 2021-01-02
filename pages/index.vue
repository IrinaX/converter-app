<template>
  <div class="container">
    <div class="main"
         v-if="g_isModalActive === false"
    >
      <h1 class="title">Конвертер валют</h1>
      <v-date></v-date>
      <calc-currency></calc-currency>
    </div>
    <currencies-list
      v-if="g_isModalActive"
    ></currencies-list>
  </div>
</template>

<script>
import VDate from "../components/VDate";
import CalcCurrency from "../components/CalcCurrency";
import CurrenciesList from "../components/modal/CurrenciesList";
import {mapGetters, mapActions} from 'vuex';

export default {
  components: {
    VDate,
    CalcCurrency,
    CurrenciesList,
  },
  data() {
    return {

    };
  },
  async mounted() {
    // const res = await fetch("https://www.cbr-xml-daily.ru/archive/2020/12/25/daily_json.js");
    // this.d_API = await res.json();
    // console.log(this.d_API);
    let date = {
      yyyy: new Date().getFullYear(),
      mm: new Date().getMonth(),
      dd: new Date().getDate(),
    };
    date.mm++;
    date.mm = this.addZero(date.mm);
    date.dd = this.addZero(date.dd);
    date = date.yyyy + "-" + date.mm + "-" + date.dd;
    console.log(date.replace(/-/g, "/"));
    await this.a_fetchCurrencies(date.replace(/-/g, "/"));
  },
  computed: {
    ...mapGetters([
      'g_isModalActive',
      'g_date'
    ])
  },
  methods:{
    ...mapActions([
      "a_fetchCurrencies",
    ]),
    addZero(date) {
      if (date.toString().length < 2) {
        return "0" + date.toString();
      }
    },
  },
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
  @media (min-width: 528px){
    max-width: 425px;
  }
}

.title {
  text-align: center;
  font-weight: normal;
  font-size: 20px;
  line-height: 31px;
  color: $text;
  margin-bottom: 30px;
}

.main, .modal {
  padding: 30px 20px 20px;
}
</style>
