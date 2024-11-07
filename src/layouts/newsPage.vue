<template>
    <headerComponent />
    <div class="newsPage-container">
        <div class="newsPage-title red-title-text">
            Aktuelle Nachrichten
        </div>
        <div class="newsPage-preview-container">
            <div class="news-items" @click="goToNews(event)" v-for="(item, index) in news" :key="index" :data-id="item._id">
                <div class="news-items-img" :data-id="item._id">
                    <img :src="item.previewImg" :alt="item.altText" :data-id="item._id">
                </div>
                <div class="news-items-title" :data-id="item._id">
                    {{ item.title }}
                </div>
                <div class="news-page-absolute" :data-id="item._id">
                    <div class="news-items-date" :data-id="item._id">
                        {{ item.publishedAt }}
                    </div>
                    <div class="readmore" :data-id="item._id">
                        Read More
                    </div>
                </div>

            </div>

        </div>
    </div>
    <footerComponent />
</template>
<script>
import headerComponent from '../components/headerComponent.vue';
import footerComponent from '../components/footerComponent.vue';
import axios from 'axios';
export default {
    components: {
        headerComponent,
        footerComponent
    },

    data() {
        return {
            news: [],
        }
    },


    methods: {
        goToNews () {
            const newsId = event.target.dataset.id;
            this.$router.push(`/news/${newsId}`)
        },
        getNewsList() {
            axios.get('http://localhost:3000/api/news')
                .then((response) => {
                    this.news = response.data.map(item => {
                        const date = new Date(item.publishedAt);

                        const day = ('0' + date.getDate()).slice(-2);
                        const month = ('0' + (date.getMonth() + 1)).slice(-2);
                        const year = date.getFullYear();
                        const hours = ('0' + date.getHours()).slice(-2);
                        const minutes = ('0' + date.getMinutes()).slice(-2);

                        const formattedDate = `${day}.${month}.${year} ${hours}:${minutes}`;

                        return {
                            ...item,
                            publishedAt: formattedDate // Перезаписываем свойство publishedAt на отформатированную дату
                        };
                    });
                })
                .catch(error => {
                    console.error('Ошибка при получении новостей:', error);
                });
        }


    },

    mounted() {
        this.getNewsList();
    },
}
</script>
<style scoped>
@import url('../assets/styles/newsPage.css');
</style>