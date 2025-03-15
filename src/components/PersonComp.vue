<script setup lang="ts" name="PersonComp">
import { ref } from 'vue';

const h2Ref = ref(null)

const showLog = () => {
  console.log(h2Ref.value)
}

const a = ref(1)
const b = ref(2)
const c = ref(3)

defineExpose({
  a,
  b,
  c
})

</script>

<template>
  <div class="person">
    <h1>中国</h1>
    <h2 ref="h2Ref">北京</h2>
    <h3>海淀</h3>
    <button @click="showLog">点我出北京这个元素</button>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
}
</style>
