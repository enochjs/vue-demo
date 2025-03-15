<script setup lang="ts">
import { ref } from 'vue';
import PersonComp from './components/PersonComp.vue';
const h1Ref = ref(null)

const showLog = () => {
  console.log(h1Ref.value)
}


const personRef = ref(null)

const showPerson = () => {
  console.log(personRef.value)
}

</script>

<template>
  <h1 ref="h1Ref">this is app</h1>
  <button @click="showLog">点我出h1</button>
  <PersonComp ref="personRef" />
  <button @click="showPerson">点我出person</button>
</template>

<style scoped>
.wrapper {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
}
</style>
