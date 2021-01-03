<template>
  <div class="modal">
    <div class="modal__header">
      <btn-back
        @click.native="toggleModal"
      ></btn-back>
      <h2 class="title">Выберите валюту</h2>
    </div>
    <!--    <div class="search-panel">-->
    <!--      <svg class="search-panel__search-icon" width="19" height="19" viewBox="0 0 19 19" fill="none"-->
    <!--           xmlns="http://www.w3.org/2000/svg">-->
    <!--        <path-->
    <!--          d="M18.4305 17.1929L12.5974 11.3598C13.5025 10.1896 13.9922 8.75879 13.9922 7.25391C13.9922 5.45254 13.2892 3.76348 12.0179 2.48994C10.7466 1.21641 9.05303 0.515625 7.25391 0.515625C5.45479 0.515625 3.76123 1.21865 2.48994 2.48994C1.21641 3.76123 0.515625 5.45254 0.515625 7.25391C0.515625 9.05303 1.21865 10.7466 2.48994 12.0179C3.76123 13.2914 5.45254 13.9922 7.25391 13.9922C8.75879 13.9922 10.1873 13.5025 11.3575 12.5996L17.1906 18.4305C17.2077 18.4476 17.228 18.4612 17.2504 18.4704C17.2727 18.4797 17.2967 18.4845 17.3209 18.4845C17.3451 18.4845 17.3691 18.4797 17.3914 18.4704C17.4138 18.4612 17.4341 18.4476 17.4512 18.4305L18.4305 17.4534C18.4476 17.4363 18.4612 17.416 18.4704 17.3937C18.4797 17.3713 18.4845 17.3473 18.4845 17.3231C18.4845 17.2989 18.4797 17.275 18.4704 17.2526C18.4612 17.2303 18.4476 17.21 18.4305 17.1929ZM10.8117 10.8117C9.85938 11.7618 8.59707 12.2852 7.25391 12.2852C5.91074 12.2852 4.64844 11.7618 3.69609 10.8117C2.746 9.85938 2.22266 8.59707 2.22266 7.25391C2.22266 5.91074 2.746 4.64619 3.69609 3.69609C4.64844 2.746 5.91074 2.22266 7.25391 2.22266C8.59707 2.22266 9.86162 2.74375 10.8117 3.69609C11.7618 4.64844 12.2852 5.91074 12.2852 7.25391C12.2852 8.59707 11.7618 9.86162 10.8117 10.8117Z"-->
    <!--          fill="#1D1D1D" fill-opacity="0.5"/>-->
    <!--      </svg>-->
    <!--      <input type="text" class="search-panel__input" placeholder="Search currency..."/>-->
    <!--      <btn-clear></btn-clear>-->
    <!--    </div>-->
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
// import BtnClear from "../btns/BtnClear";
import CurrencyItem from "./CurrencyItem";
import {mapGetters, mapActions} from "vuex";

export default {
  components: {
    BtnBack,
    // BtnClear,
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
  data() {
    return {
      d_active: null
    };
  },
  methods: {
    ...mapActions([
      "a_toggleModal",
      "a_setActiveCurr"
    ]),
    toggleModal() {
      this.a_toggleModal();
    },
    changeActiveCurr(item) {
      // console.log(this.g_clickedCurrencyIndex);
      let index = this.g_clickedCurrencyIndex;
      this.a_setActiveCurr({item, index});

      // console.log(this.activeCurrencies);
      this.a_toggleModal();
      // this.d_active = id === this.activeCurrencies[0].ID || id === this.activeCurrencies[1].ID ? id:null;
    }
  },
};
</script>

<style scoped lang="scss">
.active {
  background: indianred;
}

.modal {
  background: $main;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    //margin-bottom: 30px;
    margin-bottom: 10px;

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
