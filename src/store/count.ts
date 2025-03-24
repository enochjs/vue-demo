import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCountStore = defineStore('count', {
  state: () => ({
    count: 0,
    school: '北京大学',
    address: '北京市海淀区',
  }),
  actions: {
    increment(n: number) {
      this.count += n;
    },
    decrement(n: number) {
      this.count -= n;
    },
  },
  getters: {
    getCount: (state) => state.count * 10,
  }
});
