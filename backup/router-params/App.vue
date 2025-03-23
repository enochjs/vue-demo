<script setup lang="ts">

import { RouterView , RouterLink} from 'vue-router';

</script>

<template>

  <div class="wrapper">
    <h2>Vue3.2 Composition API</h2>
    <div class="nav">
      <RouterLink to="/news" active-class="active"> news </RouterLink>
      <RouterLink to="/about" active-class="active"> about</RouterLink>
      <RouterLink to="/home" active-class="active">home</RouterLink>
    </div>
    <div class="content">
      <RouterView />

    </div>
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
