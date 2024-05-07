<!-- @format -->
<template>
  <main class="main">
    <Header @searchEvent="onChangeSearchInput" @openCart="openCart" />
    <div class="container">
      <CardList
        :items="items"
        @selectEvent="onChangeSelect"
        @addToFavorite="addToFavorite"
        @addToCart="addToCart"
      />
      <Cart v-if="cartOpen" @closeCart="closeCart" />
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
const cart = ref([])
// Реактивность для объекта
const filters = reactive({
  sortBy: 'title',
  searchQuery: '',
})

// const sortBy = ref('')
// const searchQuery = ref('')

const cartOpen = ref(false)

// Функция открытия корзины
const openCart = () => {
  cartOpen.value = true
}

// Функция закрытия корзины
const closeCart = () => {
  cartOpen.value = false
}

// Функция сортировки
const onChangeSelect = (data) => {
  filters.sortBy = data
}

const onChangeSearchInput = (data) => {
  filters.searchQuery = data
}

const addToCart = (item) => {
  // Если в корзине нет выбранного товара, добавляем в корзину товар, иначе удаляем
  if (!item.isAdded) {
    cart.value.push(item)
  } else {
    cart.value.splice(cart.value.indexOf(item), 1)
  }
  item.isAdded = !item.isAdded
  console.log(cart)
}

const addToFavorite = async (item) => {
  try {
    item.isFavorite = !item.isFavorite
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
    } else {
      await axios.delete(
        `https://78f27ce1435ab43d.mokky.dev/favorites/${item.favoriteId}`
      )
      item.favoriteId = null
    }
  } catch (error) {
    console.log(error)
  }
}

// Изменение списка товаров с учетом выбранных закладок
const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get(
      `https://78f27ce1435ab43d.mokky.dev/favorites`
    )
    items.value = items.value.map((item) => {
      const favorite = favorites.find(
        (favorite) => favorite.parentId === item.id
      )
      if (!favorite) {
        return item
      }
      const objective = {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id,
      }
      return objective
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
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  await fetchItems()
  await fetchFavorites()
})

// Фильтрация
watch(filters, fetchItems)
provide('cart', { cart })
</script>

<style scoped></style>
