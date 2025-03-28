<template>
  <div>
    子组件2
    <div>玩具：{{ toy }}</div>
    <button @click="sendToy">发送玩具</button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

import emitter from '@/utils/emitter';
const toy = ref('玩具2');

const sendToy = () => {
  // todo
  emitter.emit('sendToy', 'test')

}


</script>
<style scoped></style>
