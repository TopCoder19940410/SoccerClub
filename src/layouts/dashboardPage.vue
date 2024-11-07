<template>
    <dashboardHeader />
    <div class="main-wrap">
        <sideBar />

        <div class="content-box">
            <div class="content-box__title">
                Hallo 👋
            </div>
            <div class="miniblock-container">
                <div class="content-container ">
                    <div class="preview-table bg-gray-100">
                        <div class="preview-table-title coolGray">
                            <span>Spieler</span>
                           

                        </div>
                        <div class="preview-table-container bg-gray-50">
                            <div v-for="(player, index) in players" :key="index" class="preview-table-item">
                                <div class="preview-table-item-name">
                                    {{ player.firstName }} {{ player.lastName }}
                                </div>
                                <div class="preview-table-item-team">
                                    {{ player.team }}
                                </div>
                                <div class="preview-table-item-button">
                                    <button @click="viewPlayer(player)" :data-id="player._id" type="button"
                                        class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Ansehen
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-container">
                    <div class="preview-table bg-gray-100">
                        <div class="preview-table-title coolGray">
                            <span>Nachrichten</span>
                            <button type="button" @click="this.$router.push('/news/add')"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Neu hinzufügen
                            </button>

                        </div>
                        <div class="preview-table-container bg-gray-50">
                            <div v-for="(newsItem, index) in news" :key="newsItem._id" class="preview-table-item">
                                <div class="preview-table-item-name">
                                    {{ newsItem.title }}
                                </div>
                                <div class="preview-table-item-team">
                                    {{ newsItem.team }}
                                </div>
                                <div class="preview-table-item-team">
                                    {{ newsItem.author.name }}
                                </div>
                                <div class="preview-table-item-team">
                                    {{ newsItem.publishedAt }}
                                </div>
                                <div class="preview-table-item-button">
                                    <button @click="goToNews" type="button" :data-id="newsItem._id"
                                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                        <svg clip-rule="evenodd" :data-id="newsItem._id" fill-rule="evenodd"
                                            stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm.002 3c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z"
                                                fill-rule="nonzero" />
                                        </svg>
                                    </button>
                                    <button @click="EditNews(event)" type="button" :data-id="newsItem._id"
                                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                        <svg :data-id="newsItem._id" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round"
                                            stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path :data-id="newsItem._id"
                                                d="m4.481 15.659c-1.334 3.916-1.48 4.232-1.48 4.587 0 .528.46.749.749.749.352 0 .668-.137 4.574-1.492zm1.06-1.061 3.846 3.846 11.321-11.311c.195-.195.293-.45.293-.707 0-.255-.098-.51-.293-.706-.692-.691-1.742-1.74-2.435-2.432-.195-.195-.451-.293-.707-.293-.254 0-.51.098-.706.293z"
                                                fill-rule="nonzero" />
                                        </svg>
                                    </button>

                                    <button @click="deleteNews(newsItem._id, index)" type="button"
                                        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-1 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                        <svg width="20" height="20" :data-id="newsItem._id" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                            <path :data-id="newsItem._id"
                                                d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m-9-14c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6-5h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z" />
                                        </svg>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-container gallery">
                    <div class="preview-table bg-gray-100">
                        <div class="preview-table-title coolGray">
                            <span>Galerie</span>
                            <button type="button" @click="this.$router.push('/dashboard/gallery/add')"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Neu hinzufügen
                            </button>

                        </div>
                        <div class="preview-table-container bg-gray-50">
                            <div v-for="(galleryItem, index) in gallery" :key="galleryItem._id" class="preview-table-item">
                                <div class="preview-table-item-name">
                                    {{ galleryItem._id }}
                                </div>
                                <div class="preview-table-item-team">
                                    {{ galleryItem.title }}
                                </div>
                                <div class="preview-table-item-team">
                                    {{ galleryItem.src }}
                                </div>
                                <div class="preview-table-item-team">
                                    {{ galleryItem.text }}
                                </div>
                                <div class="preview-table-item-button">
                                    <button @click="goToGalleryItem" type="button" :data-id="galleryItem._id"
                                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                        <svg clip-rule="evenodd" :data-id="galleryItem._id" fill-rule="evenodd"
                                            stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm.002 3c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z"
                                                fill-rule="nonzero" />
                                        </svg>
                                    </button>
                                    <button @click="editGalleryItem" type="button" :data-id="galleryItem._id"
                                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                        <svg :data-id="galleryItem._id" clip-rule="evenodd" fill-rule="evenodd"
                                            stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="m4.481 15.659c-1.334 3.916-1.48 4.232-1.48 4.587 0 .528.46.749.749.749.352 0 .668-.137 4.574-1.492zm1.06-1.061 3.846 3.846 11.321-11.311c.195-.195.293-.45.293-.707 0-.255-.098-.51-.293-.706-.692-.691-1.742-1.74-2.435-2.432-.195-.195-.451-.293-.707-.293-.254 0-.51.098-.706.293z"
                                                fill-rule="nonzero" />
                                        </svg>
                                    </button>

                                    <button @click="deleteGallery(galleryItem, index)" type="button"
                                        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-1 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">

                                        <svg width="20" height="20" :data-id="galleryItem._id" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                            <path :data-id="galleryItem._id"
                                                d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m-9-14c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6-5h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z" />
                                        </svg>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import sideBar from '../components/sidebar.vue'
