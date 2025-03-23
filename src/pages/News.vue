<script setup lang="ts" name="News">
import { reactive } from 'vue';

const newsList = reactive([
  {
    id: 1,
    title: 'news1',
    content: 'news1 content'
  },
  {
    id: 2,
    title: 'news2',
    content: 'news2 content'
  },
  {
    id: 3,
    title: 'news3',
    content: 'news3 content'
  }
])

</script>

<template>
  <ul>
    <li v-for="news in newsList" :key="news.id">
      <!-- <RouterLink :to="`/news/detail?id=${ news.id }&title=${news.title}&content=${news.content}`">{{ news.title }}</RouterLink> -->
       <RouterLink :to="{
        path: '/news/detail',
        query: {
          id: news.id,
          title: news.title,
          content: news.content
        }
       }">{{ news.title }}</RouterLink>
    </li>
  </ul>
  <div class="news-content">
    <RouterView />
  </div>
</template>

<style scoped>

</style>
