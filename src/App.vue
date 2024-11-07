<template>

  <router-view></router-view>
</template>
<script>
import axios from 'axios'
import { useUserStore } from './stores/userStore.js';


export default {

  data () {
    return {
      userStore: useUserStore(),
    }
  },
  methods: {
    async verifyToken() {
      
      try {
        const response = await axios.get('http://localhost:3000/api/auth/verify-token', { withCredentials: true });

        if (response.data.userId) {
          this.userStore.setUser(response.data.userId, response.data.role);
        }


        if(response.status == 401) {
          return;
        }
      } catch (error) {

        if (error.response && error.response.status === 401) {
          document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
          this.userStore.clearUser(); 
        }
      }
    },

    getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    }
  },

  created() {
    this.verifyToken()
  }
}





</script>
<style>
@font-face {
  font-family: 'dCondensed';
  src: url('./assets/fonts/DINCondensed-Regular.ttf');
}

@font-face {
  font-family: 'dintLight';
  src: url('./assets/fonts/DINTLight.ttf');
}

@font-face {
  font-family: 'goboldB';
  src: url('./assets/fonts/Gobold_Bold.ttf');
}

@font-face {
  font-family: 'goboldI';
  src: url('./assets/fonts/Gobold_Bold_Italic.ttf');
}

@font-face {
  font-family: 'metropolis';
  src: url('./assets/fonts/metropolis.semi-bold.otf');
}

@font-face {
  font-family: 'Pr';
  src: url('./assets/fonts/Poppins-Regular.ttf');
}

@font-face {
  font-family: 'goboldThin';
  src: url('./assets/fonts/Gobold_Light.ttf');
}


body, html, #app {
  height: 100%
}
</style>
