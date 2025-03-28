<template>
  <div class="father">
    <div>
      <h3>父组件</h3>
      <!-- <input type="text" v-model="username" /> -->
      <h3>{{ username }}</h3>
      <MyInput v-model:username="username" />
      <!-- <MyInput :modelValue="username" @update:modelValue="username = $event" /> -->
      <!-- <input type="text" :value="username" @input="username = $event.target?.value" /> -->

    </div>


  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import MyInput from './myInput.vue';
const username = ref('zhangShan')


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
