<template>
    <headerComponent />
    <div class="galleryPage-container">
        <div class="galleryPage-title red-title-text">
            unsere Galerie
        </div>

        <swiper
        :slidesPerView="1"
        :spaceBetween="50"
        :loop="true"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide class="slider-cont" v-for="(item, index) in galleryList" :key="index">
            <img :src="item.previewImg" class="slider-img" alt="">

        </swiper-slide>

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
      </swiper>



<div class="grid grid-cols-2 md:grid-cols-3 mt-5 gap-4">
    <div class="grid-image" @click="goToItem(event)" v-for="(image, index) in galleryList" :key="index" :data-id="image._id">
        <img class=" max-w-full rounded-lg" :src="image.previewImg" alt="" :data-id="image._id">
        <div class="grid-image-text" :data-id="image._id">
            <div class="gi-text-title" :data-id="image._id">
                {{ image.title }}
            </div>
            <div class="gi-text-title team" :data-id="image._id">
                {{ image.team }}
            </div>
        </div>
    </div>
    
</div>


    </div>

    <footerComponent />
</template>
<script>

import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import axios from 'axios';
import headerComponent from '../components/headerComponent.vue';
import footerComponent from '../components/footerComponent.vue';
import { Pagination, Navigation } from 'swiper/modules';
export default {
    data () {
        return {
            galleryList: []
        }
    },

    components: {
        headerComponent,
        footerComponent,
        Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination, Navigation],
      };
    },

    methods: {
        getGalleryList () {
            axios.get('http://localhost:3000/gallery/')
            .then((response) => {
                console.log(response)
                this.galleryList = response.data
            })
            .catch((error) => {
                console.log('Error getting gallery list', error)
            })
        },

        goToItem () {
            const itemId = event.target.dataset.id

            this.$router.push(`/gallery/${itemId}`)
        }
    }, 

    mounted () {
        this.getGalleryList()
    }
}

</script>

<style scoped>
   @import url('../assets/styles/galleryPage.css');
</style>