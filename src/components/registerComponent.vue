<template>
  <div class="popup">
    <div class="alert alert-danger" v-if="dataError" role="alert">
      The data has already been registered
    </div>

    <div class="alert alert-success" v-if="successRegistration" role="alert">
      Successful registration
    </div>

    <div class="popup-container">
      <div class="close" @click="closePopup">
        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
        </svg>
      </div>
      <div class="title-img">
        <img src="../assets/logoComp.png" alt="">
      </div>
      <form>
        <div class="field" :class="{ 'error': fNameError }">
          <input type="text" v-model="firstName" placeholder="First Name">
          <span v-if="fNameError && firstName.length === 0">Please enter your first name</span>
        </div>
        <div class="field" :class="{ 'error': lNameError }">
          <input type="text" v-model="lastName" placeholder="Last Name">
          <span v-if="lNameError && lastName.length === 0">Please enter your last name</span>
        </div>
        <div class="field" :class="{ 'error': emailError }">
          <input type="text" v-model="email" placeholder="Email">
          <span v-if="emailError && email.length === 0">Please enter a correct email</span>
        </div>
        <div class="field" :class="{ 'error': dateOfBirthError }">
          <input type="date" v-model="dateOfBirth" placeholder="Date of Birth">
          <span v-if="dateOfBirthError && dateOfBirthError.length === 0">Please enter your date of birth</span>
        </div>

        <div class="field" :class="{ 'error': passwordError }">
          <input type="password" v-model="password" placeholder="Password">
          <span v-if="passwordError && password.length === 0">Please enter a correct password</span>
        </div>
      </form>
      <redButton class="button" @click="register" :disabled="emailError || passwordError" path="" text="Sign In" />

    </div>
  </div>
</template>
<script>
import redButton from './redButton.vue';
import axios from 'axios';

export default {
  components: {
    redButton
  },

  data() {
    return {
      firstName: '',
      fNameError: '',
      lastName: '',
      lNameError: '',
      dateOfBirth: '',
      dateOfBirthError: '',
      email: '',
      password: '',
      emailError: false,
      passwordError: false,
      dataError: false,
      successRegistration: false
    };
  },

  computed: {
    hasErrors() {
      return (
        this.emailError ||
        this.passwordError ||
        this.fNameError ||
        this.lNameError ||
        this.dateOfBirthError
      );
    }
  },

  watch: {
    firstName: 'validateFirstName',
    lastName: 'validateLastName',
    dateOfBirth: 'validateDateOfBirth'
  },

  methods: {
    closePopup() {
      this.$parent.showRegisterPopup = false;
    },

    validateFirstName() {
      this.fNameError = this.firstName.length === 0;
    },
    validateLastName() {
      this.lNameError = this.lastName.length === 0;
    },
    validateDateOfBirth() {
      this.dateOfBirthError = this.dateOfBirth.length === 0;
    },

    isEmailValid() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(this.email);
    },

    isPasswordValid() {
      return this.password.length >= 6;
    },

    validateEmail() {
      const isValid = this.isEmailValid();
      this.emailError = !isValid || this.email.length === 0;
      if (isValid) {
        this.emailError = false;
      }
    },

    isNameValid() {
      return this.firstName.length > 0 && this.lastName.length > 0;
    },

    isDateOfBirthValid() {
      return this.dateOfBirth.length > 0;
    },

    register() {
      if (this.isEmailValid() && this.isPasswordValid() && this.isNameValid() && this.isDateOfBirthValid()) {
        axios
          .post('http://localhost:3000/auth/register', {
            username: this.email,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            dateOfBirth: this.dateOfBirth,
            role: 'User'
          })
          .then(response => {
            console.log('Registration successful!', response.data);
            this.successRegistration = true;
            setTimeout(() => {
              this.successRegistration = false;
              window.location.href = '/'
            }, 3000)
          })
          .catch(error => {
            console.error('Registration failed. Please check your inputs.', error);
            if (error.response && error.response.status === 500 && error.response.data.message === 'Registration failed') {
              // Выводим сообщение о том, что пользователь уже зарегистрирован
              console.log('User is already registered.');
              this.dataError = true
              setTimeout(() => {
                this.dataError = false
              }, 8000)
            }
          });
      } else {
        this.emailError = !this.isEmailValid() || this.email.length === 0;
        this.passwordError = !this.isPasswordValid() || this.password.length === 0;
        this.validateFirstName();
        this.validateLastName();
        this.validateDateOfBirth();
      }
    },


    // ... (оставьте остальные методы валидации по мере необходимости)
  }
};
</script>

<style scoped>
@import url(../assets/styles/components/registerComponent.css);
</style>