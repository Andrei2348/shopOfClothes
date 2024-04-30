<!-- @format -->

<script setup>
import { ref } from 'vue';
import Header from './components/Header.vue';
import CardList from './components/CardList.vue';
import Cart from './components/Cart.vue'


// const count = ref(0);

// function increment() {
//   count.value++;
//   console.log(count);
// }

// function updateCount(event) {
//   count.value = Number(event.target.value);
// }
</script>

<template>
  <!-- <h1>{{ count }}</h1>
  <button @click="increment">+</button>
   <input @input="updateCount">
  <input v-model="count" /> -->

  <main class="main">
    <Header />

    <div class="container">
      <CardList />
      <Cart />
    </div>
  </main>
</template>

<style scoped>

</style>
