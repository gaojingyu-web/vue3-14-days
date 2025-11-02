<script setup lang="ts">
import {ref} from 'vue'
const inputValue = ref('')
const items = ref<string[]>([])
function add() {
    if (inputValue.value.trim() !== '') {
        items.value.push(inputValue.value.trim())
        inputValue.value = ''
    }
}
function deleteFist() {
    items.value.shift()
}
</script>

<template>
    <input v-model="inputValue" placeholder="请输入待办事项" @keyup.enter="add"/>
    <ul>
        <li v-for="(item, id) in items" :key="id">{{ id+1 }}: {{ item }}</li>
    </ul>
    <button @click="deleteFist">删除第一项</button>
</template>

<style scoped></style>
