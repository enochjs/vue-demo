import { defineStore } from "pinia";
import { ref } from "vue";

const useCountStore = defineStore('sumStore', () => {

  const sum = ref(0)

  const increase = () => {
    sum.value += 1
  }

  return {
    sum,
    increase
  }

})

export default useCountStore