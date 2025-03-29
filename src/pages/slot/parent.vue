<template>
  <div class="father">
    <div class="content">
      <Category title="test">
        <template v-slot:slot>
          <ul>
            <li v-for="item in gameList" :key="item.id">
              <div>{{ item.name }}</div>
            </li>
          </ul>
        </template>
      </Category>
    </div>
    <div class="content">
      <Category title="test">
        <template v-slot:slot>
          <ol>
            <li v-for="item in gameList" :key="item.id">
              <div>{{ item.name }}</div>
            </li>
          </ol>
        </template>
      </Category>
    </div>
    <div class="content">
        <Category title="test">
          <template v-slot:slot>
            <h3 v-for="item in gameList" :key="item.id">
              <div>{{ item.name }}</div>
            </h3>
         </template>
        </Category>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import Category from './Category.vue';

const gameList = reactive([
  { id: 1, name: '游戏1' },
  { id: 2, name: '游戏2' },
  { id: 3, name: '游戏3' },
]);

</script>
<style scoped>
.father {
  display: flex;
  flex: 1;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-right: 10px;
  /* flex-direction: ; */
  justify-content: space-between;
}
.content {
  flex: 1;
  height: 400px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-right: 10px;
}
</style>
