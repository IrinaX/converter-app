<template>
  <div class="container">
    <div class="main"
         v-if="g_isModalActive === false"
    >
      <h1 class="title">Конвертер валют</h1>
      <div class="info">{{ g_info }}</div>
      <calc-currency
        :key="g_renderKey"
      ></calc-currency>
      <v-date></v-date>
    </div>
    <transition name="slide-fade">
      <currencies-list
        v-if="g_isModalActive"
      ></currencies-list>
    </transition>
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
  computed: {
    ...mapGetters([
      "g_isModalActive",
      "g_info",
      "g_renderKey",
      "g_data"
    ])
  },
  methods: {
    ...mapActions([
      "a_setActiveCurr"
    ])
  },
};
</script>

<style lang="scss">
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all .3s ease;
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}

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

.main {
  padding: 30px 20px 20px;
}

.info {
  line-height: 140%;
  font-size: 15px;
  margin-bottom: 16px;

}
</style>
