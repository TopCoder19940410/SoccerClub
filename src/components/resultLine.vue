<template>
    <div class="result-main-container">
        <swiper :centeredSlides="true" :watchSlidesProgress="true" :slidesPerView="5" class="mySwiper" :initialSlide="3"
            :navigation="{
                prevEl: prev,
                nextEl: next,
            }" :loop="true" :modules="modules" :pagination="{ clickable: true }" :options="swiperOptions" ref="mySwiper"
            :breakpoints="{
                '375': {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                '640': {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                '768': {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                '1624': {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }"
            >
            <swiper-slide v-for="(item, index) in eventData" :key="index" :data-index="index" @click="getIndex(index)">
                <div class="custom-slide">
                    <div class="event-tournament">
                        {{ item.tournament }}
                    </div>
                    <div class="event-date">
                        {{ item.time }}
                    </div>
                    <div class="teams-info">
                        <div class="vs-text">
                            VS
                        </div>
                        <div class="team-slot" v-for="team in item.teams">
                            <div class="team-logo">
                                <img :src="team.logo" alt="">
                            </div>
                            <div class="team-name">
                                {{ team.club }}
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <div ref="prev" class="swiper-button-prev"></div>
            <div ref="next" class="swiper-button-next"></div>
        </swiper>
    </div>
</template>
  
<script>
import axios from 'axios';
import { Navigation, Pagination } from 'swiper/modules';
import moment from 'moment';
import getData from '../../server/getData.js'


import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { ref } from 'vue';

export default {
    components: {
        Swiper,
        SwiperSlide,

    },


    setup() {
        const prev = ref(null);
        const next = ref(null);
        return {
            modules: [Navigation],
            prev,
            next,
        };
    },
    data() {
        return {
            eventData: [],
            // activeSlide: 2,
            swiper: null,
            durationInMinutes: 0,
            interval: null,
            seconds: 0,
            minutes: 0,
            formattedTime: '',
            nextEventIndex: 0,
            nextMatch: {},
            hours: '',
            activeSlides: '',
            swiperOptions: {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true
                },
                on: {
                    slideChange: this.onSlideChange,
                },
            },


        };
    },

    methods: {

        getNearMatch() {
            let formattedDates = this.eventData.map(item => {
                const splittedDate = item.time.slice(4).split('|');
                return splittedDate.map(element => String(element).replace(/\s/g, '').split(','));
            });

            let currentDate = moment().format('DD.MM.YYYY HH:mm');
            let nextEventIndex = -1;

            for (let i = 0; i < formattedDates.length; i++) {
                const eventTime = formattedDates[i].join(' ');
                const format = 'DD.MM.YYYY HH:mm';
                const durationInMinutes = moment(eventTime, format).diff(moment(currentDate, format), 'minutes');

                if (durationInMinutes > 0) {
                    nextEventIndex = i;
                    break;
                }
            }

            if (nextEventIndex !== -1) {
                const eventTime = formattedDates[nextEventIndex].join(' ');
                const format = 'DD.MM.YYYY HH:mm';
                const durationInMinutes = moment(eventTime, format).diff(moment(currentDate, format), 'minutes');
                this.durationInMinutes = durationInMinutes;
                this.startTimer();
            } else {
                console.log("All events have already started.");
            }
            this.nextMatch = Object.freeze(this.eventData[nextEventIndex])
        },

        startTimer() {
            this.interval = setInterval(() => {
                if (this.durationInMinutes > 0 || this.seconds > 0) {
                    if (this.seconds === 0) {
                        this.durationInMinutes--;

                        this.hours = Math.floor(this.durationInMinutes / 60);
                        this.minutes = this.durationInMinutes % 60;
                        this.seconds = 59;
                    } else {
                        this.seconds--;
                    }

                    // Расчет дней
                    this.days = Math.floor(this.hours / 24);
                    this.hours %= 24;

                    // Форматирование времени в формат DD-HH-MM
                    this.formattedTime = `${this.formatDays(this.days)}D:${this.formatTime(this.hours)}H:${this.formatTime(this.minutes)}M`;
                } else {
                    clearInterval(this.interval);
                    // Таймер достиг нуля, выполните необходимые действия
                }
            }, 1000);
        },

        formatDays(days) {
            // Добавление ведущего нуля, если число меньше 10
            return days < 10 ? `${days}` : days;
        },

        formatTime(time) {
            return time < 10 ? `${time}` : time;
        },




        //     slideNext() {
        //   this.$refs.mySwiper.swiper.slideNext();
        // },
        // slidePrev() {
        //   this.$refs.mySwiper.swiper.slidePrev();
        // },
        onSwiper(swiper) {
            this.swiper = swiper;
        },
        async fetchData() {
            try {
                const response = await axios.get('http://localhost:3000/data');
                this.eventData = Object.freeze(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }

            this.getNearMatch()
        },

        onSlideChange() {

            const swiperInstance = this.$refs.mySwiper.swiper;

            // Если swiperInstance существует и realIndex доступен, устанавливаем класс 'active'
            if (swiperInstance && swiperInstance.realIndex !== undefined) {
                this.activeSlide = swiperInstance.realIndex;
            }

            console.log(this.activeSlides)

        },

        getCurrentIndex (index) {
            console.log(index)
        },


        getIndex(index) {
    console.log(index, this.activeSlides);
  },
    },

    mounted() {
        this.fetchData();
        this.onSlideChange(); // Вызываем метод для установки класса при загрузке страницы


    },

    watch: {
        activeSlide(newIndex) {
            const swiperInstance = this.$refs.mySwiper.swiper;
            swiperInstance.slideTo(newIndex); // Перемещаем слайдер при изменении активного слайда
            this.activeSlides = newIndex
        },
    },
};
</script>

<style scoped>
.result-line {
    background: rgba(235, 234, 234, 0.6);
    padding: 80px 0;
    position: relative;
    transform: translateY(-40px);
    z-index: 0;
}

.result-line__vs {
    font-family: 'goboldI', sans-serif;
    font-size: 32px;
    color: #cc0033;
}


.swiper-slide {
    justify-content: center;
    display: flex;
    align-items: center;
}

.swiper {
    padding: 80px 0;
    background: rgba(235, 234, 234, .6);
}

.result-main-container{
    overflow-x: hidden ;
}



.custom-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'metropolis' ,sans-serif;
    color: #033;
    width: 100%;
    padding: 0 25px;
    height: 150px;
    border-right: 1px solid rgba(0, 0, 0, 0.1);

}

.event-tournament {
    margin-bottom: 7px;
    text-align: center;
}

.event-date {
    margin-bottom: 40px;
    font-size: 13px;
}

.teams-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
}

.team-slot {
    width: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.team-slot .team-logo {
    margin-bottom: 8%;
}

.vs-text {
    position: absolute;
    top: 24px;
    left: calc(50% - 17px);

        font-family: 'goboldI', sans-serif;
        font-size: 30px;
        color: #c03;
}

.team-name {
    font-size: 14px;
}

.swiper-button-prev, .swiper-button-next {
    color: #212529
}

.swiper{
    height: 310px;
    overflow: visible;
}

.swiper-slide-active {
    background-color: #fff;
    height: 300px;
    padding: 40px 0;
    margin-top: -90px;
    background: #fff;
    width: 440px;
    height: 320px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    box-shadow: 0 5px 10px -7px #000000bf;
}

.swiper-slide-active::before {
    position: absolute;
    content: "123123";
    top: 0;
    left: 0;
    width: 100%;


    background: #cc0033;
    color: #fff;
    font-family: 'goboldI';
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    padding: 5px 0;
    height: fit-content;
    border-radius: 16px 16px 0 0;
}


@media screen and (max-width: 600px) {
    .result-main-container{
        padding: 20px;
    }



    .swiper-button-prev{
        left: -20px;
    }
    .swiper-button-next{
        right: -20px;
    }


    .custom-slide {
        padding: 0 5px;
    }
   
}
</style>


