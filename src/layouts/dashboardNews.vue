<template>
    <dashboardHeader />
    <div class="main-wrap">
        <sideBar />

        <div class="content-box w-100">
            <div class="content-box__title">
               News Editor:
            </div>
            <div class="miniblock-container w-100 h-full">
                
                <div class="content-container w-100 h-full">
                    <div class="preview-table bg-gray-100 w-100 h-full">
                        <div class="preview-table-title coolGray">
                            <span>Nachrichten</span>
                            <button type="button" @click="this.$router.push('/news/add')"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Neu hinzufügen
                            </button>

                        </div>
                        <div class="preview-table-container bg-gray-50 h-full">
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

                                    <button @click="showDeletePopup(newsItem._id, index)" type="button"
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
               
            </div>

        </div>
    </div>

    <div class="popup" v-show="showDeletion">
        <div class="popup-container">
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.094l-4.157-4.104 4.1-4.141-1.849-1.849-4.105 4.159-4.156-4.102-1.833 1.834 4.161 4.12-4.104 4.157 1.834 1.832 4.118-4.159 4.143 4.102 1.848-1.849z"/></svg>            </div>

            <div class="title">Endgültig löschen?</div>
            <div class="buttons">
                <button class="positive" @click="deleteNews">Ja</button>
                <button class="negative" @click="closeDeletePopup">Nein</button>
            </div>
        </div>
    </div>
</template>
<script>
import sideBar from '../components/sideBar.vue'
import axios from 'axios';
import dashboardHeader from '../components/dashboardHeader.vue';
export default {
    data() {
        return {
            players: [],
            news: [],
            gallery: [],
            tempId: '',
            tempIndex: '',
            showDeletion: false
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
                const response = await axios.get('http://localhost:3000/players');
                this.players = Object.freeze(response.data);
                console.log(this.players)
            } catch (error) {
                console.error('Error fetching players:', error);
            }
        },
        viewPlayer(player) {
            console.log(player.id);
            this.$router.push(`/player/edit/${player._id}`)
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
                    // Видаляємо елемент з масиву за його індексом
                    this.gallery.splice(index, 1);
                })
                .catch((error) => {
                    console.error(error);
                });
        },

        deleteNews() {
            axios.delete(`http://localhost:3000/api/news/${this.tempId}`)
                .then((response) => {
                    console.log(response);
                    // Видаляємо елемент з масиву за його індексом
                    this.news.splice(this.tempIndex, 1);
                    this.showDeletion = false;
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
        },

        showDeletePopup (id, index) {
            this.tempId = id;
            this.tempIndex = index;
            this.showDeletion = true;
        },

        closeDeletePopup () {
            this.tempId = '';
            this.tempIndex = '';
            this.showDeletion = false;
        }
    },

    mounted() {
        this.fetchPlayers();
        this.getNewsList();
        this.getGallery();
    }
}
</script>
<style scoped>@import url(../assets/styles/coachPage.css);

.preview-table-container {
    height: 100% !important;
}
</style>