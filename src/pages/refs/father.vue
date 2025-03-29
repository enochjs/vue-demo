<template>
  <div class="father">
    <div>
      父组件
      <h3>房产：{{ house }}</h3>
      <button @click="handleChangeToy">修改child1的玩具</button>
      <button @click="handleGetAllChild($refs)">获取所有子的书籍加3</button>
    </div>
    <Child ref="c1" />
    <Child2 ref="c2" />

  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import Child from './child.vue';
import Child2 from './child2.vue';

const c1 = ref()

const c2 = ref()

const house = ref(4)

const handleChangeToy = (event) => {
  console.log('=====',  c1.value)
  c1.value.toy = '泰罗奥特曼'
}

const handleGetAllChild = (value) => {
  console.log('======v', value)
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      const element = value[key];
      element.book += 3
    }
  }
}

defineExpose({
  house,
})

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
