<template>
    <dashboardHeader />

    <div class="container-sidebar h-full">
        <sideBar />
        <div class="content-box">
            <div class="content-box-title flex justify-between">
                <span>Mannschaften</span>
                <div class="buttons">
                    <button type="button" @click="addTeam"
                    class="text-white mr-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Eine neue hinzufügen
                </button>
                </div>
               
            </div>
            <div class="player-list-container" v-if="teams && teams">
                <div class="players-item" v-for="(team, index) in teams.teams" :key="index">
                    <div class="player-item main-info">
                        <div class="player-item name">
                            {{ team.name }}
                        </div>
                    </div>

                    <div class="player-item age">
                        {{ team.playerCount }}
                    </div>
                    <button :data-id="team.name" @click="seeMember(event)" type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Spieler</button>
                    <button :data-id="team._id" @click="editTeam(event)"   type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Bearbeiten</button>

                    <button type="button" :data-id="team._id" @click="showDeletionPopup(team)"
                        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Löschen</button>
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
                <button class="positive" @click="deleteTeam">Ja</button>
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
            teams: [],
            players: [],
            tempId: '',
            showDeletion: false,
        }
    },

    methods: {
        editTeam () {
            const teamId = event.target.dataset.id;
            this.$router.push(`/editTeam/${teamId}`)
        },
        getTeams() {
            axios.get('http://localhost:3000/api/teams')
                .then((response) => {
                    console.log(response.data)
                    this.teams = response.data
                    console.log(this.teams.teams)
                })
                .catch((error) => {
                    console.log('Error while get teams', error)
                })
        },
       
        addTeam() {
            this.$router.push('/dashboard/teams/add')
        },

       
        deleteTeam(team) {

            axios
                .delete(`http://localhost:3000/api/teams/${this.tempId}`)
                .then((response) => {
                    console.log(response);
                    this.getTeams()
                    this.showDeletion = false
                    //   this.teams = this.teams.filter((t) => t._id !== teamId);
                })
                .catch((error) => {
                    console.error(error);
                });
        },

        seeMember() {
            const dataIdValue = event.target.dataset.id;

            this.$router.push(`/team/${dataIdValue}/list`)
        },
   
        showDeletionPopup (team) {
            this.tempId = team._id;

            this.showDeletion = true;
        },

        closeDeletePopup () {
            this.tempId = '';
            this.showDeletion = false;
        }

    },

    mounted() {
        this.getTeams()
        // this.getPlayers()
    }
}
</script>
<style scoped>@import url(../assets/styles/playersList.css);</style>