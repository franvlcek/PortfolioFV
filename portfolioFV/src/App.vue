<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
      <nav class="navbar">
        <img src="" >
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/education">Education</RouterLink>
      </nav>
  
  </header>
  <RouterView />
  <footer class="footer"><font-awesome-icon icon="fa-solid fa-copyright" /> Francisco Vlcek - You can reach me through: <a href="https://www.linkedin.com/in/francisco-vlcek-2a7105218/" target="_blank"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>|<a href="https://github.com/franvlcek" target="_blank"><font-awesome-icon icon="fa-brands fa-github" /></a>| <font-awesome-icon icon="fa-solid fa-phone" />+54 911 3380-1616 | <font-awesome-icon icon="fa-solid fa-envelope" /> franvlcek@gmail.com</footer>
</template>

<style >
.navbar{
  top: 10px;
  left: 15px;
  position: fixed;
}
.footer{
  position: fixed;
  font-size: small;
  bottom: 10px;
  left: 15px;
}
</style>
