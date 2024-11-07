<template>
    <router-link class="link" :to="path">
      {{ text }}
    </router-link>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    props: {
      path: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
    },
  });
  </script>


<style scoped>
 .link {
    background: #cc0033;
    border-radius: 8px;
    color: #fff;
    padding: 10px 20px;
    font-family: 'goboldI', sans-serif;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 20px;
    transition: 0.3s;
}

.link:hover {
    cursor: pointer;
    background: #ac012c;
}
</style>
  