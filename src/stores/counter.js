import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => {return count.value * 2})
  const increment = watch()
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})