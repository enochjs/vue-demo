import { defineStore } from 'pinia';
import { ref } from 'vue';
import { nanoid } from 'nanoid';
import axios from 'axios';
import { reactive } from 'vue';

// export const useLoveTalkStore = defineStore('loveTalk', {
//   state: () => ({
//     loveTalkList: JSON.parse(localStorage.getItem('loveTalkList') || '[]'),
//   }),
//   actions: {
//     getLoveTalk() {
//       axios.get('https://api.uomg.com/api/rand.qinghua?format=json').then(res => {
//         this.loveTalkList.unshift({
//           id: nanoid(),
//           content: res.data.content,
//         });
//       })
//     }
//   }
// });

export const useLoveTalkStore = defineStore('loveTalk', () => {
  const loveTalkList = reactive(JSON.parse(localStorage.getItem('loveTalkList') || '[]'));

  async function getLoveTalk() {
    axios.get('https://api.uomg.com/api/rand.qinghua?format=json').then(res => {
      loveTalkList.unshift({
        id: nanoid(),
        content: res.data.content,
      });
    })
  }

  return { loveTalkList, getLoveTalk };
});
