<!-- @format -->
<template>
  <!-- <h1>{{ count }}</h1>
  <button @click="increment">+</button>
   <input @input="updateCount">
  <input v-model="count" /> -->

  <main class="main">
    <Header />

    <div class="container">
      <CardList :items="items" @selectEvent="onChangeSelect" />
      <Cart />
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref, reactive, watch } from 'vue'
import axios from 'axios'
import Header from './components/Header.vue'
import CardList from './components/CardList.vue'
import Cart from './components/Cart.vue'

// const count = ref(0);

// function increment() {
//   count.value++;
//   console.log(count);
// }

// function updateCount(event) {
//   count.value = Number(event.target.value);
// }

const items = ref([])
// Реактивность для объекта
const filters = reactive({
  sortBy: '',
  searchQuery: ''
})

// const sortBy = ref('')
// const searchQuery = ref('')

// Функция сортировки
const onChangeSelect = (data) => {
  filters.sortBy = data
}

onMounted(async () => {
  try {
    const { data } = await axios.get('https://78f27ce1435ab43d.mokky.dev/items')
    items.value = data
  } catch (error) {
    console.log(error)
  }
})

// Фильтрация
watch(filters, async () => {
  try {
    const { data } = await axios.get(
      'https://78f27ce1435ab43d.mokky.dev/items?sortBy=' + filters.sortBy
    )
    items.value = data
  } catch (error) {
    console.log(error)
  }
})
</script>

<style scoped></style>
