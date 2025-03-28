<template>
  <div class="father">
    <div>
      父组件
    </div>
    <h3>
      玩具： {{ toy }}
    </h3>
    <h3>
      汽车： {{ car }}
    </h3>
    <Child :car="car" @send-toy="getToy" />

  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import Child from './child.vue';

const car = ref('奔驰');
const toy = ref('');

const getToy = (value: string) => {
  console.log('=====getToy=====', value);
  toy.value = value;
};



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
