<script setup lang="ts">
import { ref } from 'vue'
import Counter from './components/Counter.vue'
import ShowCounter from './components/ShowCounter.vue'
import ToDoFetch from './components/ToDoFetch.vue'
const msg = ref('Vue 14天打卡')
</script>

<template>
  <h1>{{ msg }}</h1>
  <Counter />
  <ShowCounter />
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />

  <ToDoFetch />
</template>

<style scoped></style>
