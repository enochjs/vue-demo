<template>
  <div class="father">
    <div>
      父组件
    </div>
    <div>数量: {{ store.sum }}</div>
    <button @click="store.increase">+1</button>
    <Child  />
  </div>
</template>
<script lang="ts" setup>

import Child from './child.vue';
import useCountStore from './store';

const store = useCountStore()



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
