<script setup lang="ts">
import { useCounterStore } from '../stores/counter'
const counterStore = useCounterStore()
</script>

<template>
  <h2>我是子组件计数器：{{ counterStore.count }}</h2>
  <button @click="counterStore.increment">增加按钮</button>
  <button @click="counterStore.decrement">减少按钮</button>
  <p>{{ counterStore.doubleCount }}</p>
</template>

<style scoped></style>
