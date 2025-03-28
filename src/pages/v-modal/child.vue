<template>
  <div>
    子组件
    <div>来自父亲的车：{{ car }}</div>
    <div>玩具：{{ toy }}</div>
  </div>
</template>
<script lang="ts" setup>
import {  onMounted, ref } from 'vue';

const toy = ref('来自孩子的玩具');

defineProps({
  car: {
    type: String,
    default: 'child',
  },
});

const emit = defineEmits(['sendToy']);

onMounted(() => {
  // emit('sendToy', toy.value);
  setTimeout(() => {
    // console.log('=====emit=====', toy.value);
    emit('sendToy', toy.value);
  }, 3000);
});

</script>
<style scoped></style>
