<!-- @format -->
<template>
  <main class="main">
    <transition name="modal">
      <Modal v-if="isModalOpen" @openModal="openModal" @setFlagLogin="setFlagLogin" />
    </transition>
    <Header
      @searchEvent="onChangeSearchInput"
      @openModal="openModal"
      @setFlagLogin="setFlagLogin"
      :totalCount="totalCount"
    />
    <div class="container">
      <RouterView />
    </div>
  </main>
  <Footer />
</template>

<script setup>
import { computed, ref, reactive, provide, onMounted, watch } from 'vue'
import axios from 'axios'
import { useStore } from 'vuex'
import Header from './components/header/Header.vue'
import Modal from './components/modals/Modal.vue'
import Footer from './components/footer/Footer.vue'
import { checkCookie } from './components/secure/secure.js'

const store = useStore()
const cart = ref([])
const search = reactive({
  data: '',
})
const discount = 10

// Работа с корзиной (подсчет стоимости и количества товаров)
const onClickPlus = (item) => {
  item.count++
  getSum(item)
}

const onClickMinus = (item) => {
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

const onChangeSearchInput = (data) => {
  search.data = data
}

// ============ Модальные окна ============
const isModalOpen = ref(false)
const isScrollDisabled = ref(false)

const openModal = () => {
  isModalOpen.value = !isModalOpen.value
  isScrollDisabled.value = !isScrollDisabled.value
}

// Запрет прокрутки
watch(isScrollDisabled, () => {
  isScrollDisabled.value
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = '')
})

// ============ Orders ===============
const createOrder = async () => {
  try {
    const { data } = await axios.post(
      `https://78f27ce1435ab43d.mokky.dev/orders`,
      {
        items: cart.value,
        totalCount: totalCount.value,
        totalSum: totalSum.value,
      }
    )
    // При оформлении заказа очищаем корзину и локальное хранилище корзины
    cart.value = []
    localStorage.setItem('cart', JSON.stringify([]))
    return data
  } catch (error) {
    console.log(error)
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
  localStorage.setItem('cart', JSON.stringify(cart.value))
}

const setFlagLogin = (item) => {
  store.commit('setLogin', item)
  if(item === false){
    document.cookie = `shopOfClothes=expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
  }
}

onMounted(async () => {
  // Достаем данные из локальной корзины (Если имеются)
  const localCart = localStorage.getItem('cart')
  cart.value = localCart ? JSON.parse(localCart) : []

  // Проверка существования JWT токена, и смена флага в хранилище
  setFlagLogin(checkCookie())
  // store.commit('setLogin', checkCookie())
  // checkCookie() ? commit('setLogin', true) : commit('setLogin', false)
  // store.commit('setLogin', true)
})

provide('cart', {
  cart,
  addToCart,
  onClickPlus,
  onClickMinus,
  createOrder,
  totalPrice,
  totalCount,
  discount,
  totalSum,
})
provide('search', search)
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.6s;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
  transition: opacity 0.6s;
}
</style>
