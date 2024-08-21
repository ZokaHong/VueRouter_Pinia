import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => {
    return count.value * 2;
  });
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});

export const useNameStore = defineStore("name", () => {
  const age = ref(30);
  const doubleAge = computed(() => {
    return age.value * 2;
  });
  const increment = () => {
    age.value++;
  };
  return { age, doubleAge, increment };
});
