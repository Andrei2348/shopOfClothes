<!-- @format -->
<template>
  <!-- <h1>{{ count }}</h1>
  <button @click="increment">+</button>
   <input @input="updateCount">
  <input v-model="count" /> -->

  <main class="main">
    <Header @searchEvent="onChangeSearchInput" />
    <div class="container">
      <CardList :items="items" @selectEvent="onChangeSelect" />
      <Cart />
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref, reactive, watch, provide } from 'vue'
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
  sortBy: 'title',
  searchQuery: '',
})

// const sortBy = ref('')
// const searchQuery = ref('')

// Функция сортировки
const onChangeSelect = (data) => {
  filters.sortBy = data
}

const onChangeSearchInput = (data) => {
  filters.searchQuery = data
}

const addToFavorite = async (item) => {
  try {
    // Если в isFavorite присвоено true, заносим в бд, иначе удаляем из бд
    if (item.isFavorite) {
      const obj = {
        parentId: item.id,
      }
      const { data } = await axios.post(
        `https://78f27ce1435ab43d.mokky.dev/favorites`,
        obj
      )
      item.favoriteId = data.id
      console.log('returned data=', item)
    } else {
      // await axios.delete(`https://78f27ce1435ab43d.mokky.dev/favorites/`, {
      //   data: { parentId: item.parentId },
      // })
      item.favoriteId = null
    }
  } catch (error) {
    console.log(error)
  }
  console.log('resultItem=', item)
}

const fetchFavorites = async () => {
  console.log('favorites')
  try {
    const { data: favorites } = await axios.get(
      `https://78f27ce1435ab43d.mokky.dev/favorites`
    )
    items.value = items.value.map((item) => {
      const favorite = favorites.find(
        (favorite) => favorite.parentId === item.id
      )
      console.log('items from favorites=', favorite)
      if (!favorite) {
        return item
      }
      return {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id,
      }
    })
  } catch (error) {
    console.log(error)
  }
}

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy,
    }
    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }
    const { data } = await axios.get(
      `https://78f27ce1435ab43d.mokky.dev/items`,
      { params }
    )
    // Для всех товаров назначаем значения:
    items.value = data.map((obj) => ({
      ...obj,
      isFavorite: false,
      favoriteId: null,
      isAdded: false,
    }))
    console.log('data from items=', items.value)
    fetchFavorites()
  } catch (error) {
    console.log(error)
  }
}

onMounted(fetchItems)

// Фильтрация
watch(filters, fetchItems)
provide('addToFavorite', addToFavorite)
</script>

<style scoped></style>
