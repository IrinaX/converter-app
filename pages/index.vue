<template>
  <div class="container">
    <div class="main"
         v-if="isModalActive === false"
    >
      <h1 class="title">Конвертер валют</h1>
      <v-date></v-date>
      <calc-currency></calc-currency>
    </div>
    <currencies-list
      v-if="isModalActive"
    ></currencies-list>
  </div>
</template>

<script>
import VDate from "../components/VDate";
import CalcCurrency from "../components/CalcCurrency";
import CurrenciesList from "../components/modal/CurrenciesList";
import {mapGetters} from 'vuex';

export default {
  components: {
    VDate,
    CalcCurrency,
    CurrenciesList,
  },
  data() {
    return {
      d_API: [],

    };
  },
  computed: {
    ...mapGetters([
      'isModalActive'
    ])
  },
  async mounted() {
    const res = await fetch("https://www.cbr-xml-daily.ru/archive/2020/12/25/daily_json.js");
    this.d_API = await res.json();
    console.log(this.d_API);
  }
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
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
