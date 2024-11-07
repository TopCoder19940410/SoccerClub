<template>
    <dashboardHeader />
    <div v-if="successPush" id="toast-top-right"
        class="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow top-5 right-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
        role="alert">
        <div class="success-icon">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                <path
                    d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z" />
            </svg>
        </div>
        <div class="text-sm font-normal">Article successfully added</div>
    </div>
    <div class="content-container">
        <sideBar />


        <div class="form">


            <div class="form-title text-3xl mb-3">Nachrichten hinzufügen:</div>

            <div class="mb-2 field">
                <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titel</label>
                <input v-model="title" required maxlength="72" type="text" id="base-input"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div v-if="videoLink" class="video-preview flex flex-column">
                <video controls :src="videoLink" width="300px" height="200px"></video>
                <div @click="deleteVideo" class="delete-icon">
                    <svg width="30px" height="30px" fill="red" clip-rule="evenodd" fill-rule="evenodd"
                        stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m20.015 6.506h-16v14.423c0 .591.448 1.071 1 1.071h14c.552 0 1-.48 1-1.071 0-3.905 0-14.423 0-14.423zm-5.75 2.494c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-4.5 0c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-.75-5v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-16.507c-.413 0-.747-.335-.747-.747s.334-.747.747-.747zm4.5 0v-.5h-3v.5z"
                            fill-rule="nonzero" />
                    </svg>
                </div>
            </div>

            <form class="w-full mx-auto mb-6">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Video
                    hochladen:
                </label>
                <input
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help" id="user_avatar" type="file" @change="uploadVideo">
            </form>
            <form class="w-full mx-auto mb-6">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Vorschau auf
                    den Download
                    Bild:
                </label>
                <input
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help" id="user_avatar" type="file" @change="uploadFile">
            </form>
            <div v-if="previewImg" class="video-preview flex flex-column">
                <img :src="previewImg" width="300px" height="200px">
                <div @click="deleteImg" class="delete-icon">
                    <svg width="30px" height="30px" fill="red" clip-rule="evenodd" fill-rule="evenodd"
                        stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m20.015 6.506h-16v14.423c0 .591.448 1.071 1 1.071h14c.552 0 1-.48 1-1.071 0-3.905 0-14.423 0-14.423zm-5.75 2.494c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-4.5 0c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-.75-5v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-16.507c-.413 0-.747-.335-.747-.747s.334-.747.747-.747zm4.5 0v-.5h-3v.5z"
                            fill-rule="nonzero" />
                    </svg>
                </div>
            </div>
            <md-editor class="editor" v-model="text" language="en-US" @onChange="onChange" @onUploadImg="onUploadImg" />

            <button type="button" @click="seendDataToDb"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Daten senden</button>

        </div>


    </div>
</template>
  
<script>
import { defineComponent } from "vue";
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import axios from "axios";
import dashboardHeader from '../components/dashboardHeader.vue'
import sideBar from '../components/sideBar.vue'
import MarkdownIt from 'markdown-it';


export default defineComponent({
    name: "App",
    components: {
        MdEditor,
        dashboardHeader,
        sideBar,

    },
    data() {
        return {
            text: "",
            successPush: false,
            videoLink: '',
            title: '',
            markdownContent: '',
            htmlContent: '',
            author: {},
            publishedAt: '',
            previewImg: '',
        };
    },
    methods: {
        onChange(val) {
            this.htmlContent = this.convertMarkdownToHtml(this.text)
            this.markdownContent = val
            console.log(this.markdownContent)
        },
        //   onUploadImg(files) {
        //     console.log(Array.from(files));
        //   },

        async onUploadImg(files, callback) {
            try {
                const promises = files.map((file) => {
                    const form = new FormData();
                    form.append('file', file);

                    return axios.post('http://localhost:3000/api/news/upload', form, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });
                });

                const responses = await Promise.all(promises);

                const filePaths = responses.map((res) => res.data.filePath);
                callback(filePaths);
            } catch (error) {
                console.error('Error uploading files:', error);
            }
        },

        uploadVideo(event) {
            console.log('Video is called')
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('file', file);

            const folder = 'videos';

            axios.post(`http://localhost:3000/api/${folder}/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                console.log('Video uploaded:', response.data.filePath);
                const videoUrl = response.data.filePath;
                this.videoLink = videoUrl

                console.log(this.videoLink)
                // this.text += `![Video](http://localhost:3000${videoUrl})\n`;
            }).catch(error => {
                console.error('Error uploading video:', error);
            });
        },

        uploadFile(event) {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('file', file);

            const folder = 'news'; // Замените на нужную папку (players, gallery, news)

            axios.post(`http://localhost:3000/api/${folder}/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                console.log('File uploaded:', response.data.filePath);
                this.previewImg = response.data.filePath
                console.log(this.playerImg)
                // Далее можно сохранить путь к файлу в переменной состояния или использовать по своему усмотрению
            }).catch(error => {
                console.error('Error uploading file:', error);
            });
        },

        seendDataToDb() {
            const newsId = this.$route.params.id

            axios.put(`http://localhost:3000/api/news/${newsId}`, {
                title: this.title,
                videoLink: this.videoLink,
                markdownContent: this.markdownContent,
                content: this.htmlContent,
                author: {
                    name: `${this.$store.state.userData.firstName} ${this.$store.state.userData.lastName}`,
                    avatar: this.$store.state.userData.avatar
                },
                publishedAt: new Date(),
                previewImg: this.previewImg

            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    console.log(response)
                    this.successPush = true;
                    setTimeout(() => {
                        this.successPush = false
                    }, 5000)
                })
                .catch((error) => {
                    console.log('Error while sending news data:', error)
                })
        },
        convertMarkdownToHtml(markdownContent) {
            const md = new MarkdownIt();
            let htmlContent = md.render(markdownContent);
            htmlContent = htmlContent.replace(/\n/g, '<br>');
            return htmlContent;
        },


        getNews() {
            const newsId = this.$route.params.id;

            axios.get(`http://localhost:3000/api/news/${newsId}`)
                .then((response) => {
                    console.log(response.data)
                    this.title = response.data.title;
                    this.videoLink = response.data.videoLink
                    this.text = response.data.markdownContent

                })
        },

        deleteVideo() {
            this.videoLink = null;
        },

        deleteImg() {
            this.previewImg = null
        }
    },

    mounted() {
        console.log(this.$store.state.userData.lastName)
        console.log(this.convertMarkdownToHtml(this.text))
        this.getNews()
    },




});
</script>
  

<style scoped>@import url(../assets/styles/addNews.css);

video,
img {
    width: 300px !important;
    height: 200px !important;
}</style>