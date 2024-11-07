<template>
    <headerComponent />
    <div class="dropdown-container line">
        <div class="dropdown-item" v-for="(item, index) in teams">
            <div class="dropdown-item-name" :data-index="index" :data-teamName="item.name"
                :class="{ 'active-tab': isActive === item.name }" @click="changeActive(item.name, index)">
                {{ item.name }}
            </div>

        </div>


    </div>
    <div class="main-container">
        <div class="our-team">
            <div class="ot-title" v-if="activeTeamImg">
                Our team
            </div>
            <div class="team-photo" v-if="activeTeamImg">
                <img :src="activeTeamImg" alt="">
            </div>


            <div class="players-container" v-if="goalkeeperPlayers">
                <div class="position-section" >
                    <div class="position-title" v-if="goalkeeperPlayers">
                        Torwart
                    </div>
                    <div class="cards-containers">
                        <div v-for="player in goalkeeperPlayers" class="player-card">
                          <div class="card-inner">
                            <!-- Front side of the card with the player's image -->
                            <div class="card-front">
                              <img :src="player.photo" alt="">
                              <div class="player-name">
                                {{ player.firstName }} {{ player.lastName }}
                              </div>
                            </div>
                    
                            <div class="card-back">
                                <div class="text-item">
                                    <div class="text-container">
                                        <div class="text-title">
                                            Erster Name:
                                        </div>
                                        <div class="text-content">
                                            {{ player.firstName }}
                                        </div>
                                    </div>

                                    <div class="text-container">
                                        <div class="text-title">
                                            Nachname:
                                        </div>
                                        <div class="text-content">
                                            {{ player.lastName }}
                                        </div>
                                    </div>
                                </div>

                                <div class="text-item">
                                    <div class="text-container">
                                        <div class="text-title">
                                            Geburtsdatum:
                                        </div>
                                        <div class="text-content">
                                            {{ formatReleaseDate(player.dateOfBirth) }}
                                        </div>
                                    </div>

                                    <div class="text-container">
                                        <div class="text-title">
                                            Position:
                                        </div>
                                        <div class="text-content">
                                            {{ player.position }}
                                        </div>
                                    </div>
                                </div>

                                <div class="text-item">
                                    <div class="text-container">
                                        <div class="text-title">
                                            Höhe:
                                        </div>
                                        <div class="text-content">
                                            {{ player.height }}
                                        </div>
                                    </div>

                                    <div class="text-container">
                                        <div class="text-title">
                                            Gewicht:
                                        </div>
                                        <div class="text-content">
                                            {{ player.weight }}
                                        </div>
                                    </div>
                                </div>

                                <div class="text-item">
                                    <div class="text-container">
                                        <div class="text-title">
                                            Staatsangehörigkeit:
                                        </div>
                                        <div class="text-content">
                                            {{ player.nationality }}
                                        </div>
                                    </div>

                                    <div class="text-container">
                                        <div class="text-title">
                                            Stadt:
                                        </div>
                                        <div class="text-content">
                                            {{ player.city }}
                                        </div>
                                    </div>
                                </div>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                </div>

                <div class="position-section" >
                    <div class="position-title" v-if="defenderPlayers">
                        ABWEHR
                    </div>
                    <div class="cards-containers">
                        <div v-for="player in defenderPlayers" class="player-card">
                          <div class="card-inner">
                            <!-- Front side of the card with the player's image -->
                            <div class="card-front">
                              <img :src="player.photo" alt="">
                              <div class="player-name">
                                {{ player.firstName }} {{ player.lastName }}
                              </div>
                            </div>
                    
                            <div class="card-back">
                                <div class="text-item">
                                    <div class="text-container">
                                        <div class="text-title">
                                            Erster Name:
                                        </div>
                                        <div class="text-content">
                                            {{ player.firstName }}
                                        </div>
                                    </div>

                                    <div class="text-container">
                                        <div class="text-title">
                                            Nachname:
                                        </div>
                                        <div class="text-content">
                                            {{ player.lastName }}
                                        </div>
                                    </div>
                                </div>

                                <div class="text-item">
                                    <div class="text-container">
                                        <div class="text-title">
                                            Geburtsdatum:
                                        </div>
                                        <div class="text-content">
                                            {{ formatReleaseDate(player.dateOfBirth) }}
                                        </div>
                                    </div>

                                    <div class="text-container">
                                        <div class="text-title">
                                            Position:
                                        </div>
                                        <div class="text-content">
                                            {{ player.position }}
                                        </div>
                                    </div>
                                </div>

                                <div class="text-item">
                                    <div class="text-container">
                                        <div class="text-title">
                                            Höhe:
                                        </div>
                                        <div class="text-content">
                                            {{ player.height }}
                                        </div>
                                    </div>

                                    <div class="text-container">
                                        <div class="text-title">
                                            Gewicht:
                                        </div>
                                        <div class="text-content">
                                            {{ player.weight }}
                                        </div>
                                    </div>
                                </div>

                                <div class="text-item">
                                    <div class="text-container">
                                        <div class="text-title">
                                            Staatsangehörigkeit:
                                        </div>
                                        <div class="text-content">
                                            {{ player.nationality }}
                                        </div>
                                    </div>

                                    <div class="text-container">
                                        <div class="text-title">
                                            Stadt:
                                        </div>
                                        <div class="text-content">
                                            {{ player.city }}
                                        </div>
                                    </div>
                                </div>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                </div>

                <div class="position-section" >
                    <div class="position-title" v-if="attackerPlayers">
                        ABWEHR
                    </div>
                    <div class="cards-containers">
                        <div v-for="player in attackerPlayers" class="player-card">
                          <div class="card-inner">
                            <!-- Front side of the card with the player's image -->
                            <div class="card-front">
                              <img :src="player.photo" alt="">
                              <div class="player-name">
                                {{ player.firstName }} {{ player.lastName }}
                              </div>
                            </div>
                    
                            <div class="card-back">
                                <div class="text-item">
                                    <div class="text-container">
                                        <div class="text-title">
                                            Erster Name:
                                        </div>
                                        <div class="text-content">
                                            {{ player.firstName }}
                                        </div>
                                    </div>

                                    <div class="text-container">
                                        <div class="text-title">
                                            Nachname:
                                        </div>
                                        <div class="text-content">
                                            {{ player.lastName }}
                                        </div>
                                    </div>
                                </div>

                                <div class="text-item">
                                    <div class="text-container">
                                        <div class="text-title">
                                            Geburtsdatum:
                                        </div>
                                        <div class="text-content">
                                            {{ formatReleaseDate(player.dateOfBirth) }}
                                        </div>
                                    </div>

                                    <div class="text-container">
                                        <div class="text-title">
                                            Position:
                                        </div>
                                        <div class="text-content">
                                            {{ player.position }}
                                        </div>
                                    </div>
                                </div>

                                <div class="text-item">
                                    <div class="text-container">
                                        <div class="text-title">
                                            Höhe:
                                        </div>
                                        <div class="text-content">
                                            {{ player.height }}
                                        </div>
                                    </div>

                                    <div class="text-container">
                                        <div class="text-title">
                                            Gewicht:
                                        </div>
                                        <div class="text-content">
                                            {{ player.weight }}
                                        </div>
                                    </div>
                                </div>

                                <div class="text-item">
                                    <div class="text-container">
                                        <div class="text-title">
                                            Staatsangehörigkeit:
                                        </div>
                                        <div class="text-content">
                                            {{ player.nationality }}
                                        </div>
                                    </div>

                                    <div class="text-container">
                                        <div class="text-title">
                                            Stadt:
                                        </div>
                                        <div class="text-content">
                                            {{ player.city }}
                                        </div>
                                    </div>
                                </div>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                </div>

                <div class="position-section" >
                    <div class="position-title" v-if="trainersArr">
                        TRAINER
                    </div>
                    <div class="cards-containers">
                        <div v-for="player in trainersArr" class="player-card">
                          <div class="card-inner">
                            <!-- Front side of the card with the player's image -->
                            <div class="card-front">
                              <img :src="player.photo" alt="">
                              <div class="player-name">
                                {{ player.firstName }} {{ player.lastName }}
                              </div>
                            </div>
                    
                            <div class="card-back">
                                <div class="text-item">
                                    <div class="text-container">
                                        <div class="text-title">
                                            Erster Name:
                                        </div>
                                        <div class="text-content">
                                            {{ player.firstName }}
                                        </div>
                                    </div>

                                    <div class="text-container">
                                        <div class="text-title">
                                            Nachname:
                                        </div>
                                        <div class="text-content">
                                            {{ player.lastName }}
                                        </div>
                                    </div>
                                </div>

                                <div class="text-item">
                                    <div class="text-container">
                                        <div class="text-title">
                                            Geburtsdatum:
                                        </div>
                                        <div class="text-content">
                                            {{ formatReleaseDate(player.dateOfBirth) }}
                                        </div>
                                    </div>

                                    <div class="text-container">
                                        <div class="text-title">
                                            Position:
                                        </div>
                                        <div class="text-content">
                                            {{ player.position }}
                                        </div>
                                    </div>
                                </div>

                                <div class="text-item">
                                    <div class="text-container">
                                        <div class="text-title">
                                            Höhe:
                                        </div>
                                        <div class="text-content">
                                            {{ player.height }}
                                        </div>
                                    </div>

                                    <div class="text-container">
                                        <div class="text-title">
                                            Gewicht:
                                        </div>
                                        <div class="text-content">
                                            {{ player.weight }}
                                        </div>
                                    </div>
                                </div>

                                <div class="text-item">
                                    <div class="text-container">
                                        <div class="text-title">
                                            Staatsangehörigkeit:
                                        </div>
                                        <div class="text-content">
                                            {{ player.nationality }}
                                        </div>
                                    </div>

                                    <div class="text-container">
                                        <div class="text-title">
                                            Stadt:
                                        </div>
                                        <div class="text-content">
                                            {{ player.city }}
                                        </div>
                                    </div>
                                </div>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
            </div>
            <!-- <div class="players-container" v-if="players && players.length > 0">
                <div class="player-item" v-for="(player, index) in players" :key="index">
                    <img :src="player.photo" :alt="`${player.firstName} ${player.lastName}`">
                    <div class="player-info">
                        <div class="player-name">
                            {{ player.firstName }} {{ player.lastName }}
                        </div>
                        <div class="player-position">
                            {{ player.position }}
                        </div>
                    </div>
                    <img v-if="activeTeamImg" :src="activeTeamImg" alt="">
                </div>
            </div> -->

            <div class="result-container">
                <div class="ot-title">
                    Our result
                </div>
                <div id="widget1"></div>
            </div>




        </div>

    </div>
    <socialMedia />

    <footerComponent />
