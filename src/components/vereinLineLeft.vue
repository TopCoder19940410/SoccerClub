<template>
    <div class="dropdown-container">
        <div class="dropdown-item" v-for="category in categories" :key="category.category" :class="{ 'active-tab': isActive === category.category }">
            <div class="dropdown-item-name" >
                <!-- Используем router-link, если есть только одна ссылка, иначе просто текст -->
                <router-link v-if="category.pageURLs.length === 1" :to="`/verein/` + category.pageURLs[0]" class="dropdown-item-name-link" @click="setActiveCategory(category.category)">
                    {{ category.category }}
                </router-link>
                <div v-else>
                    {{ category.category }}
                </div>
            </div>
            <div class="dropdown-item-menu" v-show="category.pageURLs.length > 1">
                <!-- Используем router-link внутри v-for, чтобы создать ссылки для каждой страницы -->
                <router-link :to="`/verein/` + url" v-for="url in category.pageURLs" :key="url" class="dropdown-item-menu-link" @click="setActiveCategory(category.category)">
                    {{ spliceLink(url) }}
                </router-link>
            </div>
        </div>
        
        
        <!-- <div class="dropdown-item">
            <div class="dropdown-item-name" :class="{ 'active-tab': isActive === 'Vereinsaktivitäten' }">
                Vereinsaktivitäten
            </div>
            <div class="dropdown-item-menu">
                <router-link to="../vereinsaktivitaeten/partnerschaften" class="dropdown-item-menu-link" @click="isActive = 'Vereinsaktivitäten' ">
                    Partnerschaften
                </router-link>
                <router-link to="../vereinsaktivitaeten/oktoberfest" class="dropdown-item-menu-link"  @click="isActive = 'Vereinsaktivitäten' ">
                    Oktoberfest
                </router-link>
                <router-link to="../vereinsaktivitaeten/vatertagsturnier" class="dropdown-item-menu-link"  @click="isActive = 'Vereinsaktivitäten' ">
                    Vatertagsturnier
                </router-link>
                <router-link to="../vereinsaktivitaeten/ortsteilturnier" class="dropdown-item-menu-link"  @click="isActive = 'Vereinsaktivitäten' ">
                    Ortsteilturnier
                </router-link>
                <router-link to="../vereinsaktivitaeten/weindorf" class="dropdown-item-menu-link"  @click="isActive = 'Vereinsaktivitäten' ">
                    Weindorf
                </router-link>
               
            </div>
        </div>
        <div class="dropdown-item">
            <div class="dropdown-item-name" :class="{ 'active-tab': isActive === 'Vereinsgelände' }">
                Vereinsgelände
            </div>
            <div class="dropdown-item-menu">
                <router-link to="../vereinsgelaende/vereinsheim" class="dropdown-item-menu-link" @click="isActive = 'Vereinsgelände' ">
                    Vereinsheim
                </router-link>
                <router-link to="../vereinsgelaende/sportstaetten" class="dropdown-item-menu-link"  @click="isActive = 'Vereinsgelände' ">
                    Sportstätten
                </router-link>
                <router-link to="../vereinsgelaende/anfahrt" class="dropdown-item-menu-link"  @click="isActive = 'Vereinsgelände' ">
                    Anfahrt
                </router-link>
                <router-link to="../vereinsgelaende/neubau-kunstrasen" class="dropdown-item-menu-link"  @click="isActive = 'Vereinsgelände' ">
                    Neubau Kunstrasen
                </router-link>
               
            </div>
        </div>
        <div class="dropdown-item">
            <router-link to="../vereinsgelaende/mitgliedschaft" class="dropdown-item-name" :class="{ 'active-tab': isActive === 'Mitgliedschaft' }" @click="isActive = 'Mitgliedschaft'">
                Mitgliedschaft
            </router-link>
            
        </div>
        <div class="dropdown-item">
            <router-link to="../vereinsgelaende/ehrenamt" class="dropdown-item-name" :class="{ 'active-tab': isActive === 'Ehrenamt' }" @click="isActive = 'Ehrenamt'">
                Ehrenamt
            </router-link>
            
        </div>
        <div class="dropdown-item">
            <router-link to="../vereinsgelaende/foerderverein" class="dropdown-item-name" :class="{ 'active-tab': isActive === 'Förderverein' }" @click="isActive = 'Förderverein'">
                Förderverein
            </router-link>
            
        </div>
        <div class="dropdown-item">
            <div class="dropdown-item-name" :class="{ 'active-tab': isActive === 'Interaktiv' }">
                Interaktiv
            </div>
            <div class="dropdown-item-menu">
                <router-link to="../interaktiv/rss" class="dropdown-item-menu-link" @click="isActive = 'Interaktiv' ">
                    RSS
                </router-link>
                <router-link to="../interaktiv/downloads" class="dropdown-item-menu-link"  @click="isActive = 'Interaktiv' ">
                    Downloads
                </router-link>
                <router-link to="../interaktiv/presse" class="dropdown-item-menu-link"  @click="isActive = 'Interaktiv' ">
                    Presse
                </router-link>
                <router-link to="../interaktiv/kontakt" class="dropdown-item-menu-link"  @click="isActive = 'Interaktiv' ">
                    Kontakt
                </router-link>
                <router-link to="../interaktiv/suche" class="dropdown-item-menu-link"  @click="isActive = 'Interaktiv' ">
                    Suche
                </router-link>
                <router-link to="../interaktiv/impressum" class="dropdown-item-menu-link"  @click="isActive = 'Interaktiv' ">
                    Impressum
                </router-link>
                <router-link to="../interaktiv/datenschutzerklaerung" class="dropdown-item-menu-link"  @click="isActive = 'Interaktiv' ">
                    Datenschutzerklärung
                </router-link>
               
               
            </div>
        </div> -->
    </div>

    
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {
            isActive: 'Unser',
            categories: [],
        }
    },

    methods: {
        getCategories () {
            axios.get('http://localhost:3000/api/pages/categories')
            .then((response) => {
                this.categories = response.data
                console.log('Categories:', this.categories)
            })
        },

        setActiveCategory(category) {
      this.isActive = category;
    },

        spliceLink(str) {
      if (str && typeof str === 'string' && str.length > 1) {
        return str.toUpperCase();
      }
      return str; 
    },
    },

    created () {
        this.getCategories();
    }
}
</script>
<style scoped>
    .dropdown-container {
        max-width: 100%;
        display: flex;
        justify-content: space-between;
        max-width: 1440px;
        margin: 0 auto;
        margin-bottom: 70px;
        position: absolute;
        top: 0;
        left: 10px;
        flex-direction: column;
        overflow-y: scroll;
        width: 200px;
        min-width: fit-content;
    }

    .dropdown-item {
        position: relative;
        max-width: 200px;
        margin-bottom: 5px;
        padding: 5px;
    }

    

    .dropdown-item-name {
        color: #003333;
        font-family: 'goboldI', sans-serif;
        text-transform: uppercase;
        transition: 0.3s;

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
        left: 0;
        top: 25px;
        display: none;
        transition: 0.3s;
        box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 7px 1px;
        color: #003333;
        font-family: 'metropolis', sans-serif;
        text-transform: uppercase;
        font-size: 14px;
        background-color: #fff;
        width: 100%;
    }

    .dropdown-item:hover {
        background-color: #810423;
        color: #fff
    }
    .dropdown-item:hover .dropdown-item-name {
        background-color: #810423;
        color: #fff
    }

     .dropdown-item.active-tab {
        background-color: #810423;
        color: #fff
    }

     .dropdown-item.active-tab .dropdown-item-name {
        color: #fff;
     }

    .dropdown-item-name.active-tab {
         background-color: #810423;
        color: #fff
    }

    .dropdown-item:hover .dropdown-item-menu{
        display: flex;
        position: absolute;
        z-index: 99999 !important;
        width: fit-content;
    }

   

    @media screen and (max-width: 1680px) {
        .leftside{
            margin-right: 35px;
        }
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








