<script setup lang="ts">
import PersonComp from './components/PersonComp.vue';
import { reactive } from 'vue';
import type { Person } from './types';

const personList = reactive<Person[]>([
  { name: '张三', age: 18 },
  { name: '李四', age: 20 },
  { name: '王五', age: 22 }
])

</script>

<template>
  <PersonComp :personList="personList" />
</template>

<style scoped>
.wrapper {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
}
</style>