</template>
<script>
import headerComponent from '../components/headerComponent.vue'
import footerComponent from '../components/footerComponent.vue'
import socialMedia from '../components/socialMedia.vue';
import axios from 'axios';

export default {
    data() {
        return {
            players: [],

            teams: [],
            isActive: '',
            activeTeamImg: '',
            activeTeam: [],
            goalkeeperPlayers: [],
            defenderPlayers: [],
            attackerPlayers: [],
            trainers: [],
            trainersArr: [],


        }
    },
    components: {
        headerComponent,
        footerComponent,
        socialMedia,
    },

    methods: {
        getPlayers() {
            axios.get('http://localhost:3000/users/list')
                .then((response) => {
                    const players = response.data.filter(player => player.team === this.isActive && player.role === 'User');
                    const trainers = response.data.filter(player => player.team === this.isActive && player.role === 'trainer');
                    const goalkeepers = players.filter(player => ['Torwart'].includes(player.position));

                    const defenders = players.filter(player => ['Abwehrspieler', 'Innenverteidiger', 'Außenverteidiger', 'Mittelfeldspieler', 'Defensiver Mittelfeldspieler', 'Zentraler Mittelfeldspieler', 'Offensiver Mittelfeldspieler'].includes(player.position));
                    const attackers = players.filter(player => ['Stürmer', 'Flügelstürmer', 'Mittelstürmer'].includes(player.position));

                    // Теперь у вас есть отфильтрованные списки по категориям
                    console.log('Вратари:', goalkeepers);
                    console.log('Защитники:', defenders);
                    console.log('Нападающие:', attackers);

                    // Присвойте значения переменным класса или другим свойствам по необходимости
                    this.goalkeeperPlayers = goalkeepers;
                    this.defenderPlayers = defenders;
                    this.attackerPlayers = attackers;
                    this.trainersArr = trainers

                    console.log('Players:', this.goalkeeperPlayers);
                })
                .catch((error) => {
                    console.error('Ошибка при получении списка игроков:', error);
                });
        },


        getTeamList() {
            axios.get('http://localhost:3000/api/teams')
                .then((response) => {
                    this.teams = response.data.teams.filter(item => item.type == 'junior')
                    this.activeTeam = this.teams[0]
                    this.isActive = this.teams[0].name
                    this.activeTeamImg = this.teams[0].teamPhoto
                })
        },

        changeActive(name, index) {
            this.isActive = name;
            this.activeTeam = this.teams[index].name
            this.activeTeamImg = this.teams[index].teamPhoto
            this.getPlayers();

            console.log('Defenders', this.defenderPlayers)

        },

        formatReleaseDate(date) {
            const dateObject = new Date(date);

            if (!isNaN(dateObject.getTime())) {
                const year = dateObject.getFullYear();
                const month = String(dateObject.getMonth() + 1).padStart(2, '0');
                const day = String(dateObject.getDate()).padStart(2, '0');

                return `${year}-${month}-${day}`;
            } else {
                return 'Некорректная дата';
            }
        },




    },



    mounted() {

        const headScript = document.createElement('script');
        headScript.type = 'text/javascript';
        headScript.src = 'https://www.fussball.de/static/layout/fbde2/egm//js/widget2.js';
        document.head.appendChild(headScript);

        // Додаємо скрипт із вмістом у тег <body>
        const bodyScript = document.createElement('script');
        bodyScript.type = 'text/javascript';
        bodyScript.innerHTML = `new fussballdeWidgetAPI().showWidget('widget1', '02NU8PI6QO000000VUM1DNQBVT4QHLI2');`;
        document.body.appendChild(bodyScript);


        this.getTeamList();
        this.getPlayers();
        console.log('Teams', this.teams)

    },

    created() {
        this.getTeamList();
        this.getPlayers();
        console.log('Teams', this.teams)

    }

}
</script>
<style scoped>
@import url('../assets/styles/herrenPage.css');
</style>