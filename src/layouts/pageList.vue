<template>
    <dashboardHeader />
    <div class="flex">
        <sideBar />
        <div class="content w-full p-4">
            <div class="title-section flex justify-between" >
                <div class="title text-2xl mb-4">Seiten</div>
                <button class="red-btn" @click="this.$router.push('/dashboard/addVereinPage')">Neu hinzufügen</button>
            </div>



            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                URL
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Erstellt am
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Erstellt von
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in pages"
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                /{{ item.url }}
                            </th>
                            <td class="px-6 py-4">
                                {{ formatDate(item.createdAt) }}
                            </td>
                            <td class="px-6 py-4">
                                Admin
                            </td>
                            
                            <td class="px-6 py-4 text-right">
                                <a href="#" @click="this.$router.push(`/dashboard/pages/edit/${item._id}`)"
                                    class="font-medium mr-4 text-blue-600 dark:text-blue-500 hover:underline">Bearbeiten</a>

                                    <a href="#" @click="showDeletePopup(item._id)"
                                    class="font-medium text-red-600 dark:text-red-500 hover:underline">Löschen</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>


    <div class="popup" v-show="showDeletion">
        <div class="popup-container">
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.094l-4.157-4.104 4.1-4.141-1.849-1.849-4.105 4.159-4.156-4.102-1.833 1.834 4.161 4.12-4.104 4.157 1.834 1.832 4.118-4.159 4.143 4.102 1.848-1.849z"/></svg>            </div>

            <div class="title">Endgültig löschen?</div>
            <div class="buttons">
                <button class="positive" @click="deletePage">Ja</button>
                <button class="negative" @click="closeDeletePopup">Nein</button>
            </div>
        </div>
    </div>
</template>

<script>
import sideBar from '../components/sideBar.vue'
import dashboardHeader from '../components/dashboardHeader.vue';
import axios from 'axios'
export default {
    components: {
        sideBar,
        dashboardHeader
    },

    data() {
        return {
            pages: [],
            showDeletion: false,
            tempId: ''
        }
    },

    methods: {
        getAllPages() {
            axios.get('http://localhost:3000/api/pages/all')
                .then((response) => {
                    console.log(response.data)
                    this.pages = response.data
                })
        },

        formatDate(inputDate) {
            const date = new Date(inputDate);

            const options = {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            };

            const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
            return formattedDate;
        },

        deletePage (id) {
            axios.delete(`http://localhost:3000/api/pages/${this.tempId}`)
            .then((response) => {
                this.getAllPages(); this.showDeletion = false;
            })
        },

        getName (id) {
            console.log(id)
            axios.get(`http://localhost:3000/players/${id}`)
            .then((response) => {
                return response.data
            })
        },

        showDeletePopup (id) {
            this.tempId = id;
            this.showDeletion = true;
        },

        closeDeletePopup () {
            this.tempId = '';
            this.showDeletion = false;
        }
    },

    mounted() {
        this.getAllPages();
    }
}
</script>

<style scoped>
@import url(../assets/styles/pageList.css);
</style>