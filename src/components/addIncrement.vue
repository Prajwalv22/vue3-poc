<template>
<h1>Counter: {{ count }}</h1>
  <button @click="increment">Increment</button>
  <button @click="Decrement">Decrement</button>

</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  
  setup() {
    // Create reactive `count` state using `ref()`
    const count = ref(Number(localStorage.getItem('count') || 0));

    // Function to increment count
    const increment = () => {
      count.value++;
      localStorage.setItem('count', count.value);
    };

    const Decrement = () => {
        count.value--;
      localStorage.setItem('count', count.value);
    }

    // Lifecycle hooks:
    // - After mounted, update localStorage if initial value is invalid
    onMounted(() => {
      if (isNaN(count.value)) {
        localStorage.setItem('count', 0);
        count.value = 0;
      }
    });

    // - Before unmounted, save count to localStorage
    onUnmounted(() => {
      localStorage.setItem('count', count.value);
    });

    // Return all used variables and functions
    return { count, increment, Decrement };
  },
}
</script>