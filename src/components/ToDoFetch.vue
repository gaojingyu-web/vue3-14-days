<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue';
const title = ref('')
const err = ref('')
const loading = ref(true)
const objects = ref<Todo[]>([])
;(window as any).objects = objects
interface Todo {
    title: string
    completed: boolean
    id: number
}
function add() {
    const res = { title: '我是新节点', completed: true, id: objects.value.length + 1 }
    objects.value.push(res)
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
        <transition-group name="fade" tag="ul">
            <template v-for="item in objects" :key="item.id">
                <li  v-if="item.completed">{{ item.id }} : {{ item.title }}</li>
            </template>
            <!-- <p v-if="objects.filter(t => t.completed).length == 0">
                没有已完成的待办事项
            </p> -->
        </transition-group>

    </div>
    <button @click="add">添加新节点</button>

</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s ease;
}

.fade-enter-from {
    opacity: 0;
    transform: translateY(-20px);
}

.fade-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

.fade-leave-active {
    position: absolute;
    /* 让删除时其它元素平滑补位 */
}
</style>
