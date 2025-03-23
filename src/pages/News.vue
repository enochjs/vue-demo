<script setup lang="ts" name="News">
import { onMounted, reactive } from 'vue';
import {  useRouter } from 'vue-router';

const router = useRouter();

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

onMounted(() => {
  console.log('News mounted');
  setTimeout(() => {
    router.push({
      name: 'Detail',
      params: {
        id: 3,
        title: 'news3',
        content: 'news3 content'
      }
    })
  }, 3000);
})

const handleDetail = (news: any) => {
  router.push({
    name: 'Detail',
    params: {
      id: news.id,
      title: news.title,
      content: news.content
    }
  })
}

</script>

<template>
  <ul>
    <li v-for="news in newsList" :key="news.id">
      <button @click="handleDetail(news)">查看详情</button>
      <!-- <RouterLink :to="`/news/detail?id=${ news.id }&title=${news.title}&content=${news.content}`">{{ news.title }}</RouterLink> -->
       <RouterLink :to="{
        // path: `/news/detail/${ news.id }/${ news.title }/${ news.content }`,
        name: 'Detail',
        params: {
          id: news.id,
          title: news.title,
          content: news.content
        }
        // query: {
        //   id: news.id,
        //   title: news.title,
        //   content: news.content
        // }
       }">{{ news.title }}</RouterLink>
    </li>
  </ul>
  <div class="news-content">
    <RouterView />
  </div>
</template>

<style scoped>

</style>
