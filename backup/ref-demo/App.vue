<script setup lang="ts">
import { ref } from 'vue';
// define props
const name = ref('张三')
const age = ref(18)
const address = ref('北京')

// define methods
const changeName = () => {
  name.value = '李四'
}
const changeAge = () => {
  age.value = 20
}
const changeAddress = () => {
  address.value = '上海'
}

</script>

<template>
  <div class="wrapper">
    <div class=" text-center">
      姓名：{{ name }}
    </div>
    <div>
      年龄：{{ age }}
    </div>
    <div>
      地址：{{ address }}
    </div>
  </div>
  <div>
    <button @click="changeName">
      修改姓名
    </button>
    <button @click="changeAge">
      修改年龄
    </button>
    <button @click="changeAddress">
      修改地址
    </button>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
}
</style>
