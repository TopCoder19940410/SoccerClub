<template>
    <div class="result-main-container">

        <div class="result-line">
            <div class="gallery-title red-title-text">FOTOGALERIE</div>
            <div class="result-line__container">
                <swiper :slides-per-view="slidesPerView" @swiper="onSwiper" @slideChange="onSlideChange"
                    :pagination="{ clickable: true }">
                    <div class="swiper-pagination"></div>
                    <swiper-slide v-for="(item, index) in content" :key="index">
                        <div v-if="content.length > 0 && item.video && item.previewImg" class="video-container">
                            <div class="video-content">
                                <video :ref="'myVideo_' + index" :src="item.video" @play="handleVideoPlay(index)"
                                    @pause="handleVideoPause(index)" @ended="handleVideoEnded(index)"></video>
                                <img v-if="showPlayButton[index]" class="play-btn" alt="Play Button"
                                    @click="togglePlayPause(index)" style="cursor: pointer;" src="/uploads/media/play.png">
                            </div>
                            <div class="video-title">
                                {{ item.title }}
                            </div>
                        </div>
                        <div v-else>
                            <p>No videos available</p>
                        </div>
                    </swiper-slide>
                </swiper>
                
                <redButton class="rd-btn" path="/gallery" text="View gallery" />


                <div class="arrow-right" @click="swiper.slideNext()">
                    <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
                            fill-rule="nonzero" />
                    </svg>
                </div>
                <div class="arrow-left" @click="swiper.slidePrev()">
                    <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"
                            fill-rule="nonzero" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from 'swiper/modules';
import moment from 'moment';
import getData from '../../server/getData.js'
import { reactive } from 'vue';
import redButton from './redButton.vue';



