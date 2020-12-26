<template>
  <div class="currencies">
    <div class="currency-card"
    v-for="item in activeCurrencies"
         :key="item.ID"
    >
      <change-currency
        @click.native="toggleModal"
      >
        <span class="currency-card__abbr">{{ item.CharCode }}</span>
      </change-currency>
      <label class="currency-card__currency">
        <input type="number" class="currency-card__amount" placeholder="0"/>
        {{ item.Name }}
      </label>
    </div>
  </div>
</template>

<script>
import ChangeCurrency from "./btns/ChangeCurrency";
import {mapGetters,mapActions} from 'vuex';

export default {
  components:{
    ChangeCurrency
  },
  name: "CalcCurrency",
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters([
      'isModalActive',
      'activeCurrencies',
    ])
  },
  methods: {
    ...mapActions([
      'TOGGLE_MODAL'
    ]),
    toggleModal(){
      this.TOGGLE_MODAL()
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
    &::placeholder{
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
