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
            <form class="w-full mx-auto mb-6">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Video
                    hochladen:
                </label>
                <input
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help" id="user_avatar" type="file" @change="uploadVideo">
            </form>
            <form class="w-full mx-auto mb-6">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Vorschau:
                </label>
                <input
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help" id="user_avatar" type="file" @change="uploadFile">
            </form>
            <md-editor class="editor" v-model="text" language="en-US" @onChange="onChange" @onUploadImg="onUploadImg" />

            <button type="button" @click="seendDataToDb"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Daten senden</button>

        </div>

    </div>
    <cropImgComponent v-if="showCropImg" :path="tempImgPath"  @cropped-image-uploaded="handleCroppedImageUploaded" />

</template>
  
<script>
import { defineComponent } from "vue";
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import axios from "axios";
import dashboardHeader from '../components/dashboardHeader.vue'
import sideBar from '../components/sideBar.vue'
import MarkdownIt from 'markdown-it';

import cropImgComponent from "../components/cropImgComponent.vue";

export default defineComponent({
    name: "App",
    components: {
        MdEditor,
        dashboardHeader,
        sideBar,
        cropImgComponent

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
            tempImgPath: '',
            showCropImg: false,
            croppedImgPath: '',
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
            console.log('Upload news img')
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
                this.tempImgPath = filePaths[filePaths.length - 1]
                console.log('This Temp Img Patg:', this.tempImgPath)
                this.showCropImg = true;
                // callback(filePaths);
            } catch (error) {
                console.error('Error uploading files:', error);
            }
        },

        handleCroppedImageUploaded(savedCroppedImagePath) {
      console.log('Обрезанное изображение успешно загружено:', savedCroppedImagePath);
       this.text = this.text + `![](${savedCroppedImagePath})`
       this.showCropImg = false;
    },



        async uploadCroppedImage(croppedImagePath) {
            try {
                const response = await fetch(croppedImagePath);
                const blob = await response.blob();

                const form = new FormData();
                form.append('file', blob, 'cropped_image.png');

                const folder = 'videos';
                const uploadUrl = `http://localhost:3000/api/${folder}/upload`;

                const uploadResponse = await axios.post(uploadUrl, form, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                const savedCroppedImagePath = uploadResponse.data.filePath;

                this.text += `<img src="${savedCroppedImagePath}" alt="Cropped Image" />`;

            } catch (error) {
                console.error('Ошибка при сохранении обрезанного изображения на сервере:', error);
            }
        },


        uploadVideo(event) {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('file', file);

            const folder = 'videos';

            axios.post(`http://localhost:3000/api/${folder}/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                const videoUrl = response.data.filePath;
                this.videoLink = videoUrl

                // this.text += `![Video](http://localhost:3000${videoUrl})\n`;
            }).catch(error => {
                console.error('Error uploading video:', error);
            });
        },

        uploadFile(event) {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('file', file);

            const folder = 'news';

            axios.post(`http://localhost:3000/api/${folder}/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                this.previewImg = response.data.filePath
            }).catch(error => {
                console.error('Error uploading file:', error);
            });
        },

        seendDataToDb() {
            axios.post('http://localhost:3000/api/news', {
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
        }
    },

    mounted() {
        console.log(this.$store.state.userData.lastName)
        console.log(this.convertMarkdownToHtml(this.text))
    },




});
</script>
  

<style>
@import url(../assets/styles/addNews.css);
</style>