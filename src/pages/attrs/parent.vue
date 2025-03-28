<template>
  <div class="father">
    <div>
      父组件
    </div>
    <div>a: {{ a }}</div>
    <div>b: {{ b }}</div>
    <div>c: {{ c }}</div>
    <div>d: {{ d }}</div>
    <Child :a="a" :b="b" :c="c" :d="d" v-bind="{x: 100, y: 200}" />

  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import Child from './child.vue';
const a = ref(1)
const b = ref(2)
const c = ref(3)
const d = ref(4)

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
