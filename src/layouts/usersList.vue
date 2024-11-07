<template>
    <dashboardHeader />

    <div class="container-sidebar">
        <sideBar />
        <div class="content-box">
            <div class="content-box-title">
                Benutzer:
                <button type="button" @click="generateLink"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Link erstellen
            </button>
            <div v-if="registrationLink">
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Invite link:</label>
                <input v-model="registrationLink" type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
            </div>
            </div>


            

<div class="relative overflow-x-auto mt-4" v-if="players && players.length > 0">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                   Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Rolle
                </th>
                <th scope="col" class="px-6 py-3">
                    Funktion
                </th>
                <th scope="col" class="px-6 py-3">
                    Aktion
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="player in players">
                <th scope="row" class="px-6 w-25 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ player.firstName }} {{ player.lastName }}
                </th>
                <td class="px-6 py-4 w-25">
                    {{ player.role }}
                </td>
                <td class="px-6 py-4 w-25">
                    {{ player.position }}
                </td>
                <td class="px-1 py-4">
                    <button type="button" @click="viewPlayer(player)" :data-id="player._id"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Bearbeiten</button>
                    <button type="button" @click="showDeletePopup(player._id)" :data-id="player._id"
                        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Löschen</button>
                </td>
            </tr>
            
        </tbody>
    </table>
</div>




            <!-- <div class="player-list-container" v-if="players && players.length > 0">
                <div class="players-item" v-for="(player, index) in players" :key="index">
                    <div class="player-item main-info">
                        <div class="player-item photo">
                            <img v-if="player.avatar" :src="player.avatar" alt="">
                            <div v-if="player.avatar == ''"
                                class="relative avatar w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                <svg class="absolute  w-12 h-12 text-gray-400 -left-1" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="player-item name">
                            {{ player.firstName }} {{ player.lastName }}
                        </div>
                    </div>

                    <div class="player-item age">
                        {{ player.email }}
                    </div>
                    
                    <div class="player-item">
                        {{ player.role }}
                    </div>
                    <div class="player-item">
                        {{ player.position }}
                    </div>
                   
                </div>
            </div> -->
        </div>
    </div>

    <div class="popup" v-show="showDeletion">
        <div class="popup-container">
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.094l-4.157-4.104 4.1-4.141-1.849-1.849-4.105 4.159-4.156-4.102-1.833 1.834 4.161 4.12-4.104 4.157 1.834 1.832 4.118-4.159 4.143 4.102 1.848-1.849z"/></svg>            </div>

            <div class="title">Endgültig löschen?</div>
            <div class="buttons">
                <button class="positive" @click="deletePlayer">Ja</button>
                <button class="negative" @click="closeDeletePopup">Nein</button>
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
            players: [],
            registrationLink: '',
            showDeletion: false,
            tempId: '',
        }
    },

    methods: {
        async fetchPlayers() {
            try {
                const response = await axios.get('http://localhost:3000/users/list');
                this.players = Object.freeze(response.data);
                console.log(this.players)
            } catch (error) {
                console.error('Error fetching players:', error);
            }
        },

        viewPlayer(player) {
            console.log(player.id);
            this.$router.push(`/user/edit/${player._id}`)
        },


        deletePlayer(event) {

            axios.delete(`http://localhost:3000/users/list/${this.tempId}`)
                .then((response) => {
                    console.log('Article successfully deleted');
                    this.fetchPlayers(); 
                    this.$router.push('/users/list');
                    this.showDeletion = false
                })
                .catch((error) => {
                    console.log('Error while deleting data', error);
                });
        },

        generateLink() {
    axios.post('http://localhost:3000/api/invite/generate-invite', { email: 'test', role: 'admin' }, {
        withCredentials: true  
    })
    .then((response) => {
        this.registrationLink = response.data.link;
        console.log(response.data.link);
    })
    .catch((error) => {
        console.error('Error generating link:', error);
    });
},

        showDeletePopup (id) {
            this.showDeletion = true;
            this.tempId = id
            console.log(this.tempId)
        },

        closeDeletePopup () {
            this.showDeletion = false;
            this.tempId = '';
        }
    },

    mounted() {
        this.fetchPlayers()
    }
}
</script>
<style scoped>@import url(../assets/styles/playersList.css);</style>