import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default {
    components: {
        Swiper,
        SwiperSlide,
        redButton

    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
        };
    },
    data() {
        return {
            activeSlide: 0,
            swiper: null,
            content: [],
            showPlayButton: reactive([]),
            slidesPerView: 4, // Начальное количество слайдов на экране


        };
    },

    methods: {
        getContent() {
  axios.get('http://localhost:3000/api/gallery')
    .then((response) => {
      this.content = response.data
        .filter(item => item.videos && item.videos.length > 0 && item.previewImg)
        .map(item => ({
          title: item.title,
          video: item.videos[0],
          previewImg: item.previewImg
        }));

      console.log(this.content);

      if (this.content && this.content.length > 0) {
        this.showPlayButton = Array.from({ length: this.content.length }, () => true);
      } else {
        console.log('Filtered content is empty or does not meet the criteria.');
      }
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
},


    onResize() {
      if (window.innerWidth < 768) {
        this.slidesPerView = 1;
      } else if (window.innerWidth < 1024) {
        this.slidesPerView = 2;
      } else {
        this.slidesPerView = 4;
      }
    },
    togglePlayPause(index) {
      const video = this.$refs['myVideo_' + index][0];
      if (video) {
        if (video.paused) {
          video.play();
          this.showPlayButton[index] = false;
        } else {
          video.pause();
          this.showPlayButton[index] = true;
        }
      } else {
        console.error("Video element is not yet available.");
      }
    },
    handleVideoPlay(index) {
      this.showPlayButton[index] = false;
    },
    handleVideoPause(index) {
      this.showPlayButton[index] = true;
    },
    handleVideoEnded(index) {
      this.showPlayButton[index] = true;
    },
    onSlideChange() {
      if (this.swiper) {
        this.activeSlide = this.swiper.activeIndex;
      }
    },
    onSwiper(swiper) {
      this.swiper = swiper;
    },
  },
  
  destroyed() {
    window.removeEventListener('resize', this.onResize);
  },
    mounted() {
        this.getContent()
        window.addEventListener('resize', this.onResize);
        this.onResize();
    },

    destroyed() {
        window.removeEventListener('resize', this.onResize);
    },
};
</script>

<style scoped>
.result-main-container {
    background: rgba(235, 234, 234, 0.4);
    z-index: 0;

    padding-bottom: 100px;
}

.result-line {
    padding: 60px 0;
    position: relative;
    z-index: 2;
    padding-bottom: 0;
    transform: translateY(25px);
    overflow: hidden;
}

.result-line__vs {
    font-family: 'goboldI', sans-serif;
    font-size: 32px;
    color: #cc0033;
}



.result-line__tournament_data {
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: 'metropolis', sans-serif;
    color: #003333;
    margin-bottom: 45px;
}

.video-title {
    font-family: 'metropolis', sans-serif;
    margin-top: 10px;
}

.result-line__date {
    font-family: 'dCondensed', sans-serif;
    font-size: 14px;
    margin-top: 10px;
}

.result-line__teams_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.result-line__team {
    max-width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}


.result-line__item img {
    mix-blend-mode: color;
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply;

}

.result-line__item .result-line__team_logo {
    width: 50px;
    height: 50px;
    aspect-ratio: 3/2;

}

.arrow-left {
    left: 0;
}

.arrow-right {
    right: 0;
}

.arrow-right,
.arrow-left {
    position: absolute;
    width: 55px;
    height: 60px;
    top: calc(50% - 30px);
    z-index: 999 !important;
    opacity: 0.7;
    transition: 0.2s;
}

.arrow-right:hover,
.arrow-left:hover {
    cursor: pointer;
    opacity: 1;
}

.main-news-container {
    position: relative;
    z-index: 1;
}

.result-main-container {
    position: relative;
}

.near-event {
    background: #fff;
    position: absolute;
    z-index: 2;
    top: -30px;
    width: 440px;
    height: 320px;
    left: calc(50% - 220px);
    border-radius: 16px;
    display: flex;
    align-items: center;
    flex-direction: column;

    -webkit-box-shadow: 0px 5px 10px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 5px 10px -7px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 5px 10px -7px rgba(0, 0, 0, 0.75);
}

.near-event-timer {
    border-radius: 16px 16px 0 0;
    font-size: 18px;

}

.near-event-info__container {
    padding: 0 40px 40px 40px;


}

.near-event-timer {
    background: #cc0033;
    color: #fff;
    font-family: 'goboldI';
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    padding: 5px 0;
}

.near-event-tournament {
    font-family: 'metropolis', sans-serif;
    font-size: 18px;
    margin-bottom: 15px;
}

.near-event-time {
    font-size: 16px;
    font-family: 'metropolis', sans-serif;
    color: #003333;
    margin-bottom: 40px;
}


.result-line__team {
    display: flex;
    align-items: center;
    flex-direction: column;
    white-space: nowrap;
}

.near-event-info__container .result-line__team_logo {
    width: 60px;
    height: 60px;
}

.near-event-info__container .result-line__team_logo img {
    width: 100%;
    height: 100%;
}

.near-event-info__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #003333;
    width: 100%;
    padding: 40px 0;
}

.near-event-tournament {
    margin-bottom: 7px;
}

.near-event .team-item {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 0 40px 20px 40px;
}

.near-event .result-line__team_name {
    font-size: 16px;
    color: #003333;
    font-family: 'metropolis', sans-serif;
    margin-top: 15px;
}


.result-line__item {
    display: flex;
    flex-direction: column;
    padding: 0 40px;
    justify-content: center;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    margin-right: 0 !important;
    width: 409px !important;
}

.video-container {
    max-width: 350px;
    max-height: 300px;
    position: relative;
}

.play-btn {
    max-width: 70px;
    max-height: 70px;
    left: calc(50% - 35px);
}

.result-line__container {
    max-width: 90%;
    margin: 0 auto;
}

.swiper-backface-hidden .swiper-slide {
    justify-content: center !important;
    display: flex;
}

.gallery-title {
    text-align: center;
    margin-bottom: 50px;
    color: #cc3366;
    font-family: 'goboldI', sans-serif;
    margin-bottom: 30px;
    font-size: 30px;
}

.video-content {
    position: relative;
}

.play-btn {
    position: absolute;
    top: calc(50% - 35px);
    left: calc(50% - 35px);
}

.rd-btn {
    text-align: center;
    display: flex;
    width: fit-content;
    margin: 0 auto;
    margin-top: 60px;
}

.swiper-wrapper {
    margin-bottom: 60px !important;
}


@media screen and (max-width: 768px) {

    .arrow-left,
    .arrow-right {
        display: none;
    }

    .video-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>


