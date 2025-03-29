<template>
  <div>
    子组件1
    <h3>玩具：{{  toy }}</h3>
    <h4>书籍： {{ book }}本</h4>
    <button @click="minusHouse($parent)">父亲的房产减一</button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';


const toy = ref('奥特曼')

const book = ref(3)

const minusHouse = (value) => {

  console.log('=====v', value.house)
  // todo
  value.house -= 1
}

defineExpose({
  toy,
  book,
})


</script>
<style scoped></style>
