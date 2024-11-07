<template>
  <headerComponent />
  <div class="galleryPage-container">
    <div class="gallery-page-title">
      {{ dataGallery.title }}
    </div>
    <div class="gallery-page-desc">
      {{ dataGallery.description }}
    </div>

    <div class="galleryItem-container">
      <!-- Отображаем изображения -->
      <a v-for="(image, index) in dataGallery.images" :key="'image-' + index" :href="image" data-fancybox="gallery" :data-caption="`${dataGallery.title} (${dataGallery.team})`">
        <img :src="image" />
      </a>
  
      <!-- Отображаем видео -->
      <template v-if="dataGallery.videos && dataGallery.videos.length > 0">
        <a v-for="(video, videoIndex) in dataGallery.videos" :key="'video-' + videoIndex" :href="video" data-fancybox="gallery" :data-caption="`${dataGallery.title} (${dataGallery.team})`">
          <video controls>
            <source :src="video" type="video/mp4" /> <!-- Замените type на соответствующий тип видео -->
            <!-- Вставьте сообщение для неподдерживаемых браузеров -->
          </video>
        </a>
      </template>
    </div>
  </div>
 
  <footerComponent />
</template>
<script>
import headerComponent from '../components/headerComponent.vue';
import footerComponent from '../components/footerComponent.vue';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import axios from 'axios';


export default {
  components: {
    headerComponent,
    footerComponent,
  },
 

  data() {
    return {
      dataGallery: []
    }
  },

  methods: {
    getData() {
      const itemId = this.$route.params.id;
      console.log(itemId);

      axios.get(`http://localhost:3000/gallery/${itemId}`)
        .then(response => {
          console.log(response.data.images); // Убедитесь, что вам выводится массив изображений
          this.dataGallery = response.data
          console.log(response.data)
        })
        .catch(error => {
          // Обработка ошибок
        });
    },

   

  },

 
  mounted() {
    this.getData();
   
    Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
  },



}
</script>
<style scoped>
@import url(../assets/styles/galleryItem.css);
</style>