<script setup lang="ts">
import Count from './components/Count.vue';
import LoveTalk from './components/LoveTalk.vue';
</script>

<template>

  <div class="wrapper">
    <Count />
    <LoveTalk />
  </div>
</template>

<style scoped>
.wrapper {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
}

.nav {
  width: 100%;
  display: flex;
  a {
    flex: 1
  }
}
.active {
  color: #ccc;
}
.content {
  width: 500px;
  height: 400px;
}
</style>
