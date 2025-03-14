<script setup lang="ts">
import { reactive } from 'vue';
// define props
const car = reactive({
  brand: '奔驰',
  price: 100
})

// define methods
const changePrice = () => {
  car.price += 100
}

const games = reactive([
  { name: 'LOL', type: 'MOBA' },
  { name: 'DNF', type: 'RPG' },
  { name: 'CSGO', type: 'FPS' }
])

const changeFirstName = () => {
  games[0].name = '英雄联盟'
}


</script>

<template>
  <div class="person">
    <h2>一辆 {{  car.brand  }}车，价值{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
  </div>
  <ul>
    <li v-for="item in games" :key="item.name">{{ item.name }}</li>
  </ul>
  <button @click="changeFirstName">修改第一个游戏的名字</button>
</template>

<style scoped>
.wrapper {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
}
</style>
