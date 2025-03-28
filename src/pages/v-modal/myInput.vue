<template>
  <input type="text" :value="username" @input="handleInput" />
</template>
<script lang="ts" setup>
import { ref } from 'vue';

defineProps({
  username: {
    type: String,
    default: '',
  }
})

const emit = defineEmits(['update:username'])

const handleInput = (event: Event) => {
  emit('update:username', event.target?.value)
}

</script>

<style scoped></style>

