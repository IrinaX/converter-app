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
      flag: null,
    };
  },
  created() {
    this.d_month = this.addZero(++this.d_month);
    this.d_day = this.addZero(this.d_day);
    this.d_date = this.d_year + "-" + this.d_month + "-" + this.d_day;
  },
  watch: {
    async d_date() {
      this.d_year = this.d_date.slice(0, 4);
      this.d_month = this.d_date.slice(5, 7);
      this.d_day = this.d_date.slice(8, 10);
      if (this.d_year <= 1992 && this.d_month <= 6 && this.d_day < 31){
        console.log("дата меньше");
      }
      else {
        if (this.d_year > new Date().getFullYear() || this.d_day>new Date().getDate() || --this.d_month > new Date().getMonth()
        ){
          console.log("дата больше");
        }else {
          this.d_month = this.d_date.slice(5, 7);
          let date = this.d_year + "/" + this.d_month + "/" + this.d_day;
          await this.a_fetchCurrencies("https://www.cbr-xml-daily.ru/archive/" + date + "/daily_json.js");
          // await this.fetchCurr("https://www.cbr-xml-daily.ru/archive/" + date + "/daily_json.js")
          console.log(this.g_error);
          while (this.g_error) {
            this.d_day--;
            this.d_day = this.addZero(this.d_day);
            date = this.d_year + "/" + this.d_month + "/" + this.d_day;
            await this.a_fetchCurrencies("https://www.cbr-xml-daily.ru/archive/" + date + "/daily_json.js");
            // await this.fetchCurr("https://www.cbr-xml-daily.ru/archive/" + date + "/daily_json.js")
            console.log(date);
            if (this.d_day == "01") {
              this.d_day = 32;
              if (this.d_month == "01") {
                this.d_month = 12;
                this.d_year--;
              } else {
                this.d_month--;
                this.d_month = this.addZero(this.d_month);
              }
            }
            if (date == "2020/12/25") {
              break;
            }
            if (this.d_day === undefined) {
              break;
            }
            if (this.d_year == "1992" && this.d_month == "06" && this.d_day == "31") {
              date = "1992/07/01";
              console.log("last year", date);
              break;
            }
          }
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      "g_date",
      "g_data",
      "g_error"
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
      } else {
        return date;
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
    // fetchCurr(url) {
    //   return fetch(url)
    //     .then(response => {
    //       this.flag = false;
    //       return response.json();
    //     })
    //     .catch(error => {
    //       this.flag = true;
    //      return console.log(error);
    //     });
    // }
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
