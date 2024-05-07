<!-- @format -->

<template>
  <div class="cart__title-wrapper">
    <h2 class="cart__title">Корзина</h2>
    <div class="cart__button" @click="() => emit('closeCart')">На главную</div>
  </div>
  <div class="cart__header">
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
        <span class="cart__footer-value">7</span>
      </div>
      <div class="cart__footer-content">
        <span>Стоимость</span>
        <div class="cart__footer-line"></div>
        <span class="cart__footer-value">700 ₽</span>
      </div>
      <div class="cart__footer-content cart__footer-content--result">
        <span>Итого</span>
        <div class="cart__footer-line"></div>
        <span class="cart__footer-value">{{ totalPrice }} ₽</span>
      </div>

      <div class="cart__button" @click="() => emit('createOrder')">Оформить заказ</div>
    </div>
  </div>
</template>

<script setup>
import CartItemList from './CartItemList.vue'
const emit = defineEmits(['closeCart', 'createOrder'])

defineProps({
  totalPrice: Number,
})
</script>

<style scoped>
.cart__title-wrapper {
  margin-top: 240px;
  margin-bottom: 70px;
  /* ======= */
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
  grid-column-gap: 30px;
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
