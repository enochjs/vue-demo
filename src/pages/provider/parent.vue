<template>
  <div class="father">
    <div>
      父组件
    </div>
    <div>银子: {{ money }}</div>
    <div>车子: {{ car.brand }} - 价值{{ car.price }}</div>

    <Child  />

  </div>
</template>
<script lang="ts" setup>
import { reactive, ref, provide } from 'vue';
import Child from './child.vue';
const money = ref(100)
const car = reactive({
  brand: '奔驰',
  price: 100
})

provide('money', {
  money,
  updateMoney
})
provide('car', car)

function updateMoney(value: number) {
  money.value -= value
}


</script>
<style scoped>
.father {
  flex: 1;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-right: 10px;
}
</style>
