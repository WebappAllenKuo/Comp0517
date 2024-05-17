<script setup>
import ViewA from './views/ViewA.vue'
import ViewB from './views/ViewB.vue'
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <router-link to="/">View A</router-link> | 
    <router-link to="/view-b">View B</router-link>
  </div>
  <router-view />
    
</template>

<style scoped>
</style>
