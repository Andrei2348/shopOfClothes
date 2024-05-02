<!-- @format -->

<template>
  <div class="cart__wrapper">
    <img class="card__image" :src="imageUrl" alt="hudi" />
    <p class="cart__color">{{ color }}</p>
    <p class="cart__size">{{ size }}</p>
    <p class="card__price">{{ price }} ₽</p>
    <p class="cart__count">{{ count }}</p>
    <p class="card__sum">{{ sum }}</p>
    <div class="card__button">Удалить товар</div>
  </div>
</template>

<script setup>
defineProps({
  imageUrl: String,
  color: String,
  size: String,
  price: Number,
  count: Number,
  sum: Number
});
</script>

<style scoped>
.cart__wrapper {
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  position: relative;
}
.card__button {
  display: inline-block;
  background-color: #565656;
  padding: 13px 22px;
  border-radius: 50px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  text-align: center;
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
}
</style>
