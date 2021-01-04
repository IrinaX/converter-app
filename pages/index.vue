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
import {mapGetters, mapActions} from "vuex";

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

  /* todo: план капкан!!!
  * Когда экземпляр был создан присваиваем ему текущую дату и вызываем экшон с дефолтным урлом.
  * Когда выбранная дата совпадает с сегодняшней то также вызываем экшон с дефолтным урлом.
  * В index делаем валидацию даты, потом вызываем экшон с новым урлом. Если ошибка (делаем флаг в стейте тру/фолс), то
  * уменьшаем дату на 1 и снова вызываем экшон с новым урлом до тех пор пока флаг не станет тру.*/
  computed: {
    ...mapGetters([
      "g_isModalActive",
      "g_date",
      "g_data"
    ])
  },
  methods: {
    ...mapActions([
      "a_fetchCurrencies",
    ]),
  },
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
  @media (min-width: 528px) {
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
