<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
      <nav class="navbar">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/education">Education</RouterLink>
      </nav>
  
  </header>

  <RouterView />
</template>

<style >
.navbar{
  position: fixed;
}
</style>
