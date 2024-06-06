<!-- @format -->

<template>
  <MainStartPage />
  <CardList
    :items="items"
    pageTitle="Каталог товаров"
    @addToFavorite="addToFavorite"
    @addToCart="addToCart"
    @onChangeSelect="onChangeSelect"
  />
</template>

<script setup>
import axios from 'axios'
import { reactive, ref, inject, watch, onMounted } from 'vue'
import CardList from './CardList.vue'
import MainStartPage from '../main/MainStartPage.vue'
const { cart, addToCart } = inject('cart')

const filters = reactive({
  sortBy: 'title',
  searchQuery: '',
})

const items = ref([])
// Поиск товара
const searchData = inject('search')
watch(searchData, (searchValue) => {
  filters.searchQuery = searchValue.data
})

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
        ...item,
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
      const favorObj = {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id,
      }
      return favorObj
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
    // Для всех товаров присваиваем значения:
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

const getAllCards = async () => {
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
}

// Фильтрация
watch(filters, getAllCards)

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

onMounted(getAllCards)
</script>
