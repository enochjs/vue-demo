<script setup lang="ts">
import { reactive, computed } from 'vue';
// define props
const person = reactive({
  firstName: '张',
  lastName: '三',
})

// const fullName = computed(() => {
//   return person.firstName + person.lastName
// })

const fullName = computed({
  get() {
    return person.firstName + person.lastName
  },
  set(value) {
    person.firstName = value.split(' ')[0]
    person.lastName = value.split(' ')[1]
  }
})


const changeName = () => {
  person.firstName += `~`
  person.lastName += `~`
}

</script>

<template>
  <div class="person">
    <h2>姓：<input type="text" v-model="person.firstName"> </h2>
    <h2>名：<input type="text" v-model="person.lastName"> </h2>
    <h2>全名：{{ fullName }} </h2>
    <button @click="changeName">修改姓名</button>
    <button @click="fullName = 'li si'">修改全名</button>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
}
</style>
