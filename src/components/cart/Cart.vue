<!-- @format -->
<template>
  <div class="cart__title-wrapper">
    <h2 class="cart__title">Корзина</h2>
    <router-link to="/">
      <div class="cart__button">На главную</div>
    </router-link>
  </div>
  <div class="cart__wrapper">
    <div class="cart__info" ref="parent">
      <ClientInfo v-if="totalCount !== 0" />
      <Delivery />
    </div>

    <div class="cart__header" v-if="totalCount !== 0">
      <ul class="cart__header-items">
        <li class="cart__header-item">Фото</li>
        <li class="cart__header-item">Цвет</li>
        <li class="cart__header-item">Размер</li>
        <li class="cart__header-item">Цена</li>
        <li class="cart__header-item">Количество</li>
        <li class="cart__header-item">Сумма</li>
      </ul>
      <CartItemList />
      <div class="cart__footer">
        <div class="cart__footer-content">
          <span>Количество</span>
          <div class="cart__footer-line"></div>
          <span class="cart__footer-value">{{ totalCount }} товаров</span>
        </div>
        <div class="cart__footer-content">
          <span>Стоимость</span>
          <div class="cart__footer-line"></div>
          <span class="cart__footer-value">{{ totalPrice }} ₽</span>
        </div>
        <div class="cart__footer-content">
          <span>Скидка</span>
          <div class="cart__footer-line"></div>
          <span class="cart__footer-value">{{ discount }} %</span>
        </div>
        <div class="cart__footer-content cart__footer-content--result">
          <span>Итого</span>
          <div class="cart__footer-line"></div>
          <span class="cart__footer-value">{{ totalSum }} ₽</span>
        </div>

        <button class="cart__button" @click="() => createOrder()">
          Оформить заказ
        </button>
      </div>
    </div>
    <CartInfo v-else />
  </div>
</template>

<script setup>
import { inject, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useAutoAnimate } from '@formkit/auto-animate/vue'
import CartItemList from './CartItemList.vue'
import CartInfo from './CartInfo.vue'
import Delivery from './Delivery.vue'
import ClientInfo from './ClientInfo.vue'

const [parent] = useAutoAnimate()
const store = useStore()
const router = useRouter()
const { createOrder, totalPrice, totalCount, totalSum, discount } =
  inject('cart')
const isLogin = computed(() => store.state.isLogin)
watch(isLogin, () => {
  if (!store.state.isLogin) {
    router.push({ name: 'home' })
  }
})
</script>

<style scoped>
.cart__wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.cart__title-wrapper {
  margin-top: 240px;
  position: relative;
}
.cart__title {
  color: #1d1d1d;
  font-size: 38px;
  font-weight: 600;
  line-height: 48px;
  margin-bottom: 32px;
}
.cart__header-items {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  border-bottom: 1px solid #dededb;
  padding-bottom: 30px;
  grid-column-gap: 20px;
}
.cart__header-item {
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
  color: #1d1d1d;
  text-align: left;
}
.cart__footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: #565656;
  font-size: 14px;
  font-weight: 1;
  line-height: 18px;
  letter-spacing: 4, 5%;
  font-weight: 400;
  margin-bottom: 20px;
}
.cart__footer {
  margin-top: 30px;
  padding-bottom: 80px;
  position: relative;
}
.cart__footer-content--result {
  font-weight: 500;
  text-transform: uppercase;
  color: #1d1d1d;
}
.cart__footer-content--result .cart__footer-value {
  font-size: 30px;
  font-weight: 600;
  line-height: 1;
  color: #1d1d1d;
}
.cart__footer-line {
  border-bottom: 1px dotted #565656;
  flex: 1 0;
}
.cart__button {
  display: inline-block;
  background-color: #565656;
  padding: 18px 38px 16px;
  border: none;
  border-radius: 50px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
