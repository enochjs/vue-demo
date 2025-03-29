<<<<<<< HEAD
<!--
默认插槽
=======
>>>>>>> a242c2edbbec820cdd078cf8f49b47c2d745f511
<template>
<h3>{{ title }}</h3>
<div class="content">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
defineProps(['title']);
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
<<<<<<< HEAD
</style> -->

<template>
  <h3>{{ title }}</h3>
  <div class="content">
      <slot name="slot"></slot>
    </div>
  </template>

  <script setup lang="ts">
  import { defineProps } from 'vue';
  defineProps(['title']);
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
=======
</style>
>>>>>>> a242c2edbbec820cdd078cf8f49b47c2d745f511
