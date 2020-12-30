<template>
  <div class="currencies">
    <div class="currency-card">
      <change-currency
        @click.native="toggleModal"
      >
        <span class="currency-card__abbr">{{ activeCurrencies.first.CharCode }}</span>
      </change-currency>
      <label class="currency-card__currency">
        <input type="number" class="currency-card__amount" placeholder="0"
               v-model="d_amountFirst"
               @click="d_index = 0"
        />
        {{ activeCurrencies.first.Name }}
      </label>
    </div>
    <div class="currency-card">
      <change-currency
        @click.native="toggleModal"
      >
        <span class="currency-card__abbr">{{ activeCurrencies.second.CharCode }}</span>
      </change-currency>
      <label class="currency-card__currency">
        <input type="number" class="currency-card__amount" placeholder="0"
               v-model="d_amountSecond"
               @click="d_index = 1"
        />
        {{ activeCurrencies.second.Name }}
      </label>
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
      d_index: null,
    };
  },
  computed: {
    ...mapGetters([
      "isModalActive",
      "activeCurrencies",
    ]),

  },
  watch: {
    d_amountFirst() {
      this.calcAmount();
    },
    d_amountSecond() {
      this.calcAmount();
    }
  },
  methods: {
    ...mapActions([
      "TOGGLE_MODAL"
    ]),
    toggleModal() {
      this.TOGGLE_MODAL();
    },
    calcAmount() {
      let firstVal = this.activeCurrencies.first.Value / this.activeCurrencies.first.Nominal;
      let secondVal = this.activeCurrencies.second.Value / this.activeCurrencies.second.Nominal;
      let result;
      if (this.d_index === 1) {
        result = (secondVal / firstVal) * this.d_amountSecond;
        this.d_amountFirst = +result.toFixed(2);
      } else {
        result = (firstVal / secondVal) * this.d_amountFirst;
        this.d_amountSecond = +result.toFixed(2);
      }
    }
  },
};
</script>

<style scoped lang="scss">
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
      color: $text;
    }
  }

  &__currency {
    text-align: right;
    font-size: 14px;
    line-height: 120%;
  }
}
</style>
