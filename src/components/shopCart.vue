<template>
  <div>
    <h2>Shopping Cart</h2>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }} - Qty: {{ item.quantity }}
        <button @click="incrementQuantity(item)">Increment</button>
        <button @click="decrementQuantity(item)">Decrement</button>
      </li>
    </ul>
    <p>Total Price: {{ totalPrice }}</p>
  </div>
</template>

<script>
import { ref, computed, onMounted, inject, watch } from 'vue';

// Custom hook for price calculation
function calculatePrice(item) {
  return item.price * item.quantity;
}

export default {
  setup() {
    const productService = inject('ProductService');

    const items = ref([]);

    const totalPrice = computed(() => {
      return items.value.reduce((sum, item) => sum + calculatePrice(item), 0);
    });

    const addToCart = (item) => {
      const existingItem = items.value.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        items.value.push({ ...item, quantity: 1 });
      }
    };

    const removeFromCart = (item) => {
      const existingItem = items.value.find((i) => i.id === item.id);
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
      } else {
        items.value = items.value.filter((i) => i.id !== item.id);
      }
    };

    onMounted(() => {
      productService.products.forEach(addToCart);
      console.log('onMOUNTED', productService);
    });

    watch(items, (newValue) => {
      localStorage.setItem('cart', JSON.stringify(newValue));
    }, { deep: true });

    return {
      items,
      addToCart,
      removeFromCart,
      totalPrice,
      incrementQuantity: addToCart,
      decrementQuantity: removeFromCart,
    };
  },
};
</script>
