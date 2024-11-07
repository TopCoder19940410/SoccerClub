<template>
    
    <dashboardHeader />

    <div class="container-sidebar">
        <sideBar />
        <div class="content-box">
            <div class="content-box-title">
                Mannschaft bearbeiten:
            </div>
            <div class="w-25">

                <div class="team-id mb-3">
                    Team ID: {{ teamId }}
                </div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name Mannschaft:</label>
                <input v-model="teamName" type="text" id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Team name" required>

                <label for="countries" class="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">Mannschaftsart:</label>
                <select v-model="type" id="countries"
                    class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Choose a country</option>
                    <option value="male">Herren</option>
                    <option value="female">Juniorinnen</option>
                    <option value="junior">Junioren</option>
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
                    <div class="delete-icon" @click="deleteTeamPhoto">
                        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z" fill-rule="nonzero"/></svg>
                    </div>
                    <img :src="teamPhoto" alt="">
                </div>
            </div>
            <button type="button" @click="sendData"
                class=" mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Speichern</button>



            <div v-show="successPush"
                class=" push p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                role="alert">
                <span class="font-medium">Success changed!</span>
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
            teamId: '',
            teamName: '',
            successPush: false,
            type: '',
            teamPhoto: '',
        }
    },

    methods: {
        getTeam() {
            const teamId = this.$route.params.id

            axios.post(`http://localhost:3000/api/teams/getTeamById`, { id: teamId })
                .then((response) => {
                    this.teamId = response.data.team._id;
                    this.teamName = response.data.team.name
                    this.type = response.data.team.type;
                    this.teamPhoto = response.data.team.teamPhoto
                })
        },

        sendData() {
            const teamId = this.$route.params.id

            axios.put(`http://localhost:3000/api/teams/${teamId}`, {
                name: this.teamName,
                type: this.type,
                teamPhoto: this.teamPhoto,
            })
                .then((response) => {
                    this.successPush = true;
                    setTimeout(() => {
                        this.successPush = false
                    }, 2000)
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
                this.teamPhoto = response.data.filePath
                // Далее можно сохранить путь к файлу в переменной состояния или использовать по своему усмотрению
            }).catch(error => {
                console.error('Error uploading file:', error);
            });
        },

        deleteTeamPhoto () {
            this.teamPhoto = '';
        }
    },

    mounted() {
        this.getTeam()
    }
}
</script>
<style scoped>
@import url(../assets/styles/playersList.css);


.push {
    position: absolute;
    right: 20px;
    top: 20px;
}</style>