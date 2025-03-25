<script setup lang="ts">
import {  useRouter } from 'vue-router';
const router = useRouter();

const routes = router.getRoutes().filter(item => item.name);

</script>

<template>
  <div>vue3 组件通信 </div>
  <div class="wrapper">
    <div class="nav">
      <router-link class="nav-item" v-for="item in routes" :to="item.path" :key="item.path">{{ item.name }}</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 20px;
  padding: 20px;
  display: flex;
}

.nav {
  width: 300px;
  display: flex;
  flex-direction: column;
  .nav-item {
    flex: 1;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    margin-right: 10px;
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
