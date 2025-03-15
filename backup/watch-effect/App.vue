<script setup lang="ts">
import { reactive, watch, watchEffect } from 'vue';

const water = reactive({
  temp: 0,
  level: 0
})

const changeWater = () => {
  water.level += 10
}

const changeTemp = () => {
  water.temp += 10
}

// watch([() => water.level, () => water.temp], (value) => {
//   const [level, temp] = value
//   if (level > 60 || temp > 80) {
//     console.log('====报警')
//   }
//   // console.log('====', value)
// })

watchEffect(() => {
  if (water.level > 60 || water.temp > 80) {
    console.log('====报警')
  }
  console.log('====', water.level, water.temp)
}, {
  // flush: 'post'
})

</script>

<template>
  <div class="person">
    <h1>当水位大于 60 时 或者 水温大于 80 时 报警</h1>
    <h2>水温：{{ water.temp }}</h2>
    <h2>水位：{{ water.level }}</h2>
    <button @click="changeWater">水位 +10</button>
    <button @click="changeTemp">水温 +10</button>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
}
</style>
