<script setup lang="ts">
  import { ref } from 'vue'
  const count = ref(0)
</script>

<template>
  <h2>我是子组件计数器：{{count}}</h2>
  <button @click="count++">按钮</button>
</template>

<style scoped></style>
