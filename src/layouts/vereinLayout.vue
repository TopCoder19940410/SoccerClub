<template>
    <div>
        <headerComponent />
        <div class="wrap">
            <vereinLine class="top-line"/>
        <vereinLineLeft class="left-line" />
            <div class=" content-box">
                <div class="leftside" v-if="data.htmlContent?.leftside">
                    <template v-for="item in data.htmlContent.leftside">
                        <div :class="item.class" v-if="item.tag === 'img' && item.imgPath">
                            <img :src="item.imgPath" :class="item.class" alt="Image">
                        </div>
                        <div :class="item.class" v-else-if="item.tag" v-html="item.text"></div>
                    </template>
                </div>
                
                
    
                <div class="rightside" v-if="data.htmlContent && data.htmlContent.rightside">
                    <div class="block-container" v-for="item in data.htmlContent.rightside">
                        <div class="title" v-html='item[0].title'></div>
                        <div class="content">
                            <div v-for="(content, index) in item" :key="index">
                                <!-- Создаем блок с текстом и классом из объекта -->
                                <div v-if="content.tag === 'paragraph'" class="paragraph">
                                    {{ content.text }}
                                </div>

                                <div v-if="content.tag === 'img'" class="right-img">
                                    <img :src="content.imgPath" alt="Right block image">
                                </div>
                                <!-- Создаем блок с текстом, тегом и классом из объекта -->
                                <div v-else-if="content.tag === 'title'" :class="content.class">
                                    {{ content.text }}
                                </div>
                                <!-- Добавьте другие условия для других тегов, если это необходимо -->
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
       
        <footerComponent />
    </div>
</template>

<script>
import axios from 'axios';
import headerComponent from '../components/headerComponent.vue';
import footerComponent from '../components/footerComponent.vue';
import vereinLine from '../components/vereinLine.vue';
import vereinLineLeft from '../components/vereinLineLeft.vue'



export default {
    components: {
        headerComponent,
        footerComponent,
        vereinLineLeft,

       
    },
    data () {
        return {
            data: {},
        };
    },
    methods: {
        async fetchData(name) {
            try {
                const response = await axios.get(`http://localhost:3000/api/pages/url/${name}`);
                this.data = response.data;
            } catch (error) {
                console.error(error);
            }
        },
        async fetchFirstPage() {
            try {
                const response = await axios.get('http://localhost:3000/api/pages/all');
                const firstPage = response.data[0];
                console.log('Pages', response.data)
                if (firstPage) {
                    this.fetchData(firstPage.url);
                }
            } catch (error) {
                console.error(error);
            }
        },
    },
    watch: {
        $route(to, from) {
            // Проверяем, есть ли параметр name в URL
            if (to.params.name) {
                this.fetchData(to.params.name);
            } else {
                // Если параметр name отсутствует, делаем запрос для самой первой страницы
                this.fetchFirstPage();
            }
        },
    },
    mounted() {
        // Вызываем fetchData или fetchFirstPage при инициализации компонента
        if (this.$route.params.name) {
            this.fetchData(this.$route.params.name);
        } else {
            this.fetchFirstPage();
        }
    },
};
</script>

<style scoped>
@import url(../assets/styles/vereinUniversal.css);
</style>