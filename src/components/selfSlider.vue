<template>
    <!-- Slider main container -->
<div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Slide 1
        </div>
        <div class="swiper-slide">Slide 2
        </div>
        <div class="swiper-slide">Slide 3
        </div>
        <div class="swiper-slide">Slide 4
        </div>
        <div class="swiper-slide">Slide 5
        </div>
        <div class="swiper-slide">Slide 1
        </div>
        <div class="swiper-slide">Slide 2
        </div>
        <div class="swiper-slide">Slide 3
        </div>
        <div class="swiper-slide">Slide 4
        </div>
        <div class="swiper-slide">Slide 5
        </div>
        <div class="swiper-slide">Slide 1
        </div>
        <div class="swiper-slide">Slide 2
        </div>
        <div class="swiper-slide">Slide 3
        </div>
        <div class="swiper-slide">Slide 4
        </div>
        <div class="swiper-slide">Slide 5
        </div>
    </div>
      <!-- If we need navigation buttons -->
<div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

</div>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {
            eventsData: [],
        }
    },

    methods: {
        fetchData () {
            axios.get('http://localhost:3000/data')
            .then((response) => {
                this.eventsData = response.data;
            })
        }
    },

    created () {
        this.fetchData();
        console.log(this.eventsData)
    }
}

import '../components/additionalJs/seldSlider.js'
</script>
<style>
.swiper-container {
    position: relative;
    width: 90vw;
    /*height: 300px;*/
  }

  .swiper-container > .swiper-slide__content {
    position: absolute;
    top: 0;
  }

  .swiper-slide {
    height: 300px;
    display: -webkit-box;
    display: flex;
    background: #eee;
    height: 380px;
    width: 600px;
    -webkit-box-align: center;
            align-items: center;
    -webkit-box-pack: center;
            justify-content: center;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
    -webkit-transform: scale(0.8);
            transform: scale(0.8);
  }
  .swiper-slide.swiper-slide-active {
      -webkit-transform: scale(1);
      transform: scale(1.3);
      background: #000;
/*       background: url(images/slider1.jpg) center no-repeat; */
/*       background-size: cover; */
      height: 380px;
      width: 600px;
      z-index: 9;
    color:#fff;
  }

  .swiper-slide__content {
    height: 300px;
  }
</style>