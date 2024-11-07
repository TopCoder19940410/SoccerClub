<template>
    <div v-if="successPush" id="toast-top-right"
        class="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow top-5 right-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
        role="alert">
        <div class="success-icon">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                <path
                    d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z" />
            </svg>
        </div>
        <div class="text-sm font-normal">Team successfully added</div>
    </div>
    <dashboardHeader />

    <div class="container-sidebar h-full">
        <sideBar />
        <div class="content-box">
            <div class="content-box-title">
                Neues Team hinzufügen:

            </div>
            <div class="player-list-container">
                <div class="mb-2 field">
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name der
                        Mannschaft</label>
                    <input v-model="name" type="text" id="base-input"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <select v-model="type" id="countries"
                        class="bg-gray-50 mt-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose a country</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="junior">Junior</option>
                    </select>

                    <div class="mt-4 mb-2 photo-player items-center justify-center w-full">
                        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                           Mannschaftsbild:
                        </label>

                        <label for="dropzone-file"
                            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Bild hier hochladen</span></p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG oder GIF (MAX. 800x400px)
                                </p>
                            </div>
                            <input ref="fileInput" id="dropzone-file" type="file" @change="uploadFile" class="hidden" />
                            <div class="info-photo" v-if="playerImg">
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z"/></svg>
                            </div>
                        </label>
                    </div>
                    <div class="team-photo-preview" v-show="teamPhoto">
                        <img :src="teamPhoto" alt="">
                    </div>

                </div>
                <button type="button" @click="createNew"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Neu
                    hinzufügen
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import dashboardHeader from '../components/dashboardHeader.vue';
import sideBar from '../components/sideBar.vue'

import axios from 'axios';
export default {
    components: {
        dashboardHeader,
        sideBar
    },
    data() {
        return {
            teams: [],
            name: '',
            successPush: false,
            type: '',
            teamPhoto: '',
        }
    },

    methods: {
        createNew() {
            axios.post('http://localhost:3000/api/teams', {
                name: this.name,
                type: this.type,
                teamPhoto: this.teamPhoto,
            })
                .then((response) => {
                    console.log(response)
                    this.successPush = true;
                    setTimeout(() => {
                        this.successPush = false
                    }, 3000);
                    this.$router.push('/dashboard/teams')
                })
                .catch((error) => {
                    console.log('Error while creating team', error)
                })
        },

        uploadFile(event) {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('file', file);

            const folder = 'players'; // Замените на нужную папку (players, gallery, news)

            axios.post(`http://localhost:3000/api/${folder}/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                console.log('File uploaded:', response.data.filePath);
                this.teamPhoto = response.data.filePath
                console.log(this.playerImg)
                // Далее можно сохранить путь к файлу в переменной состояния или использовать по своему усмотрению
            }).catch(error => {
                console.error('Error uploading file:', error);
            });
        },
    }
}
</script>
<style scoped>@import url(../assets/styles/playersList.css);</style>