import axios from "axios"
import { onMounted, reactive } from "vue"

export function useDog() {
  const dogList = reactive([
    'https://images.dog.ceo/breeds/pembroke/n02113023_1482.jpg'
  ])
  function addDog() {
    axios.get('https://dog.ceo/api/breed/pembroke/images/random').then(res => {
      return res.data.message
    }).then(url => {
      dogList.push(url)
    })
    // dogList.push('https://images.dog.ceo/breeds/pembroke/n02113023_1482.jpg')
  }

  onMounted(() => {
    addDog()
  })

  return {
    dogList,
    addDog
  }
}
