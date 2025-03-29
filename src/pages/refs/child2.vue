<template>
  <div>
    子组件2
    <h3>玩具：{{  computer }}</h3>
    <h4>书籍： {{ book }}本</h4>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';


const computer = ref('联想')
const book = ref(5)

defineExpose({
  computer,
  book,
})


</script>
<style scoped></style>
