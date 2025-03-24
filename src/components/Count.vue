<template>
  <div class="count">
    <h1>当前求和为: {{ countStore.count }}</h1>
    <select name="1" v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useCountStore } from '../store/count';

const countStore = useCountStore();

const n = ref(1);
const increment = () => {
  // countStore.count += n.value;
  // countStore.$patch({
  //   count: countStore.count + n.value,
  //   school: '清华大学',
  // })
  countStore.increment(n.value);
}

const decrement = () => {
  countStore.count -= n.value;
}

</script>

<style scoped>



</style>