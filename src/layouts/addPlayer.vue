<template>
    <div v-if="successPush" id="toast-top-right"
    class="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow top-5 right-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
    role="alert">
    <div class="success-icon">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path
                d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z" />
        </svg>
    </div>
    <div class="text-sm font-normal">Registration successful</div>
</div>
    <headerComponent />
    <div class="main-container">
        <div class="register-title">
            Benutzer registrieren:
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
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to
                                    upload</span> or drag and drop</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input ref="fileInput" id="dropzone-file" type="file" @change="uploadFile" class="hidden" />

                    </label>
                </div>

            </div>

            <div class="profile-info">
                <div class="fields-container mb-2">
                    <label for="first_name" class="block text-sm  font-medium text-gray-900 dark:text-white">Erste
                        Name</label>
                    <input type="text" id="first_name" v-model="firstName"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="First Name" required>
                </div>
                <div class="fields-container">
                    <label for="last_name" class="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">Letzte
                        Name</label>
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
                    <label for="date" class="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">Datum der Geburt
                    </label>
                    <input type="date" @input="formatDate" v-model="selectedDate" id="date"
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
                    <label for="zip" class="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">Zip
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
                        Telefon
                    </label>
                    <input type="text" v-model="phone" id="phone"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Phone" required>
                </div>
                <div class="field mb-2 fields-container">
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Wählen Sie
                        ein Team</label>
                    <select v-model="selectedTeam" id="countries"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose a team</option>
                        <option v-for="(item, index) in teamList" :key="index" :value="item.name">
                            {{ item.name }}
                        </option>
                    </select>
                </div>
                <div class="field mb-2 fields-container">
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Wählen Sie
                        eine Position</label>
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
                        Elternteil
                    </label>
                    <input type="text" v-model="parent" id="parent"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Parent" required>
                </div>
                <div class="fields-container">
                    <label for="parentPhone" class="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">
                        Telefon der Eltern
                    </label>
                    <input type="text" v-model="parentPhone" id="parentPhone"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Parent Phone" required>
                </div>
                <div class="fields-container">
                    <label for="passport" class="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">
                        Reisepassnummer DFB
                    </label>
                    <input type="text" v-model="inputValue" maxlength="9" id="passport"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Passport Number" required>
                </div>
                <div class="fields-container">
                    <label for="height" class="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">
                        Höhe
                    </label>
                    <input type="text" v-model="height" id="height"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Height" required>
                </div>
                <div class="fields-container">
                    <label for="weight" class="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">
                        Gewicht
                    </label>
                    <input type="text" v-model="weight" id="weight"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="weight" required>
                </div>
                <div class="fields-container">
                    <label for="password" class="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">
                        Passwort
                    </label>
                    <input type="password" v-model="password" id="password"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Password" required>
                </div>
                <div class="fields-container button">
                    <button @click="register" type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register</button>

                </div>

            </div>


        </div>
    </div>
    <footerComponent />
</template>
<script>
import headerComponent from '../components/headerComponent.vue';
import footerComponent from '../components/footerComponent.vue';
import redButton from '../components/redButton.vue';
import axios from 'axios';
import moment from 'moment';

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
            height: '',
            weight: '',
            successPush: false,
            selectedDate: null,

        }
    },

    created() {
        const key = this.$route.params.key;

        axios.get(`http://localhost:3000/check-key/${key}`)
            .then((response) => {
                console.log(response.data.isValid)
                this.isValidKey = response.data.isValid

              
               
                if (this.isValidKey) {
                    // Ключ действителен, выполняйте вашу логику регистрации
                } else {
                    // Ключ не действителен, перенаправление на главную страницу или другую страницу
                    this.$router.push('/');
                }
            })
            .catch((error) => {
                console.error('Error checking key:', error);
                // Обработка ошибки, например, перенаправление на другую страницу или вывод сообщения
            });
    },

    methods: {
        async getTeams() {
  try {
    const response = await axios.get('http://localhost:3000/api/teams');
    this.teamList = response.data.teams;
    console.log('Team List:', this.teamList); // Додайте цей рядок
  } catch (error) {
    console.error('Error while getting teams', error);
  }
},

        uploadFile(event) {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('file', file);

            const folder = 'players'; // Замените на нужную папку (players, gallery, news)

            axios.post(`http://localhost:3000/api/${folder}/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                console.log('File uploaded:', response.data.filePath);
                this.photo = response.data.filePath
                console.log(this.photo)
                // Далее можно сохранить путь к файлу в переменной состояния или использовать по своему усмотрению
            }).catch(error => {
                console.error('Error uploading file:', error);
            });
        },
            formatDate() {
    const formattedDate = moment(this.selectedDate).format('YYYY-MM-DD');
    this.dateOfBirth = formattedDate;
    console.log(this.dateOfBirth);
  },


        register() {
            const userData = {
                username: this.username,
                firstName: this.firstName,
                lastName: this.lastName,
                password: this.password,
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
                passport: this.passport,
                height: this.height,
                weight: this.weight,
                role: 'User'
            };

            // Отправляем POST-запрос
            axios.post('http://localhost:3000/auth/register', userData)
                .then(response => {
                    // Обрабатываем успешный ответ
                    console.log(response.data);
                    this.successPush = true;
                setTimeout(() => {
                    this.successPush = false
                    this.$router.push('/')
                }, 2000)

                })
                .catch(error => {
                    // Обрабатываем ошибку
                    console.error('Error submitting form:', error);
                });
        }
    },

    watch: {
        inputValue(newVal, oldVal) {
            // Очистка от всех символов, кроме цифр
            let cleanedValue = newVal.replace(/[^\d]/g, "");

            // Вставка дефиса после четырех цифр
            if (cleanedValue.length > 4) {
                cleanedValue = cleanedValue.slice(0, 4) + "-" + cleanedValue.slice(4);
            }

            // Проверка на наличие букв
            if (/[^\d-]/.test(cleanedValue)) {
                // Если обнаружены буквы, очищаем ввод
                cleanedValue = "";
            }

            // Обновление значения
            this.inputValue = cleanedValue;
            this.passport = this.inputValue
        },
    },

    mounted() {
        this.getTeams();
    }
}
</script>

<style>
@import url('../assets/styles/registerPage.css');
</style>