<!-- @format -->

<template>
  <h2 class="cart__title">Корзина</h2>
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
  </div>
</template>

<script setup>
import CartItemList from './CartItemList.vue';
</script>

<style scoped>
.cart__title {
  margin-top: 240px;
  /* ======= */
  color: #1d1d1d;
  font-size: 38px;
  font-weight: 600;
  line-height: 38px;
  margin-bottom: 32px;
}
.cart__header-items {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  border-bottom: 1px solid #dededb;
  padding-bottom: 30px;
}
.cart__header-item {
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
  color: #1d1d1d;
  text-align: center;
}
</style>
