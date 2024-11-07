<template>
    <div class="social-section">
        <div class="social-section-container">
            <div class="social-title">
                Social Media
            </div>
            <div class="instagram-posts-container">
                <div @click="goToIg(item)" class="instagram-item-block" v-for="item in data">
                    <img :src="item.media_url" alt="Instagram post preview">
                </div>

                
            </div>

        </div>
    </div>
</template>
<script>
import axios from 'axios'


export default {
    data() {
        return {
            data: [],
            sourceMedia: [],
        }
    },

    methods: {
        async getPostsList() {
            try {
                const tokenResponse = await axios.get('http://localhost:3000/api/insta-token');
                const instaToken = tokenResponse.data;

                const mediaResponse = await axios.get(`https://graph.instagram.com/me?fields=media&access_token=${instaToken}`);
                const sourceMedia = mediaResponse.data.media.data;

                const mediaPromises = sourceMedia
                    .reverse()
                    .slice(0, 10)
                    .map(async (item) => {
                        const result = await axios.get(`https://graph.instagram.com/${item.id}?fields=id,media_url&access_token=${instaToken}`);
                        return result.data;
                    });


                this.data = await Promise.all(mediaPromises);

                console.log(this.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        },

        goToIg (item) {
            const instagramURL = `https://instagram.com/${item.username}`;
            window.open(instagramURL, '_blank');
        }
    },

    created() {

        // this.getPostsList();

    },
}
</script>
<style scoped>
.social-section {
    background-color: #cc0033;
    background-image: url(../assets/texture.png);
    padding: 50px 0;
    position: relative;
}

.social-section::before {
    content: " ";
    position: absolute;
    width: 60px;
    height: 60px;
    background: #fff;
    transform: rotate(45deg);
    top: -30px;
    left: calc(50% - 30px);
}

.social-section-container {
    max-width: 1440px;
    margin: 0 auto;
}

.social-title {
    font-family: 'goboldThin', sans-serif;
    color: #fff;
    text-transform: uppercase;
    font-size: 35px;
    text-align: center;
    margin-bottom: 60px;
}

.social-post-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}

.post-container {
    width: 350px;
    height: 350px;
    background-color: #890526;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    overflow: hidden;

}

.flockler-wall_v2-items {
    padding-bottom: 0 !important;
}

div.flockler-grid-item__footer {
    display: none !important;
}

.flockler-posts,
.flockler-wall_v2-items[data-container-width=">=0"] .flockler-wall_v2-item {
    height: 350px !important;
}

.flockler-posts.flockler-wall_v2-items {
    height: unset !important;
}

.flockler-grid-item__meta {
    display: none !important;
}


.social-section-container {
    max-width: 1200px;
    margin: 0 auto;
}

.instagram-posts-container{
    display: flex;
    align-items: center;
    max-width: 1500px;
    flex-wrap: wrap;
}

.instagram-item-block {
    width: 350px;
    height: 350px;
    margin: 25px;
}

.instagram-item-block:hover, .instagram-item-block img:hover {
   cursor: pointer;
}

.instagram-item-block img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 800px) {
    .instagram-posts-container{
        justify-content: center;
    }
}


@media screen and (max-width: 750px) {
    .social-post-container {
        justify-content: center;
    }
}
</style>