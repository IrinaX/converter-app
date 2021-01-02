<template>
  <div class="date">
    <!--    <div class="date__item"-->
    <!--         v-for="(item, id) in d_date"-->
    <!--         :key="id"-->
    <!--    >-->
    <!--      <label class="date__item-title">-->
    <!--        {{ item.title }}-->
    <!--        <input type="number" class="date__item-value" :placeholder="item.value"/>-->
    <!--      </label>-->
    <!--    </div>-->
    <input type="date" v-model="d_date"/>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  name: "VDate",
  data() {
    return {
      d_date: null,//YYYY-MM-DD
    };
  },
  created() {
    if (this.g_date){
      this.d_date = this.g_date;
    }else {
      let date = {
        yyyy: new Date().getFullYear(),
        mm: new Date().getMonth(),
        dd: new Date().getDate(),
      };
      date.mm++;
      date.mm = this.addZero(date.mm);
      date.dd = this.addZero(date.dd);
      this.d_date = date.yyyy + "-" + date.mm + "-" + date.dd;
    }
  },
  watch: {
    d_date() {
      this.a_setDate(this.d_date)
    }
  },
  computed: {
    ...mapGetters([
      "g_date"
    ])
  },
  methods: {
    ...mapActions([
      "a_setDate"
    ]),
    addZero(date) {
      if (date.toString().length < 2) {
        return "0" + date.toString();
      }
    },

  },
};
</script>

<style scoped lang="scss">
.date {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;

  &__item {
    padding: 0 20px;
    position: relative;

    &:after {
      content: '';
      width: 2px;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      background-color: rgba($primary, .5);
    }

    &:last-child {
      &:after {
        content: none;
      }

      .date__item-value {
        min-width: 70px;
      }
    }

    &-title {
      font-size: 14px;
    }

    &-value {
      min-width: 35px;
      font: $font;
      font-weight: 500;
      font-size: 25px;
      line-height: 120%;
      text-align: center;
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
  }
}
</style>
