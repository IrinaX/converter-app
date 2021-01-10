<template>
  <div class="currencies">
    <div class="currency-card"
         v-if="g_currencyExistence.first"
    >
      <change-currency
        @click.native="toggleModal(0)"
      >
        <span class="currency-card__abbr">{{ g_activeCurrencies[0].CharCode }}</span>
      </change-currency>
      <label class="currency-card__currency">
        <input type="number" class="currency-card__amount" placeholder="0"
               v-model="d_amountFirst"
               @click="a_clickedInputIndex(0)"
        />
        {{ g_activeCurrencies[0].Name }}
      </label>
    </div>
    <div class="currency-card"
         v-else
    >
      <change-currency
        @click.native="toggleModal(0)"
      >
        <span class="currency-card__abbr">---</span>
      </change-currency>
      <label class="currency-card__currency">---</label>
    </div>
    <div class="currency-card"
         v-if="g_currencyExistence.second"
    >
      <change-currency
        @click.native="toggleModal(1)"
      >
        <span class="currency-card__abbr">{{ g_activeCurrencies[1].CharCode }}</span>
      </change-currency>
      <label class="currency-card__currency">
        <input type="number" class="currency-card__amount" placeholder="0"
               v-model="d_amountSecond"
               @click="a_clickedInputIndex(1)"
        />
        {{ g_activeCurrencies[1].Name }}
      </label>
    </div>
    <div class="currency-card"
         v-else
    >
      <change-currency
        @click.native="toggleModal(1)"
      >
        <span class="currency-card__abbr">---</span>
      </change-currency>
      <label class="currency-card__currency">---</label>
    </div>
  </div>
</template>

<script>
import ChangeCurrency from "./btns/ChangeCurrency";
import {mapGetters, mapActions} from "vuex";

export default {
  components: {
    ChangeCurrency
  },
  name: "CalcCurrency",
  data() {
    return {
      d_amountFirst: null,
      d_amountSecond: null,
    };
  },
  computed: {
    ...mapGetters([
      "g_data",
      "g_isModalActive",
      "g_activeCurrencies",
      "g_clickedCurrencyIndex",
      "g_clickedInputIndex",
      "g_currencyExistence",
      "g_firstCurrVal",
      "g_secondCurrVal",
    ]),
  },
  created() {
    this.d_amountFirst = this.g_firstCurrVal;
    this.d_amountSecond = this.g_secondCurrVal;
  },
  mounted() {
    if (localStorage.firstCurrVal) {
      this.d_amountFirst = localStorage.firstCurrVal;
    }
    if (localStorage.secondCurrVal) {
      this.d_amountSecond = localStorage.secondCurrVal;
    }
    if (localStorage.activeCurrencies) {
      // console.log(
      //   JSON.parse(localStorage.activeCurrencies)
      // );
      JSON.parse(localStorage.activeCurrencies).forEach((item, i, arr) =>{
        let index = i
        this.a_setActiveCurr({item,index})
      })
    }
  },
  watch: {
    d_amountFirst() {
      if (this.d_amountFirst > 0) {
        this.d_amountFirst = this.d_amountFirst * 1;
        this.calcAmount();
      } else {
        this.d_amountFirst = 0;
        this.d_amountSecond = 0;
      }
      this.a_setFirstCurrVal(this.d_amountFirst);
      this.a_setSecondCurrVal(this.d_amountSecond);
    },
    d_amountSecond() {
      if (this.d_amountSecond > 0) {
        this.d_amountSecond = this.d_amountSecond * 1;
        this.calcAmount();
      } else {
        this.d_amountFirst = 0;
        this.d_amountSecond = 0;
      }
      this.a_setFirstCurrVal(this.d_amountFirst);
      this.a_setSecondCurrVal(this.d_amountSecond);
    },
  },

  methods: {
    ...mapActions([
      "a_toggleModal",
      "a_clickedCurrencyIndex",
      "a_clickedInputIndex",
      "a_setFirstCurrVal",
      "a_setSecondCurrVal",
      "a_setActiveCurr",
    ]),
    toggleModal(index) {
      this.a_toggleModal();
      this.a_clickedCurrencyIndex(index);
    },
    calcAmount() {
      let firstVal = this.g_activeCurrencies[0].Value / this.g_activeCurrencies[0].Nominal;
      let secondVal = this.g_activeCurrencies[1].Value / this.g_activeCurrencies[1].Nominal;
      if (this.g_clickedInputIndex === 1) {
        let result = (secondVal / firstVal) * this.d_amountSecond;
        this.d_amountFirst = +result.toFixed(2);
        if (this.d_amountSecond > 0 && this.d_amountSecond < 999) {
          this.d_amountFirst = +result.toFixed(4);
        }
      } else {
        let result = (firstVal / secondVal) * this.d_amountFirst;
        this.d_amountSecond = +result.toFixed(2);
        if (this.d_amountFirst > 0 && this.d_amountFirst < 999) {
          this.d_amountSecond = +result.toFixed(4);
        }
      }
    }
  },
};
</script>

<style scoped lang="scss">
.currencies {
  margin-bottom: 40px;
}

.currency-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  &__abbr {
    font-weight: 500;
    font-size: 25px;
    line-height: 120%;
    text-transform: uppercase;
  }

  &__amount {
    font: $font;
    font-weight: 500;
    font-size: 25px;
    line-height: 120%;
    word-break: break-word;
    text-align: right;
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
    padding: 0;
    color: $text;

    &::placeholder {
      color: rgba($text, .5);
    }
  }

  &__currency {
    text-align: right;
    font-size: 14px;
    line-height: 120%;
  }
}
</style>
