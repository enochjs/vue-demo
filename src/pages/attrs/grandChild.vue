<template>
  <div class="grandChild">
    孙组件
    <div>a: {{ a }}</div>
    <div>b: {{ b }}</div>
    <div>c: {{ c }}</div>
    <div>d: {{ d }}</div>
    <div>x: {{ x }}</div>
    <div>y: {{ y }}</div>
  </div>

</template>
<script lang="ts" setup>

defineProps(['a', 'b', 'c', 'd', 'x', 'y'])

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
