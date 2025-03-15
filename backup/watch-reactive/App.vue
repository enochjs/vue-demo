<script setup lang="ts">
import { reactive, watch } from 'vue';


const person = reactive({
  name: '张三',
  age: 18
})

const changePerson = () => {
  person.name += '~'
}

const changeAge = () => {
  person.age += 1
}

const stop = watch(person, (newValue, oldValue) => {
  console.log('====', newValue, oldValue)
}, {
  // immediate: true,
  deep: true
})

</script>

<template>
  <div class="person">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changePerson">修改名字</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
}
</style>
