<template>
    <dashboardHeader />
    <div v-if="successPush"
        class="push p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
        role="alert">
        The data was successfully changed
    </div>

    <div v-if="failPush" class="push p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
        role="alert">
        <span class="font-medium">Error!</span> Check the data you have entered.
    </div>
    <div class="popup" v-if="showPopup">
        <div class="popup-container">
            <div class="title mb-3">Dokument hinzufugen:</div>
            <div class="w-full mb-3">
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titel:</label>
                <input v-model="documentTitle" type="text" id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Title of document" required>
            </div>
            <div class="flex mb-3 items-center justify-center w-full">
                <label for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to
                                upload</span> or drag and drop</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400"></p>
                    </div>
                    <input id="dropzone-file" @change="uploadFile" type="file" class="hidden" />
                </label>
            </div>

            <pdf-viewer :src="pdfSrc" :isLoading="isLoading" @loaded="onDocumentLoad"/>

            <div class="url mb-3" v-if="documentUrl">
                Current File: {{ documentUrl }}
            </div>
            <div class="buttons">
                <button @click="sendData" type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg mr-3 text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Speichern</button>

                <button @click="closePopup" type="button"
                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Abbrechen</button>

            </div>

        </div>
    </div>
    <div class="container-sidebar">
        <sideBar />
        <div class="content-box">
            <div class="content-box-title">
                Dokumente:
                <button @click="openPopup" type="button"
                    class="text-white bg-blue-700 ml-4 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Ein neues Dokument hinzufügen
                </button>

            </div>
         
           
            <!-- <div class="documents-list mt-4">
                <div class="document-item py-4 flex justify-between" v-for="document in documentList">

                    <div class="document-title">
                        {{ document.title }}
                    </div>
                    <div class="document-path">
                        {{ document.filePath }}
                    </div>
                    <div class="document-creator">
                        {{ document.creator }}
                    </div>
                    <div class="document-buttons">
                        <a :href="document.filePath" download type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 mr-3 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                <path d="M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z" />
                            </svg>
                        </a>
                        <button type="button" @click='deleteDocument(document._id)'
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                            <svg fill="white" width="18" height="18" clip-rule="evenodd" fill-rule="evenodd"
                                stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m20.015 6.506h-16v14.423c0 .591.448 1.071 1 1.071h14c.552 0 1-.48 1-1.071 0-3.905 0-14.423 0-14.423zm-5.75 2.494c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-4.5 0c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-.75-5v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-16.507c-.413 0-.747-.335-.747-.747s.334-.747.747-.747zm4.5 0v-.5h-3v.5z"
                                    fill-rule="nonzero" />
                            </svg>
                        </button>


                    </div>
                </div>
            </div> -->




<div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                   Datei
                </th>
                <th scope="col" class="px-6 py-3">
                    Hinzugefugt von
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" v-for="document in documentList">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {{ document.title }}
                </th>
                <td class="px-6 py-4">
                    {{ document.creator }}
                </td>
               
               
                <td class="px-6 py-4 text-right flex align-items-center justify-end">

                    <a target="_blank" :href="document.filePath" type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 mr-3 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    <svg width="24" height="18" fill="#fff" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm.002 3c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z" fill-rule="nonzero"/></svg>
                </a>
                    <a :href="document.filePath" download type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 mr-3 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                        <path d="M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z" />
                    </svg>
                </a>
                <button type="button" @click='showDeletePopup(document._id)'
                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    <svg fill="white" width="18" height="18" clip-rule="evenodd" fill-rule="evenodd"
                        stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m20.015 6.506h-16v14.423c0 .591.448 1.071 1 1.071h14c.552 0 1-.48 1-1.071 0-3.905 0-14.423 0-14.423zm-5.75 2.494c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-4.5 0c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-.75-5v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-16.507c-.413 0-.747-.335-.747-.747s.334-.747.747-.747zm4.5 0v-.5h-3v.5z"
                            fill-rule="nonzero" />
                    </svg>
                </button>
                </td>
            </tr>
            
        </tbody>
    </table>
