<template>
  <div class="modal">
    <div class="modal__header">
      <btn-back
        @click.native="toggleModal"
      ></btn-back>
      <h2 class="title">Выберите валюту</h2>
    </div>
    <div class="modal__body">
      <currency-item
        v-for="item in g_data.Valute"
        :key="item.ID"
        @click.native="changeActiveCurr(item)"
        :class="{active: d_active === item.ID}"
      >
         <span>
            <span class="currency-item__abbr">{{ item.CharCode }}</span>
            <span class="currency-item__currency">{{ item.Name }}</span>
          </span>
      </currency-item>
    </div>
  </div>
</template>

<script>
import BtnBack from "../btns/BtnBack";
import CurrencyItem from "./CurrencyItem";
import {mapGetters, mapActions} from "vuex";
export default {
  components: {
    BtnBack,
    CurrencyItem,
  },
  name: "CurrenciesList",
  computed: {
    ...mapGetters([
      "g_isModalActive",
      "g_data",
      "g_activeCurrencies",
      "g_clickedCurrencyIndex"
    ])
  },
  mounted() {
    this.d_active = this.g_activeCurrencies[this.g_clickedCurrencyIndex].ID;
  },
  data() {
    return {
      d_active: null
    };
  },
  methods: {
    ...mapActions([
      "a_toggleModal",
      "a_setActiveCurr",
    ]),
    toggleModal() {
      this.a_toggleModal();
    },
    changeActiveCurr(item) {
      this.d_active = item.ID;
      let index = this.g_clickedCurrencyIndex;
      this.a_setActiveCurr({item, index});
      this.a_toggleModal();
    }
  },
};
</script>

<style scoped lang="scss">


.modal {
  background: $main;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 30px;
  padding-bottom: 20px;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 0 20px;

    .title {
      width: 100%;
      margin-left: -30px;
      margin-bottom: 0;
    }
  }

  .search-panel {
    background: $light;
    box-shadow: 0px 0px 70px -20px rgba(0, 0, 0, 0.25);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;

    &__input {
      font-family: inherit;
      font-size: 18px;
      width: 100%;
      outline: none;
      border: none;
      padding: 0 10px;
      display: block;
    }
  }

  &__body {
    .currency-item {
      &__abbr {
        display: block;
        font-weight: 500;
        font-size: 25px;
        line-height: 120%;
        text-transform: uppercase;
      }

      &__currency {
        display: block;
        font-size: 16px;
        line-height: 120%;
      }
    }
  }
}
</style>
