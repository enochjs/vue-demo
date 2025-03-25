<template>
  <div>
    子组件
    <div>来自父亲的车：{{ car }}</div>
    <div>玩具：{{ toy }}</div>
    <button @click="sendToy(toy)">发送玩具</button>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, ref } from 'vue';

const toy = ref('来自孩子的玩具');

defineProps({
  car: {
    type: String,
    default: 'child',
  },
  sendToy: {
    type: Function,
    default: () => {},
  },
});

</script>
<style scoped></style>