import axios from 'axios';
import dashboardHeader from '../components/dashboardHeader.vue';
import { useUserStore } from '../stores/userStore.js';
export default {
    data() {
        return {
            players: [],
            news: [],
            gallery: [],
            userStore: useUserStore(),
        }
    },

    components: {
        sideBar,
        dashboardHeader
    },
    // 
    methods: {
        async fetchPlayers() {
    try {
        const response = await axios.get('http://localhost:3000/api/user/players', {
            withCredentials: true  
        });
        
        this.players = response.data;
        console.log('Fetched players:', response.data);
    } catch (error) {
        console.error('Error fetching players:', error);
    }
},


       
        viewPlayer(player) {
            console.log(player.id);
            this.$router.push(`/user/edit/${player._id}`)
        },

        getNewsList() {
            console.log('Method is called');
            axios.get('http://localhost:3000/api/news')
                .then((response) => {
                    this.news = response.data;

                    this.news.forEach((item) => {
                        const formattedDate = new Date(item.publishedAt).toLocaleString('ru-RU', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                        });
                        item.publishedAt = formattedDate;
                    });

                    console.log(this.news)
                })
                .catch((error) => {
                    console.log('Error while getting news data:', error);
                });
        },

        goToNews(event) {
            const dataIdValue = event.target.dataset.id;
            if (dataIdValue) {
                this.$router.push(`/news/${dataIdValue}`);
            } else {
                console.error('Data ID value is not available.');
            }
        },

        goToGalleryItem(event) {
            const dataIdValue = event.target.dataset.id;
            this.$router.push(`/gallery/${dataIdValue}`)
        },


        editGalleryItem() {
            const dataIdValue = event.target.dataset.id;
            this.$router.push(`/gallery/edit/${dataIdValue}`)
        },


        deleteGallery(galleryItem, index) {
            const itemId = galleryItem._id;

            axios.delete(`http://localhost:3000/gallery/${itemId}`)
                .then((response) => {
                    console.log(response);
                    this.gallery.splice(index, 1);
                })
                .catch((error) => {
                    console.error(error);
                });
        },

        deleteNews(newsId, index) {
            axios.delete(`http://localhost:3000/api/news/${newsId}`)
                .then((response) => {
                    console.log(response);
                    this.news.splice(index, 1);
                })
                .catch((error) => {
                    console.error(error);
                });
        },

        getGallery() {
            axios.get(`http://localhost:3000/gallery`)
                .then((response) => {
                    console.log(response.data)
                    this.gallery = response.data
                })
                .catch((error) => {
                    console.log('Error while get gallery:', error)
                })
        },

        EditNews () {
            const newsId = event.target.dataset.id;

            this.$router.push(`/news/edit/${newsId}`)
        }
    },

    mounted() {
        this.fetchPlayers();
        // this.getNewsList();
        // this.getGallery();
    }
}
</script>
<style scoped>@import url(../assets/styles/coachPage.css);</style>