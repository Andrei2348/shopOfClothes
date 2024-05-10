<!-- @format -->
<template>
  <main class="main">
    <Header
      @searchEvent="onChangeSearchInput"
      @openCart="openCart"
      :totalCount="totalCount"
    />
    <div class="container">
      <CardList
        :items="items"
        @selectEvent="onChangeSelect"
        @addToFavorite="addToFavorite"
        @addToCart="addToCart"
      />
      <Cart
        v-if="cartOpen"
        @closeCart="closeCart"
        @createOrder="createOrder"
        :totalPrice="totalPrice"
        :totalCount="totalCount"
        :discount="discount"
        :totalSum="totalSum"
        :disabledButton="cartButtonDisabled"
      />
    </div>
  </main>
</template>

<script setup>
import { onMounted, computed, ref, reactive, watch, provide } from 'vue'
import axios from 'axios'
import Header from './components/Header.vue'
import CardList from './components/CardList.vue'
import Cart from './components/Cart.vue'

const items = ref([])
const cart = ref([])
const isCreatingOrder = ref(false)

// Реактивность для объекта
const filters = reactive({
  sortBy: 'title',
  searchQuery: '',
})

const cartOpen = ref(false)
const discount = 10

// Функция открытия корзины
const openCart = () => {
  cartOpen.value = true
}

// Функция закрытия корзины
const closeCart = () => {
  cartOpen.value = false
}

// Работа с корзиной (стоимость и количество товаров)
const onClickPlus = (item) => {
  item.count++
  getSum(item)
}

const onClcikMinus = (item) => {
  item.count--
  if (item.count < 1) {
    item.count = 1
  }
  getSum(item)
}

function getSum(item) {
  item.sum = item.count * item.price
}

// Функция вычисления итоговой стоимости
const totalPrice = computed(() =>
  cart.value.reduce((acc, item) => acc + item.sum, 0)
)

// Функция вычисления итогового количества
const totalCount = computed(() =>
  cart.value.reduce((acc, item) => acc + item.count, 0)
)

// Функция вычисления итоговой суммы с учетом скидки
const totalSum = computed(
  () => totalPrice.value - (totalPrice.value * discount) / 100
)

// Отключение кнопки оформления закааза при отправке заказа или если корзина пустая
const cartIsEmpty = computed(() => cart.value.length === 0)
const cartButtonDisabled = computed(
  () => isCreatingOrder.value || cartIsEmpty.value
)

// Функция сортировки
const onChangeSelect = (data) => {
  filters.sortBy = data
}

const onChangeSearchInput = (data) => {
  filters.searchQuery = data
}
// ============ Orders ===============
const createOrder = async () => {
  try {
    isCreatingOrder.value = true
    const { data } = await axios.post(
      `https://78f27ce1435ab43d.mokky.dev/orders`,
      {
        items: cart.value,
        totalCount: totalCount.value,
        totalSum: totalSum.value,
      }
    )
    // При оформлении заказа очищаем корзину
    cart.value = []
    return data
  } catch (error) {
    console.log(error)
  } finally {
    isCreatingOrder.value = false
  }
}

const addToCart = (item) => {
  // Если в корзине нет выбранного товара, добавляем в корзину товар, иначе удаляем
  item.isAdded = !item.isAdded
  if (item.isAdded) {
    const obj = {
      ...item,
      sum: item.price,
      count: 1,
    }
    cart.value.push(obj)
  } else {
    cart.value.splice(cart.value.indexOf(item), 1)
  }
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

// Если корзина меняется:
watch(
  cart,
  () => {
    items.value = items.value.map((item) => ({
      ...item,
      isAdded: false,
    }))
  },
  // {
  //   deep: true,
  // }
)

provide('cart', { cart, addToCart, onClickPlus, onClcikMinus })
</script>

<style scoped></style>
