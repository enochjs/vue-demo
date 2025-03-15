<script setup lang="ts">
import { reactive, toRef, toRefs } from 'vue';
// define props
const person = reactive({
  name: '张三',
  age: 18,
  gender: '男'
})


const { name, age, gender } = toRefs(person)
const name1 = toRef(person, 'name')

const changeName = () => {
  // person.name += `~`
  // name += `~`
  name.value += `~`
  name1.value += `~`
}

const changeAge = () => {
  // person.age += 1
  // value += 1
  age.value += 1
}

</script>

<template>
  <div class="person">
    <h2>姓名：{{ person.name }}，年龄：{{ person.age }}，性别：{{ person.gender }}</h2>
    <h2>姓名：{{ name }}，年龄：{{ age }}，性别：{{ gender }}</h2>
    <button @click="changeName">修改姓名</button>
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
