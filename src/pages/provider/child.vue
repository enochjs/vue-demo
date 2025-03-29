<template>
  <div class="father">
    <div >
      子组件
      <!-- <div>a: {{ a }}</div> -->
      <!-- <div>b: {{ b }}</div> -->
    </div>
    <GrandChild v-bind="$attrs" />

  </div>
</template>
<script lang="ts" setup>
import GrandChild from './grandChild.vue';

// defineProps(['a', 'b'])
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
