<template>
    <div class="dropdown-container">
        <div class="dropdown-item" v-for="item in teams">
            <div class="dropdown-item-name"  :class="{ 'active-tab': isActive === item.name }" @click="isActive = item.name">
                {{ item.name }}
            </div>
            
        </div>
     
        
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {
            isActive: '',
            teams: [],
        }
    },

    methods: {
        getTeamList () {
            axios.get('http://localhost:3000/api/teams')
            .then((response) => {
                this.teams = response.data.teams.filter(item => item.type == 'male')
            })
        }
    },

    mounted () {
        this.getTeamList();
    }
}
</script>
<style scoped>


    .dropdown-container {
        max-width: 100%;
        display: flex;
        align-items: center;
        max-width: 1440px;
        margin: 0 auto;
        justify-content: center;

    }

    .dropdown-item {
        position: relative;
        max-width: 200px;
    }

    .dropdown-item-name {
        color: #003333;
        font-family: 'goboldI', sans-serif;
        text-transform: uppercase;
        transition: 0.3s;
        text-align: center;

    }

    .dropdown-item-name:hover {
        cursor: pointer;
        color: #810423;

    }

    .dropdown-item-name.active-tab {
        color: #cc0033;
    }

    .dropdown-item-menu {
        display: flex;
        flex-direction: column;
        padding: 10px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        position: absolute;
        left: calc(50% - 122px);
        top: 25px;
        display: none;
        transition: 0.3s;
        box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 7px 1px;
        color: #003333;
        font-family: 'metropolis', sans-serif;
        text-transform: uppercase;
        font-size: 14px;
        background-color: #fff;
    }

    .dropdown-item:hover .dropdown-item-menu{
        display: flex;
        position: absolute;
        z-index: 99999 !important;

    }


    @media screen and (max-width: 1460px) {
        .dropdown-container.line {
            padding: 0 20px
        }
    }

    @media screen and (max-width: 1190px) {
        .dropdown-item-menu {
            left: calc(50% - 85px);
        }

        .dropdown-item {
            width: fit-content;
        }


        .dropdown-item-name {
            font-size: 14px;
        }

        .dropdown-container.line {
            flex-wrap: wrap;
            max-width: 400px;
        }

        .dropdown-item {
            margin-bottom: 10px;
        }

        .dropdown-item-menu {
            left: calc(50% - 50px);
        }
    }
</style>








