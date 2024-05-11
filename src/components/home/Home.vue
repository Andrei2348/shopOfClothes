<template>
  <CardList
    :items="items"
    @selectEvent="onChangeSelect"
    @addToFavorite="addToFavorite"
    @addToCart="addToCart"
  />
</template>

<script setup>
import CardList from './CardList.vue'
import axios from 'axios'
import { reactive, ref, inject, watch, onMounted } from 'vue'

const { cart, addToCart } = inject('cart')

const filters = reactive({
  sortBy: 'title',
  searchQuery: '',
})

const items = ref([])

// Функция сортировки
const onChangeSelect = (data) => {
  filters.sortBy = data
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

// Фильтрация
watch(filters, fetchItems)

// Если корзина меняется:
watch(cart, () => {
  items.value = items.value.map((item) => ({
    ...item,
    isAdded: false,
  }))
})

// Сохраняем все товары в корзине в localStorage
watch(
  cart,
  () => {
    localStorage.setItem('cart', JSON.stringify(cart.value))
  },
  { deep: true }
)

onMounted(async () => {
  // Достаем данные из локальной корзины (Если имеются)
  const localCart = localStorage.getItem('cart')
  cart.value = localCart ? JSON.parse(localCart) : []

  // Получаем списки товаров
  await fetchItems()
  await fetchFavorites()

  // Отмечаем товары из списка товаров, которые уже имеются в корзине
  items.value = items.value.map((item) => ({
    ...item,
    isAdded: cart.value.some((cartItem) => cartItem.id === item.id),
  }))
})
</script>
