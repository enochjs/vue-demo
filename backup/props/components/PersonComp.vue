<script setup lang="ts" name="PersonComp">
import type { Person } from '@/types';
import { ref } from 'vue';


const a = ref(1)
const b = ref(2)
const c = ref(3)

defineExpose({
  a,
  b,
  c
})

const props = withDefaults(defineProps<{
  personList: Person[]
}>(), {
  personList: () => []
})

console.log(props.personList)

</script>

<template>
  <div class="person">
    <ul>
      <li v-for="person in personList" :key="person.name">{{ person.name }} - {{ person.age }}</li>
    </ul>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
}
</style>
