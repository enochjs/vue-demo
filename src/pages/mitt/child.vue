<template>
  <div>
    子组件1
    <!-- <div>来自父亲的车：{{ car }}</div> -->
    <div>玩具：{{ toy }}</div>
  </div>
</template>
<script lang="ts" setup>
import emitter from '@/utils/emitter';
import {   onUnmounted, ref } from 'vue';
const toy = ref('玩具1');

const handleSendToy = (value: string) => {
  console.log('=====handleSendToy=====', value);
  toy.value = value;
}
emitter.on('sendToy', handleSendToy)

onUnmounted(() => {
  emitter.off('sendToy', handleSendToy)
})

</script>
<style scoped></style>
