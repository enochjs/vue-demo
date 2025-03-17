<script setup lang="ts">
import PersonComp from './components/PersonComp.vue';
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, reactive, ref } from 'vue';
import type { Person } from './types';

const personList = reactive<Person[]>([
  { name: '张三', age: 18 },
  { name: '李四', age: 20 },
  { name: '王五', age: 22 }
])

const isShow = ref(true)

const toggle = () => {
  isShow.value = !isShow.value
}

onBeforeMount(() => {
  console.log('parent--onBeforeMount')
})

onMounted(() => {
  console.log('parent--onMounted')
})

onBeforeUpdate(() => {
  console.log('parent--onBeforeUpdate')
})

onUpdated(() => {
  console.log('parent--onUpdated')
})

onBeforeUnmount(() => {
  console.log('parent--onBeforeUnmount')
})

onUnmounted(() => {
  console.log('parent--onUnmounted')
})

</script>

<template>
  <PersonComp v-if="isShow" :personList="personList" />
  <button @click="toggle">点我切换</button>
</template>

<style scoped>
.wrapper {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
}
</style>
