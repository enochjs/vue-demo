<template>
  <div class="grandChild">
    孙组件
    <div>银子: {{ store.sum }}</div>
  </div>

</template>
<script lang="ts" setup>

import useCountStore from './store';

const store = useCountStore()

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
