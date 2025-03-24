<template>

  <div class="love-talk">
    <button @click="handleClick">获取一句土味情话</button>
    <ul>
      <li v-for="item in loveTalkList" :key="item.id">{{ item.content }}</li>
    </ul>
  </div>

</template>
<script setup lang="ts">
import { useLoveTalkStore } from '../store/loveTalk';
import { storeToRefs } from 'pinia';

const loveTalkStore = useLoveTalkStore();

const { loveTalkList } = storeToRefs(loveTalkStore);

loveTalkStore.$subscribe(() => {
  console.log(loveTalkStore.loveTalkList);
  localStorage.setItem('loveTalkList', JSON.stringify(loveTalkStore.loveTalkList));
})


const handleClick = () => {
  loveTalkStore.getLoveTalk();
}
</script>
