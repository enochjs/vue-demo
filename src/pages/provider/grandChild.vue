<template>
  <div class="grandChild">
    孙组件
    <div>银子: {{ money.money }}</div>
    <div>车子: {{ car.brand }} - 价值{{ car.price }}</div>
    <button @click="money.updateMoney(6)">花爷爷的钱</button>
  </div>

</template>
<script lang="ts" setup>
import { inject } from 'vue';


// defineProps(['a', 'b', 'c', 'd', 'x', 'y'])
const money =  inject('money')
const car =  inject('car', {
  brand: '',
  price: ''
})

</script>
<style scoped>

.grandChild {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-right: 10px;
  background-color: #f0f0f0;
  color: #333;
}

</style>
