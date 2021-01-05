<template>
  <div class="date-wrap">
    <div class="date">
      <div class="date__item">
        <div class="date__item-title">Год:</div>
        <div class="date__item-btns">
          <button type="button" class="btn btn_date"
                  v-for="year in d_renderData.d_yearsArr"
                  @click="d_activeBtn.year = year; changeDate('year',year)"
                  :class="{active: d_activeBtn.year === year}"
          >{{ year }}
          </button>

        </div>
      </div>
      <div class="separator"></div>
      <div class="date__item">
        <div class="date__item-title">Месяц:</div>
        <div class="date__item-btns">
          <button type="button" class="btn btn_date"
                  v-for="month in d_renderData.d_monthsArr"
                  @click="d_activeBtn.month = month; changeDate('month',month)"
                  :class="{active: d_activeBtn.month === month}"
          >{{ month }}
          </button>
        </div>
      </div>
      <div class="separator"></div>
      <div class="date__item">
        <div class="date__item-title">День:</div>
        <div class="date__item-btns">
          <button type="button" class="btn btn_date"
                  v-for="day in d_renderData.d_daysArr"
                  @click="d_activeBtn.day = day; changeDate('day',day)"
                  :class="{active: d_activeBtn.day === day}"
          >{{ day }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  name: "VDate",
  data() {
    return {
      d_date: {
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        day: new Date().getDate(),
      },
      d_fullDate: null,
      flag: null,
      d_renderData: {
        d_yearsArr: [2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006,
          2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992],
        d_monthsArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        d_daysArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
      },
      d_activeBtn: {
        year: null,
        month: null,
        day: null,
      }
    };
  },
  async mounted() {
    this.d_activeBtn = {
      year: this.d_date.year,
      month: ++this.d_date.month,
      day: this.d_date.day,
    };
    this.d_date = {
      year: this.d_date.year,
      month: this.addZero(this.d_date.month),
      day: this.addZero(this.d_date.day),
    };
    this.d_fullDate = this.d_date.year + "/" + this.d_date.month + "/" + this.d_date.day;
    await this.a_fetchCurrencies("https://www.cbr-xml-daily.ru/daily_json.js");
  },
  created() {

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
    async changeDate(title, value) {
      let currDate = {
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        day: new Date().getDate(),
      };
      ++currDate.month;
      if (title === "year") {
        this.d_date.year = value;
      }
      if (title === "month") {
        this.d_date.month = value;
      }
      if (title === "day") {
        this.d_date.day = value;
      }
      if (this.d_date.year == currDate.year && (this.d_date.month > currDate.month || (this.d_date.day >= currDate.day && this.d_date.month == currDate.month))) {
        console.log("https://www.cbr-xml-daily.ru/daily_json.js");
      }
      if (this.d_date.year == 1992 && (this.d_date.month < 7 || (this.d_date.day === 1 && this.d_date.month === 7))) {
        console.log("https://www.cbr-xml-daily.ru/archive/1992/07/01/daily_json.js");
      }
    }
  },
};
</script>

<style scoped lang="scss">
.date {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;

  .date__item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }

  .date__item-title {
    font-size: 18px;
    padding-right: 10px;
  }

  .date__item-btns {
    width: 100%;
    max-height: 44px;
    overflow: scroll;
    display: flex;
    justify-content: flex-start;
  }

  .separator {
    width: 100%;
    height: 2px;
    background-color: rgba($primary, .5);
  }
}
</style>
