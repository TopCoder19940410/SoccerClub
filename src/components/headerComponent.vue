<template>
    <div class="header">
        <div class="header-container">
            <a href="/" class="logo">
                <img src="../assets/logo.png" alt="">
            </a>
            <div class="header-menu">
                <a @click="this.$router.push('/news')" class="header-menu_item">
                    Aktuelles
                </a>
                <a @click="this.$router.push('/verein')" class="header-menu_item">
                    Verein
                </a>
                <a @click="this.$router.push('/herren')" class="header-menu_item">
                    Herren
                </a>
                <a @click="this.$router.push('/frauen')" class="header-menu_item">
                    Frauen
                </a>
                <a @click="this.$router.push('/junioren')" class="header-menu_item">
                    Junioren
                </a>
                <a @click="this.$router.push('/sponsoring')" class="header-menu_item">
                    Sponsoring
                    <!--  -->
                </a>
            </div>
            <div class="header-botside_container">
                <div class="botside-item">
                    <span>Suche</span>
                    <svg clip-rule="evenodd" width="22" height="24" fill-rule="evenodd" stroke-linejoin="round"
                        stroke-miterlimit="2" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z"
                            fill-rule="nonzero" />
                    </svg>
                </div>
                <div class="botside-item" @click="openPopup" v-if="this.userStore.isAuthenticated == false">
                    <span>Login</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                        <path
                            d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" />
                    </svg>
                </div>
                <div class="botside-item" @click="$router.push(`/profile/${this.userStore.userId}`)"
                    v-show="userStore.isAuthenticated && userStore.role == 'user'">
                    <span>Profile</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                        <path
                            d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" />
                    </svg>
                </div>
                <div class="botside-item" @click="$router.push('/dashboard')" v-if="userStore.role == 'admin'">

                    <span>Mein FVL</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                        <path
                            d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" />
                    </svg>
                </div>
                <div class="botside-item" @click="logout" v-if="this.userStore.isAuthenticated">
                    <span>Ausloggen</span>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                        clip-rule="evenodd">
                        <path d="M16 2v7h-2v-5h-12v16h12v-5h2v7h-16v-20h16zm2 9v-4l6 5-6 5v-4h-10v-2h10z" />
                    </svg>
                </div>


            </div>

            <div class="mobile-menu" @click="toggleMobile">
                <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z"
                        fill-rule="nonzero" />
                </svg>
            </div>

            <div class="mobile-popup" v-show="isMobile">
                <div class="mobile-popup-container">
                    <div class="close" @click="closeMobileMenu">
                        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
                        </svg>
                    </div>
                    <div class="mobile-item">
                        <a @click="goToNews" class="header-menu_item">
                            Aktuelles
                        </a>
                    </div>
                    <div class="mobile-item">
                        <a @click="goToVereinsfuehrung" class="header-menu_item">
                            Verein
                        </a>
                    </div>
                    <div class="mobile-item">
                        <a @click="goToHerren" class="header-menu_item">
                            Herren
                        </a>
                    </div>
                    <div class="mobile-item">
                        <a @click="goToFrauen" class="header-menu_item">
                            Frauen
                        </a>
                    </div>
                    <div class="mobile-item">
                        <a @click="goToJunioren" class="header-menu_item">
                            Junioren
                        </a>
                    </div>
                    <div class="mobile-item">
                        <a @click="goToSponsoring" class="header-menu_item">
                            Sponsoring
                            <!--  -->
                        </a>
                    </div>
                    <div class="mobile-item">
                        <a @click="goToSponsoring" class="header-menu_item">
                            Search
                            <!--  -->
                        </a>
                    </div>
                    <div class="mobile-item" @click="openPopup" v-if="this.userStore.isAuthenticated == false">
                        <span>Login</span>
                    </div>
                    <div @click="logout" class="mobile-item" v-if="this.userStore.isAuthenticated == true">
                        <span>Logout</span>
                    </div>

                </div>
            </div>



        </div>
    </div>
