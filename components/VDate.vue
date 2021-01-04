<template>
  <div class="date">
    <input type="date" class="date__input" v-model="d_date"/>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  name: "VDate",
  data() {
    return {
      d_date: null,//YYYY-MM-DD
      d_year: new Date().getFullYear(),
      d_month: new Date().getMonth(),
      d_day: new Date().getDate(),
    };
  },
  created() {
    this.d_month = this.addZero( ++this.d_month);
    this.d_day = this.addZero( this.d_day)
    this.d_date = this.d_year + "-" + this.d_month + "-" + this.d_day;
  },
  async mounted() {
    //https://www.cbr-xml-daily.ru/daily_json.js
    //   // let url = "https://www.cbr-xml-daily.ru/archive/" + date + "/daily_json.js";
    await this.a_fetchCurrencies("https://www.cbr-xml-daily.ru/archive/" + this.d_date + "/daily_json.js")
      // .then(response => console.log(response))
      // .catch(error => console.log(error));

    console.log("g_data", this.g_data);
  },
  watch: {
    d_date() {
      // this.a_fetchCurrencies("https://www.cbr-xml-daily.ru/archive/" + this.changeFormat(this.d_date, '/') + "/daily_json.js");
    }
  },
  computed: {
    ...mapGetters([
      "g_date",
      "g_data"
    ])
  },
  methods: {
    ...mapActions([
      "a_setDate",
      "a_fetchCurrencies",
    ]),
    addZero(date) {
      if (date.toString().length < 2) {
        return "0" + date.toString();
      }
    },
    changeFormat(date, separator) {
      if (typeof date === "string") {
        return date.replace(/-/g, separator);
      } else {
        date.mm++;
        date.mm = this.addZero(date.mm);
        date.dd = this.addZero(date.dd);
        return date.yyyy + separator + date.mm + separator + date.dd;
      }
    },

  },
};
</script>

<style scoped lang="scss">
.date {
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;

  &__input {
    //background: transparent;
    background: transparent;
    border: none;
    font-size: 20px;
    margin: 0;
    padding: 0;

    &:active {
      outline: none;
    }

    &:focus {
      outline: none;
    }

    &::-webkit-datetime-edit {
      padding: 10px;
      margin: 0 -20px 0 0;
    }

    &::-webkit-datetime-edit-fields-wrapper {
      background: transparent;
      padding: 0;
      margin: 0;

    }

    &::-webkit-datetime-edit-text {
      color: $primary;
      //padding: 0 0.3em;
      padding: 0;

    }

    &::-webkit-datetime-edit-month-field {
      color: $text;

      &:focus {
        background: transparent;
        color: $primary;
      }
    }

    &::-webkit-datetime-edit-day-field {
      color: $text;

      &:focus {
        background: transparent;
        color: $primary;
      }
    }

    &::-webkit-datetime-edit-year-field {
      color: $text;

      &:focus {
        background: transparent;
        color: $primary;
      }
    }

    &::-webkit-inner-spin-button {
      //display: none;
      //width: 0;
      padding: 0;
      margin: 0;
    }

    &::-webkit-calendar-picker-indicator {
      //display: none;
      //width: 0;
      padding: 0;
      margin: 0;
      //background: orange;
      outline: none;
    }

    &::-webkit-clear-button {
      padding: 0;
      margin: 0;
      //display: none;
    }
  }
}
</style>
