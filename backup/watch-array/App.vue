<script setup lang="ts">
import { reactive, watch } from 'vue';


const person = reactive({
  name: '张三',
  age: 18,
  car: {
    c1: '宝马',
    c2: '奔驰'
  }
})

const changePerson = () => {
  person.name += '~'
}

const changeAge = () => {
  person.age += 1
}

const changeCar1 = () => {
  person.car.c1 += '~'
}

const changeCar2 = () => {
  person.car.c2 += '~'
}

const changeCar = () => {
  person.car = {
    c1: '奥迪',
    c2: '大众'
  }
}

// const stop = watch(() =>{
//   console.log('====come in',  person.name)
//   return person.name
// }, (newValue, oldValue) => {
//   console.log('====', newValue, oldValue)
// }, {
//   // immediate: true,
// })

// const stop2 = watch(() =>{
//   console.log('====come in 222',  person.car)
//   return person.car
// }, (newValue, oldValue) => {
//   console.log('====', newValue, oldValue)
// }, {
//   // immediate: true,
//   deep: true
// })

const stop3 = watch([() => person.name, () => person.car], (newValue, oldValue) => {
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
    <h2>车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
    <button @click="changePerson">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeCar1">修改车1</button>
    <button @click="changeCar2">修改车2</button>
    <button @click="changeCar">修改整车</button>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
}
</style>
