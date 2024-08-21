<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import { useCounterStore, useNameStore } from "@/stores/counter";
const counterStore = useCounterStore();
const nameStore = useNameStore();
nameStore.name = 10;
</script>

<template>
  <main>
    {{ counterStore.count }}
    {{ nameStore.name }}
    <TheWelcome />
  </main>
</template>
