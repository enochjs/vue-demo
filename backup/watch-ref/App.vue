<script setup lang="ts">
import { ref, watch } from 'vue';
// define props
const sum = ref(0)
const changeSum = () => {
  sum.value++
}

const stop = watch(sum, (newValue, oldVaue) => {
  //
  console.log('====', newValue, oldVaue)

  if (newValue > 5) {
    stop()
  }

})

</script>

<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">点我+1</button>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
}
</style>