</template>
<script>
import axios from 'axios';
import Cookies from 'js-cookie';
import { useUserStore } from '../stores/userStore.js';
import { useRoute } from 'vue-router';
export default {
    data() {
        return {
            isMobile: false,
            userStore: useUserStore(),
        }
    },
    methods: {
        openPopup() {
            this.$parent.showPopup = true;

        },


        async logout() {
            await axios.post('http://localhost:3000/api/auth/logout', {}, { withCredentials: true })
                .then((reponse) => {
                    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
                    window.location.href = '/'
                })
        },

        toggleMobile() {
            this.isMobile = true;
        },

        closeMobileMenu() {
            this.isMobile = false;
        },
        goToNews() {
            this.$router.push('/news')
            this.isMobile = false;

        },
        goToVereinsfuehrung() {
            this.$router.push('/verein/unser-verein/vereinsfuehrung')
            this.isMobile = false;

        },

        goToHerren() {
            this.$router.push('/herren')
            this.isMobile = false;

        },


        goToFrauen() {
            this.$router.push('/frauen')
            this.isMobile = false;

        },

        goToJunioren() {
            this.$router.push('/junioren')
            this.isMobile = false;

        },

        goToSponsoring() {
            this.$router.push('/sponsoring')
            this.isMobile = false;

        }
    },

    mounted() {
        console.log(this.userStore)
    },


}
</script>
<style>
.header {
    border-bottom: 1px solid #cccccc;
    font-family: 'dCondensed', sans-serif;
    margin-bottom: 166px !important;

}

.header-container {
    position: relative;
    max-width: 1440px;
    margin: 0 auto;
    padding-top: 85px;
    padding-bottom: 30px;

}

.logo {
    position: absolute;
    height: 150px;
    top: calc(50% - 14px);
}

.logo::before {
    content: " ";
    display: flex;
    height: 10px;
    width: 92%;
    background-color: #fff;
    top: 80px;
    left: 6px;
    position: absolute;
    z-index: 0;
}

.logo img {
    height: 100%;
    position: relative;
}

.header-menu {
    max-width: 800px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
}

.header-menu a {
    font-size: 22px;
    text-decoration: none;
    color: #003333;
}

.header-botside_container {
    position: absolute;
    right: 0;
    bottom: -60px;
    display: flex;
    align-items: center;
    padding: 20px 30px;
    box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.27);
    -webkit-box-shadow: 2px 8px 9px 0.5px rgba(0, 0, 0, 0.17);
    -moz-box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.27);
    font-family: 'metropolis', sans-serif;
    font-size: 14px;
    text-transform: uppercase;
}

.botside-item {
    display: flex;
    align-items: center;
    padding-right: 7.5px;
}

.botside-item:hover {
    cursor: pointer;
}

.botside-item:first-child {
    padding-right: 7.5px;
    border-left: 0;
}


.botside-item {
    padding-left: 7.5px;
    border-left: 1px solid #cccccc;
}

.botside-item span {
    margin-right: 8px;
    color: #003333
}

.botside-item svg {
    fill: #003333;
}

.header-menu a {
    cursor: pointer;
}

.mobile-menu {
    display: none;
    width: 30px;
    height: 30px;
}

.mobile-menu svg {
    width: 100%;
    height: 100%;
}

.mobile-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    padding: 20px;
    color: #003333;
    font-size: 24px;
    background-color: #fff;
    z-index: 199999;
}

.mobile-popup-container {
    width: 100%;
    padding-top: 20px;
    position: relative;
    z-index: 3;
}

.close {
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 5;
    width: 30px;
    height: 30px;
}




.mobile-item {
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 51, 51, 0.4);
    width: 100%
}

@media screen and (max-width: 1470px) {
    .header-botside_container {
        right: 20px;
    }
}


@media screen and (max-width: 1125px) {
    .header-menu {
        justify-content: flex-end;
    }

    .header-menu a {
        margin: 0 30px;
    }
}

@media screen and (max-width: 1125px) {
    .header-menu a {
        margin: 0 20px;
    }






}


@media screen and (max-width: 900px) {
    .header {
        margin-bottom: 80px !important;
    }
}

@media screen and (max-width: 750px) {
    .logo {
        height: 100px;
        top: calc(50% - -17px);
    }

    .logo::before {
        top: 50px;

    }
}

@media screen and (max-width: 710px) {
    .header-menu a {
        margin: 0 15px;
        font-size: 20px;
    }

    .header-botside_container {
        font-size: 14px;
    }

    .header-container {
        padding-top: 30px;
    }

    .logo {
        height: 100px;
        top: calc(50% - 11px);
    }
}

@media screen and (max-width: 625px) {
    .header-menu {
        display: none;
    }

    .header-botside_container {
        display: none;
    }

    .mobile-menu {
        display: flex;
        justify-content: flex-end;
    }

    .logo {
        position: relative;
        height: 100%;
        display: flex;
        width: 100px;
    }

    .header-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 20px;
        border: 0;
    }

    .header {
        border: 0;
        padding-top: 15px;
    }

}

@media screen and (max-width: 505px) {
    .logo {
        position: relative;
        height: 80px;
        display: flex;
        width: 80px;
    }

    .header {
        margin-bottom: 50px;
    }
}
</style>