<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue';
const title = ref('')
const err = ref('')
const loading = ref(true)
onMounted(async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos/500')
        title.value = res.data.title
    } catch (error: any) {
        err.value = error.message || '请求出错'
    } finally {
        loading.value = false
    }
});
</script>

<template>
    <h1>ToDo Fetch 组件</h1>
    <div v-if="loading">加载中...</div>
    <div v-else>
        <p>标题：{{ title }}</p>
        <p v-if="err" style="color: red;">错误信息：{{ err }}</p>
    </div>

</template>

<style scoped></style>
