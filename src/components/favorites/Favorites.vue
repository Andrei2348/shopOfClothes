<!-- @format -->
<template>
  <CardList
    pageTitle="Мои закладки"
    :items="favorites"
    @addToFavorite="addToFavorite"
    @addToCart="addToCart"
    @onChangeSelect="onChangeSelect"
  />
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref, reactive, inject, watch } from 'vue'
import CardList from '../home/CardList.vue'

const favorites = ref([])
const filters = reactive({
  sortBy: 'title',
  searchQuery: '',
})

const { addToCart } = inject('cart')

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
    await axios.delete(
      `https://78f27ce1435ab43d.mokky.dev/favorites/${item.id}`
    )
    showFavorites()
  } catch (error) {
    console.log(error)
  }
}

const showFavorites = async () => {
  try {
    const params = {
      sortBy: filters.sortBy,
    }
    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }
    const { data } = await axios.get(
      `https://78f27ce1435ab43d.mokky.dev/favorites`,
      { params }
    )
    favorites.value = data
  } catch (error) {
    console.log(error)
  }
}

watch(filters, showFavorites)
onMounted(showFavorites)
</script>
