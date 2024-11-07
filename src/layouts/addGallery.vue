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
        <div class="text-sm font-normal">Gallery item successfully added</div>
    </div>
    <div class="content-container">
        <sideBar />


        <div class="form">


            <div class="form-title text-3xl mb-3">Fügen Sie ein Galerieelement hinzu:</div>

            <div class="mb-2 field">
                <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titel</label>
                <input v-model="title" required maxlength="100" type="text" id="base-input"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div class="mb-2 field">
                <label for="base-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Beschreibung</label>
                <input v-model="description" required maxlength="100" type="text" id="base-input"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>

            <form class="w-full mx-auto mb-6">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Vorschau auf den Download
                    Bild:
                </label>
                <input
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help" id="user_avatar" type="file" @change="uploadPreview">

            </form>
            <form class="w-full mx-auto mb-6">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Hochladen
                    Dateien:
                </label>
                <input
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help" id="user_avatar" type="file" @change="uploadMedia">

            </form>
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Wählen Sie
                Option</label>
            <select id="countries"
                v-model="team"
                class="bg-gray-50 border mb-6 select-input border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose a team</option>
                <option value="Herren">Herren</option>
                <option value="Frauen">Frauen</option>
                <option value="Junioren">Junioren</option>
            </select>
            <div class="preview-content">
                <div class="preview-content-title">
                    Inhaltsvorschau:
                </div>
                <div class="preview-content-container">
                    <div class="img-container">
                        <template v-for="(video, index) in videos" :key="index">
                            <div class="preview-images">
                                <video :src="video" :data-id="index" alt="Preview Image" class="preview-image"></video>
                                <div class="delete-media" @click="deleteVideo(index)">
                                    <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round"
                                        stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="m20.015 6.506h-16v14.423c0 .591.448 1.071 1 1.071h14c.552 0 1-.48 1-1.071 0-3.905 0-14.423 0-14.423zm-5.75 2.494c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-4.5 0c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-.75-5v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-16.507c-.413 0-.747-.335-.747-.747s.334-.747.747-.747zm4.5 0v-.5h-3v.5z"
                                            fill-rule="nonzero" />
                                    </svg>
                                </div>
                            </div>
                        </template>
                        <template v-for="(image, index) in images" :key="index">
                            <div class="preview-images">
                                <img :src="image" :data-id="index" alt="Preview Image" class="preview-image" />
                                <div class="delete-media" @click="deleteImage(index)">
                                    <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round"
                                        stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="m20.015 6.506h-16v14.423c0 .591.448 1.071 1 1.071h14c.552 0 1-.48 1-1.071 0-3.905 0-14.423 0-14.423zm-5.75 2.494c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-4.5 0c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-.75-5v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-16.507c-.413 0-.747-.335-.747-.747s.334-.747.747-.747zm4.5 0v-.5h-3v.5z"
                                            fill-rule="nonzero" />
                                    </svg>
                                </div>
                            </div>
                        </template>

                    </div>

                </div>

            </div>



            <button type="button" @click="sendContent"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Senden Sie
                Daten</button>

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
import sideBar from "../components/sideBar.vue";
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
            title: '',
            team: null,
            previewImg: '',
            images: [],
            videos: [],
            description: '',
            successPush: false,
            showCropImg: false,
            tempImgPath: '',

        };
    },
    methods: {

        deleteImage(index) {
            this.images.splice(index, 1);
        },
        deleteVideo(index) {
            this.videos.splice(index, 1);
        },

        async onUploadImg(files, callback) {
            try {
                const promises = files.map((file) => {
                    const form = new FormData();
                    form.append('file', file);

                    return axios.post('http://localhost:3000/api/media/upload', form, {
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

        uploadPreview(event) {
            console.log('Video is called')
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('file', file);

            const folder = 'media';

            axios.post(`http://localhost:3000/api/${folder}/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                console.log('Video uploaded:', response.data.filePath);
                const videoUrl = response.data.filePath;
                this.previewImg = videoUrl

                console.log(this.images)
                // this.text += `![Video](http://localhost:3000${videoUrl})\n`;
            }).catch(error => {
                console.error('Error uploading video:', error);
            });
        },

        handleCroppedImageUploaded(savedCroppedImagePath) {
            this.images.push(savedCroppedImagePath)
      this.showCropImg = false;
    },



        uploadMedia(event) {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('file', file);

            const folder = 'media';

            const allowedVideoExtensions = ['mp4', 'avi', 'mov', 'wmv', 'mkv'];

            const fileExtension = file.name.split('.').pop().toLowerCase();

            if (allowedVideoExtensions.includes(fileExtension)) {
                axios.post(`http://localhost:3000/api/${folder}/upload`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(response => {
                    const videoUrl = response.data.filePath;
                    this.videos.push(videoUrl);

                }).catch(error => {
                    console.error('Error uploading video:', error);
                });
            } else {
                axios.post(`http://localhost:3000/api/${folder}/upload`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(response => {
                    const imageUrl = response.data.filePath;
                    this.tempImgPath = imageUrl
                    // this.images.push(imageUrl);
                    this.showCropImg = true;

                }).catch(error => {
                    console.error('Error uploading image:', error);
                });
            }
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


        sendContent() {
            axios.post('http://localhost:3000/gallery/', {
                title: this.title,
                team: this.team,
                previewImg: this.previewImg,
                images: this.images,
                videos: this.videos,
                description: this.description,
            },)
            .then((response) => {
                console.log(response)
                this.successPush = true
                setTimeout(() => {
                    this.successPush = false
                }, 5000);
            })
            .catch((error) => {
                console.log('Erorr uploading video', error)
            })
        }


    },

    mounted() {
        console.log(this.$store.state.userData.lastName)
    },




});
</script>
  

<style>@import url(../assets/styles/addGallery.css);</style>