<template>
    <headerComponent />
    <div v-if="successPush"
        class="push p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
        role="alert">
        The data was successfully changed
    </div>

    <div v-if="failPush"
        class="push p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        <span class="font-medium">Error!</span> Check the data you have entered.
    </div>
    <div class="main-container">
        <div class="register-title">
            Profil bearbeiten {{ firstName }} {{ lastName }}
        </div>
        <div class="register-form">

            <div class="photo-section">
                <div class="current-photo" v-if="this.photo">
                    <img v-if="photo" :src="`${photo}`" alt="">

                </div>
                <div class="flex items-center dropzone-input fields-container justify-center w-full">
                    <label for="dropzone-file"
                        class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Bild
                                    hier hochladen</span></p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG oder GIF (MAX. 800x400px)
                            </p>
                        </div>
                        <input ref="fileInput" id="dropzone-file" type="file" @change="uploadFile" class="hidden" />

                    </label>
                </div>

            </div>

            <div class="profile-info">
                <div class="fields-container mb-2">
                    <label for="first_name"
                        class="block text-sm  font-medium text-gray-900 dark:text-white">Vorname</label>
                    <input type="text" id="first_name" v-model="firstName"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="First Name" required>
                </div>
                <div class="fields-container">
                    <label for="last_name"
                        class="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">Nachname</label>
                    <input type="text" v-model="lastName" id="last_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Last Name" required>
                </div>
                <div class="fields-container">
                    <label for="email" class="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">
                        Email</label>
                    <input type="text" v-model="username" id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Last Name" required>
                </div>
                <div class="fields-container">
                    <label for="nationality" class="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">
                        Nationalität</label>
                    <input type="text" v-model="nationality" id="nationality"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Last Name" required>
                </div>
                <div class="fields-container">
                    <label for="date" class="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">Geburstdatum
                    </label>
                    <input type="date" v-model="dateOfBirth" id="date"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Date of birth" required>
                </div>
                <div class="fields-container">
                    <label for="street" class="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">Straße
                    </label>
                    <input type="text" v-model="street" id="street"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Street" required>
                </div>
                <div class="fields-container">
                    <label for="zip" class="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">Piz
                    </label>
                    <input type="text" v-model="zip" id="zip"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Zip" required>
                </div>

                <div class="fields-container">
                    <label for="city" class="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">
                        Stadt
                    </label>
                    <input type="text" v-model="city" id="city"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="City" required>
                </div>
                <div class="fields-container">
                    <label for="phone" class="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">
                        Telefon Nr.
                    </label>
                    <input type="text" v-model="phone" id="phone"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Phone" required>
                </div>
                <div class="field mb-2 fields-container">
                    <label for="countries"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mannschaft</label>
                    <select disabled v-model="selectedTeam" id="countries"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose a team</option>
                        <option v-for="(item, index) in teamList" :key="index" :value="item.name">
                            {{ item.name }}
                        </option>
                    </select>
                </div>
                <div class="field mb-2 fields-container">
                    <label for="countries"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Position</label>
                    <select v-model="position" id="countries"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose a position</option>
                        <option value="Torwart">Torwart</option>
                        <option value="Abwehrspieler">Abwehrspieler</option>
                        <option value="Innenverteidiger">Innenverteidiger</option>
                        <option value="Außenverteidiger">Außenverteidiger</option>
                        <option value="Mittelfeldspieler">Mittelfeldspieler</option>
                        <option value="Defensiver Mittelfeldspieler">Defensiver Mittelfeldspieler</option>
                        <option value="Zentraler Mittelfeldspieler">Zentraler Mittelfeldspieler</option>
                        <option value="Offensiver Mittelfeldspieler">Offensiver Mittelfeldspieler</option>
                        <option value="Stürmer">Stürmer</option>
                        <option value="Flügelstürmer">Flügelstürmer</option>
                        <option value="Mittelstürmer">Mittelstürmer</option>
                    </select>
                </div>

                <div class="fields-container">
                    <label for="parent" class="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">
                        Name Elternteil
                    </label>
                    <input type="text" v-model="parent" id="parent"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Parent" required>
                </div>
                <div class="fields-container">
                    <label for="parentPhone" class="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">
                        Eltern Telefon Nr.
                    </label>
                    <input type="text" v-model="parentPhone" id="parentPhone"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Parent Phone" required>
                </div>
                <div class="fields-container">
                    <label for="passport" class="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">
                        Spielerpass Nr. DFBnet
                    </label>
                    <input type="text" v-model="inputValue" maxlength="9" id="passport"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Passport Number" required>
                </div>
                <div class="fields-container">
                    <label for="password" class="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">
                        Passwort
                    </label>
                    <input type="password" v-model="password" id="password"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Password" required>
                </div>
                <div class="fields-container">
                    <label for="height" class="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">
                        Große
                    </label>
                    <input type="text" v-model="height" id="height"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Height" required>
                </div>
                <div class="fields-container">
                    <label for="weight" class="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">
                        Gewicht
                    </label>
                    <input type="text" v-model="weight" id="password"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="weight" required>
                </div>
                <div class="fields-container button">
                    <button @click="sendData" type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Speichern
                        Sie</button>

                </div>

            </div>
            <!--  -->

        </div>
    </div>
    <footerComponent />
