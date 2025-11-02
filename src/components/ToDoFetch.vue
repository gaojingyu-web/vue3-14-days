<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue';
const title = ref('')
const err = ref('')
const loading = ref(true)
const objects = ref<Todo[]>([])
interface Todo {
    title: string
    completed: boolean
    id: number
}
onMounted(async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos/')
        objects.value = res.data.slice(0, 10)
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
        <!-- <p>标题：{{ title }}</p>
        <p v-if="err" style="color: red;">错误信息：{{ err }}</p> -->
        <ul v-for="item in objects">
            <li v-if="item.completed">
                <p>{{ item.id }} : {{ item.title }}</p>
            </li>
        </ul>
        <p v-if="objects.filter(t => t.completed).length == 0">
            没有已完成的待办事项
        </p>
    </div>

</template>

<style scoped></style>
