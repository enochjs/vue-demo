<template>
  <div class="father">
    <div>
      父组件
    </div>
    <h3>
      汽车： {{ car }}
    </h3>
    <h3 v-if="toy">
      玩具： {{ toy }}
    </h3>
    <button @click="testEvent(1, 2, 3, $event)">点我</button>
    <Child :car="car" :sendToy="getToy" />

  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import Child from './child.vue';

const car = ref('奔驰');
const toy = ref('');

const getToy = (value: string) => {
  console.log('getToy', value);
  toy.value = value;
};

const testEvent = (a: number, b: number, c: number, event: Event) => {
  console.log('testEvent', a, b, c, event);
};

</script>
<style scoped>
.father {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-right: 10px;
}
</style>
