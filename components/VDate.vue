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
                            v-for="(month, key) in d_renderData.d_monthsArr"
                            :key="key"
                            @click="d_activeBtn.month = month.number; changeDate('month',month.number)"
                            :class="{active: d_activeBtn.month === month.number}"
                    >{{ month.name }}
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
import {mapGetters, mapActions} from 'vuex';
import moment from 'moment';

export default {
    name: 'VDate',
    data() {
        return {
            d_fullDate: null,
            d_renderData: {
                d_yearsArr: [2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006,
                    2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992],
                // d_monthsArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                d_monthsArr: [
                    {
                        number: 1,
                        name:'Янв.',
                    },
                    {
                        number: 2,
                        name:'Фев.',
                    },
                    {
                        number: 3,
                        name:'Март',
                    },
                    {
                        number: 4,
                        name:'Апр.',
                    },
                    {
                        number: 5,
                        name:'Май',
                    },
                    {
                        number: 6,
                        name:'Июнь',
                    },
                    {
                        number: 7,
                        name:'Июль',
                    },
                    {
                        number: 8,
                        name:'Авг.',
                    },
                    {
                        number: 9,
                        name:'Сен.',
                    },
                    {
                        number: 10,
                        name:'Окт.',
                    },
                    {
                        number: 11,
                        name:'Ноя.',
                    },
                    {
                        number: 12,
                        name:'Дек.',
                    },
                ],
                //'Фев.','Март','Апр.','Май','Июнь','Июль', 'Авг.', 'Сен.', 'Окт.',
                d_daysArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            },
            d_activeBtn: {
                year: null,
                month: null,
                day: null,
            },
        };
    },
    async mounted() {

        if (localStorage.date) {
            let parsedDate = JSON.parse(localStorage.date);
            this.d_activeBtn = {
                year: parsedDate.year,
                month: parsedDate.month * 1,
                day: parsedDate.day * 1,
            };
            this.a_setDate({
                year: parsedDate.year,
                month: parsedDate.month,
                day: parsedDate.day,
            });
        } else {
            this.d_activeBtn = {
                year: this.g_date.year,
                month: this.g_date.month * 1,
                day: this.g_date.day * 1,
            };
            this.a_setDate({
                year: this.d_activeBtn.year,
                month: this.addZero(this.d_activeBtn.month),
                day: this.addZero(this.d_activeBtn.day),
            });
        }
        this.d_fullDate = this.setFullDate(this.g_date);
        await this.validateDate();
    },
    computed: {
        ...mapGetters([
            'g_date',
            'g_data',
            'g_error',
            'g_info',
            'g_renderKey',
            'g_activeCurrencies',
        ]),
    },
    methods: {
        ...mapActions([
            'a_setDate',
            'a_fetchCurrencies',
            'a_setInfo',
            'a_setRenderKey',
            'a_setActiveCurr',
            'a_setCurrencyExistence',
        ]),
        addZero(date) {
            if (date.toString().length < 2) {
                return '0' + date.toString();
            } else {
                return date;
            }
        },
        async changeDate(title, value) {
            if (title === 'year') {
                this.a_setDate({
                    year: value,
                    month: this.d_activeBtn.month,
                    day: this.d_activeBtn.day,
                });
            }
            if (title === 'month') {
                this.a_setDate({
                    year: this.d_activeBtn.year,
                    month: value,
                    day: this.d_activeBtn.day,
                });
            }
            if (title === 'day') {
                this.a_setDate({
                    year: this.d_activeBtn.year,
                    month: this.d_activeBtn.month,
                    day: value,
                });
            }
            this.d_fullDate = this.setFullDate(this.g_date);
            await this.validateDate();
        },
        async validateDate() {
            let currDate = {
                year: new Date().getFullYear(),
                month: new Date().getMonth() + 1,
                day: new Date().getDate(),
            };
            if (this.g_date.year === currDate.year && (this.g_date.month > currDate.month || (this.g_date.day >= currDate.day && this.g_date.month === currDate.month))) {
                this.a_setInfo('Данные на ' + this.setFullDate(currDate) + ':');
                await this.a_fetchCurrencies('https://www.cbr-xml-daily.ru/daily_json.js');
            } else {
                if (this.g_date.year === 1992 && (this.g_date.month < 7 || (this.g_date.day === 1 && this.g_date.month === 7))) {
                    this.a_setInfo('Данные на 1992/07/01:');
                    await this.a_fetchCurrencies('https://www.cbr-xml-daily.ru/archive/1992/07/01/daily_json.js');
                } else {
                    await this.findUrl();
                }
            }
            this.g_activeCurrencies.forEach((itm, i) => {
                let index = i;
                if (this.g_data.Valute[itm.CharCode]) {
                    let item = this.g_data.Valute[itm.CharCode];
                    this.a_setActiveCurr({item, index});
                    let condition = true;
                    this.a_setCurrencyExistence({condition, index});
                } else {
                    let condition = false;
                    this.a_setCurrencyExistence({condition, index});
                }
            });
            await this.a_setRenderKey(Date.now().toString());
        },
        setFullDate(date, separator = '/') {
            let year = date.year;
            let month = this.addZero(date.month);
            let day = this.addZero(date.day);
            return year + separator + month + separator + day;
        },
        async findUrl() {
            await this.a_fetchCurrencies('https://www.cbr-xml-daily.ru/archive/' + this.d_fullDate + '/daily_json.js');
            if (this.g_error === false) {
                this.a_setInfo('Данные на ' + this.d_fullDate + ':');
            } else {
                let momentDate = this.g_date;
                let oldFullDate = this.d_fullDate;
                while (this.g_error) {
                    momentDate = moment(this.setFullDate(momentDate, '-')).subtract(1, 'days').format('L');
                    momentDate = {
                        year: momentDate.slice(6, 10),
                        month: momentDate.slice(0, 2),
                        day: momentDate.slice(3, 5),
                    };
                    this.d_fullDate = this.setFullDate(momentDate);
                    await this.a_fetchCurrencies('https://www.cbr-xml-daily.ru/archive/' + this.d_fullDate + '/daily_json.js');
                }
                this.a_setInfo('Данные на ' + oldFullDate + ' отсутствуют. ' + 'Показаны данные на ' + this.d_fullDate + ':');
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
        overflow-x: scroll;
        overflow-y: hidden;
        display: flex;
        justify-content: flex-start;

        &::-webkit-scrollbar {
            width: auto;
            height: 4px;
        }

        &::-webkit-scrollbar-track {
            background: transparent;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #d2d2d2;
            border-radius: 20px;
        }

    }

    .separator {
        width: 100%;
        height: 2px;
        background-color: rgba($primary, .5);
    }
}
</style>