</div>

        </div>
    </div>


    <div class="popup" v-show="showDeletion">
        <div class="popup-container">
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.094l-4.157-4.104 4.1-4.141-1.849-1.849-4.105 4.159-4.156-4.102-1.833 1.834 4.161 4.12-4.104 4.157 1.834 1.832 4.118-4.159 4.143 4.102 1.848-1.849z"/></svg>            </div>

            <div class="title">Endgültig löschen?</div>
            <div class="buttons">
                <button class="positive" @click="deleteDocument">Ja</button>
                <button class="negative" @click="closeDeletePopup">Nein</button>
            </div>
        </div>
    </div>
</template>
<script>
import dashboardHeader from '../components/dashboardHeader.vue';
import sideBar from '../components/sideBar.vue'

import PdfViewer from '@tato30/vue-pdf';


import axios from 'axios';
export default {
    components: {
        dashboardHeader,
        sideBar,
        PdfViewer
    },
    data() {
        return {
            players: [],
            registrationLink: '',

            showPopup: false,
            documentTitle: '',
            documentUrl: '',
            successPush: false,
            failPush: false,

            documentList: [],
            pdfSrc: '',

            showDeletion: false,
            tempId: '',
            

        }
    },

    methods: {
        // async fetchPlayers() {
        //     try {
        //         const response = await axios.get('http://localhost:3000/users/list');
        //         this.players = Object.freeze(response.data);
        //         console.log(this.players)
        //     } catch (error) {
        //         console.error('Error fetching players:', error);
        //     }
        // },

        uploadFile(event) {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('file', file);

            axios.post(`http://localhost:3000/api/documents/uploadFile`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                console.log('File uploaded:', response.data.filePath);
                this.documentUrl = response.data.filePath
                // Далее можно сохранить путь к файлу в переменной состояния или использовать по своему усмотрению
            }).catch(error => {
                console.error('Error uploading file:', error);
            });
        },
        openPopup() {
            this.showPopup = true;
        },


        closePopup() {
            this.documentTitle = '',
                this.documentUrl = '',
                this.showPopup = false
        },

        sendData() {
            console.log('User ID:', this.$store.state.userData._id)
            let user = this.$store.state.userData._id;
            console.log(
                'Title:', this.documentTitle,
                'Url:', this.documentUrl,
                'User:', user
            )

            axios.post(`http://localhost:3000/api/documents/add`, {
                title: this.documentTitle,
                filePath: this.documentUrl,
                creator: user,
            })
                .then((response) => {
                    console.log(response.data)
                    this.successPush = true;

                    this.documentTitle = '',
                        this.documentUrl = '',
                        this.showPopup = false,
                        setTimeout(() => {
                            this.successPush = false
                        }, 3000)

                        this.getAllDocuments();
                })
                .catch((error) => {
                    this.failPush = true;
                    setTimeout(() => { this.failPush = false }, 3000)
                })
        },

        downloadFile(filePath) {
            window.location.href = `http://localhost:3000${filePath}`
        },

        async getAllDocuments() {
            try {
                const response = await axios.get('http://localhost:3000/api/documents/list');
                this.documentList = response.data;

                // Обработка каждого документа
                for (const document of this.documentList) {
                    document.creator = await this.getPlayerInfo(document.creator);
                }
            } catch (error) {
                console.log(error);
            }
        },

        async getPlayerInfo(playerId) {
            try {
                const response = await axios.get(`http://localhost:3000/users/list/${playerId}`);
                const playerInfo = response.data;
                const fullName = `${playerInfo.firstName} ${playerInfo.lastName}`;
                console.log(fullName);
                return fullName;
            } catch (error) {
                console.log(error);
                return ''; // или другое значение по умолчанию, в случае ошибки
            }
        },


        deleteDocument(id) {
            axios.delete(`http://localhost:3000/api/documents/${this.tempId}`)
            .then((response) => {
                this.getAllDocuments();
                this.showDeletion = false;
            })
        },

        showDeletePopup(id) {
            this.tempId = id;
            this.showDeletion = true;
        },

        closeDeletePopup () {
            this.tempId = '';
            this.showDeletion = false;
        }
    },



    mounted() {
        this.getAllDocuments();
    }
}
</script>
<style scoped>
@import url(../assets/styles/playersList.css);


.popup {
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;

    display: flex;
    align-items: center;
    justify-content: center;
}


.popup-container {
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    background: #fff;
    border-radius: 8px;

}

.push {
    position: fixed;
    top: 20px;
    right: 20px;
}

.document-item {
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
}

.document-buttons{
    display: flex;
    align-items: center;
}
</style>