</template>
<script>
import headerComponent from '../components/headerComponent.vue';
import footerComponent from '../components/footerComponent.vue';
import redButton from '../components/redButton.vue';
import axios from 'axios';
import { useUserStore } from '../stores/userStore.js';

export default {
    components: {
        headerComponent,
        footerComponent,
        redButton
    },

    data() {
        return {
            isValidKey: false,
            username: '',
            firstName: '',
            lastName: '',
            password: '',
            photo: '',
            dateOfBirth: '',
            team: '',
            position: '',
            nationality: '',
            street: '',
            zip: '',
            city: '',
            phone: '',
            parent: '',
            parentPhone: '',
            passport: '',
            inputValue: "",
            teamList: [],
            selectedTeam: '',
            role: '',
            height: '',
            weight: '',
            successPush: false,
            failPush: false,
            userStore: useUserStore(),
        }
    },
    methods: {
        async getTeams() {
            try {
                const response = await axios.get('http://localhost:3000/api/teams');
                this.teamList = response.data.teams;
                console.log('Team List:', this.teamList);
            } catch (error) {
                console.error('Error while getting teams', error);
            }
        },

        async getUser() {
            axios.post('http://localhost:3000/api/user/get',
                { id: this.userStore.userId }, // Данные, отправляемые в теле запроса
                { withCredentials: true })  // Флаг для отправки куков
                    .then((response) => {
                        console.log('User:', response.data);

                        if (response.data) {
                            this.username = response.data.username;
                            this.firstName = response.data.firstName;
                            this.password = response.data.password;
                            this.lastName = response.data.lastName;
                            this.photo = response.data.photo;
                            this.dateOfBirth = this.formatDate(response.data.dateOfBirth);
                            this.team = response.data.team;
                            this.selectedTeam = response.data.team
                            this.position = response.data.position;
                            this.nationality = response.data.nationality;
                            this.street = response.data.street;
                            this.zip = response.data.zip;
                            this.city = response.data.city;
                            this.phone = response.data.phone;
                            this.parent = response.data.parent;
                            this.parentPhone = response.data.parentPhone;
                            this.passport = response.data.passport;
                            this.inputValue = response.data.passport;
                            this.role = response.data.role;
                            this.weight = response.data.weight;
                            this.height = response.data.height;
                        } else {
                            console.error('User data is null or undefined');
                        }
                    })
                    .catch((error) => {
                        console.error('Error while fetching user:', error);
                    });
        },


        uploadFile(event) {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('file', file);

            const folder = 'players';

            axios.post(`http://localhost:3000/api/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                console.log('File uploaded:', response.data.downloadURL);
                this.photo = response.data.downloadURL
                console.log(this.photo)
            }).catch(error => {
                console.error('Error uploading file:', error);
            });
        },

        formatDate(dateString) {
      const date = new Date(dateString);
      
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); 
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    },

        sendData() {
            const userData = {
                username: this.username,
                firstName: this.firstName,
                lastName: this.lastName,
                photo: this.photo,
                dateOfBirth: this.dateOfBirth,
                team: this.selectedTeam,
                position: this.position,
                nationality: this.nationality,
                street: this.street,
                zip: this.zip,
                city: this.city,
                phone: this.phone,
                parent: this.parent,
                parentPhone: this.parentPhone,
                passport: this.inputValue,
                role: this.role,
                height: this.height,
                weight: this.weight

            };

            const id = this.userStore.userId
            axios.put(`http://localhost:3000/api/user/list/${id}`, userData, { withCredentials: true },)
                .then(response => {
                    console.log(response.data);
                    this.successPush = true;
                    setTimeout(() => {
                        this.successPush = false
                    }, 2000);
                })
                .catch(error => {
                    console.error('Error submitting form:', error);
                    this.failPush = true;
                    setTimeout(() => {
                        this.failPush = false
                    }, 2000);
                });
        }
    },

    // watch: {
    //     inputValue(newVal, oldVal) {
    //         let cleanedValue = newVal.replace(/[^\d]/g, "");

    //         // Вставка дефиса после четырех цифр
    //         if (cleanedValue.length > 4) {
    //             cleanedValue = cleanedValue.slice(0, 4) + "-" + cleanedValue.slice(4);
    //         }

    //         // Проверка на наличие букв
    //         if (/[^\d-]/.test(cleanedValue)) {
    //             // Если обнаружены буквы, очищаем ввод
    //             cleanedValue = "";
    //         }

    //         // Обновление значения
    //         this.inputValue = cleanedValue;
    //         this.passport = this.inputValue
    //     },
    // },

    mounted() {
        this.getTeams();
        this.getUser();
    }
}
</script>

<style>
@import url('../assets/styles/registerPage.css');

.push {
    position: fixed;
    top: 20px;
    right: 20px;
}
</style>