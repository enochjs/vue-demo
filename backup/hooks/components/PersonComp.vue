
<script setup lang="ts" name="PersonComp">

import { useDog } from '@/hooks/useDog';

const { dogList, addDog } = useDog()


</script>

<template>
  <div class="person">
    <img src="" alt="">

    <ul>
      <li v-for="(dog, index) in dogList" :key="index">
        <img :src="dog" alt="">
      </li>
    </ul>

    <button @click="addDog">再来一只+1</button>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
}
ul {
  display: flex;
}
img {
  width: 100px;
  margin-right: 10px;
}
</style>
