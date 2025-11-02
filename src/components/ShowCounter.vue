<script setup lang="ts">
import { useCounterStore } from '../stores/counter'
const counterStore = useCounterStore()
</script>

<template>
    <h1>多组件共享验证</h1>
    <h2>我是计数器显示器：{{ counterStore.count }}</h2>
</template>

<style scoped></style>
