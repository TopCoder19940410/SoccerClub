<template>
    <div class="block-container">
        <div class="news-block-title">
            News | Aktuelle Neuigkeiten
        </div>
        <div class="news-container-mini">
            <div class="news-item" v-for="singleNews in news" :key="singleNews._id">
                <div class="news-dat">
                    {{ singleNews.publishedAtFormatted}}
                </div>
                <div class="news-title" :data-id="singleNews._id" @click="goToNews(event)">
                    {{ singleNews.title }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            news: [],
        }
    },

    methods: {
        getAllNews() {
            axios.get('http://localhost:3000/api/news')
                .then((response) => {
                    this.news = response.data.slice(-5).map((item) => {
                        const date = new Date(item.publishedAt);
                        const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
                        return {
                            ...item,
                            publishedAtFormatted: formattedDate
                        };
                    });
                    console.log(this.news);
                })
        },


        goToNews () {
            const newsId = event.target.dataset.id;

            this.$router.push(`../../news/${newsId}`)
        }


    },

    created() {
        this.getAllNews()
    }
}
</script>
<style scoped>
    .block-container {
        padding: 10px;
        max-width: 500px;
        border-radius: 8px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        -webkit-box-shadow: 10px 10px 26px -15px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 26px -15px rgba(0,0,0,0.75);
box-shadow: 10px 10px 26px -15px rgba(0,0,0,0.75);
    }


    .news-block-title {
        color: #cc3366;
        font-family: 'goboldI', sans-serif;
        text-align: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        padding-bottom: 5px;
        text-transform: uppercase;
    }

    .news-item {
        padding: 2.5px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        font-size: 15px;
    
    }

    .news-title {
        color: #cc3366;
        font-family: 'metropolis', sans-serif;
    }
</style>