
<script setup lang="ts" name="PersonComp">
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';

const sum = ref(0)
const add = () => {
  sum.value++
}

// setup 就是 创建

onBeforeMount(() => {
  console.log('child--onBeforeMount')
})

onMounted(() => {
  console.log('child--onMounted')
})

onBeforeUpdate(() => {
  console.log('child--onBeforeUpdate')
})

onUpdated(() => {
  console.log('child--onUpdated')
})

onBeforeUnmount(() => {
  console.log('child--onBeforeUnmount')
})

onUnmounted(() => {
  console.log('child--onUnmounted')
})

</script>

<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="add">点我+1</button>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
}
</style>
