<template>
  <div>
    <div>Hello Vue!</div>
    <div>Count: {{ count }}</div>
    <div>Double: {{ double }}</div>
    <button @click="increment">Increment</button>
  </div>
</template>
<script lang="ts" setup>
  import { computed, ref } from 'vue';

  const count = ref(0);
  const double = computed(() => count.value * 2);
  const increment = () => {
    count.value++;
  };
</script>
