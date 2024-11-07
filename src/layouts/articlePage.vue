

  <template>
    <headerComponent />
  <div class="main-wrap"> 
    <div v-if="articleData" class="article-box">
        <div class="article-header">
            <div class="article-title">
                <h1>{{ articleData.title }}</h1>
            </div>
            <div class="article-author" v-if="articleData.author && articleData.author.name">
                <div v-if="!articleData.author.avatar" class=" article-avatar relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                </div>
                <img v-if="articleData.author.avatar" class=" article-avatar w-10 h-10 rounded-full" :src="articleData.author" alt="Rounded avatar">
                <div class="additional-block">
                    <div class="author-name">
                        {{ articleData.author.name }}
                    </div>
                    <div class="public-date">
                        {{ articleData.publishedAt }}
                    </div>
                </div>
               
            </div>
            <div class="article-content" v-html="articleData.content">
            </div>
        </div>
    </div>
  </div>
  <footerComponent/>
</template>
  
  <script>
  import axios from 'axios';
  import headerComponent from '../components/headerComponent.vue';
  import footerComponent from '../components/footerComponent.vue';
  
  export default {
    data () {
        return {
            articleData: [],
        }
    },
    components: {
      headerComponent,
      footerComponent
    },
    methods: {
      getNewsById() {
        const newsId = this.$route.params.id;
        console.log(newsId);
  
        axios.get(`http://localhost:3000/api/news/${newsId}`)
          .then((response) => {
            this.articleData = response.data
            const formattedDate = new Date(this.articleData.publishedAt).toLocaleString('ru-RU', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                        });
            this.articleData.publishedAt = formattedDate;
            console.log(this.articleData)
          })
          .catch((error) => {
            console.log('Error while getting data of article', error);
          });
      }
    },
    mounted() {
      this.getNewsById(); // Вызываем метод при монтировании компонента
    }
  };
  </script>
  
  <style scoped>
    @import url(../assets/styles/articlePage.css);
  </style>
  