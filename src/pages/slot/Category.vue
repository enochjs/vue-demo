<!--
默认插槽
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
