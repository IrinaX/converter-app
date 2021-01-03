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
    };
  },
  created() {
    if (this.g_date) {
      this.d_date = this.g_date;
    } else {
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
      this.a_setDate(this.d_date);
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
    &:focus{
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
      &:focus{
        background: transparent;
        color: $primary;
      }
    }

    &::-webkit-datetime-edit-day-field {
      color: $text;
      &:focus{
        background: transparent;
        color: $primary;
      }
    }

    &::-webkit-datetime-edit-year-field {
      color: $text;
      &:focus{
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
