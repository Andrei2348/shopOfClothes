<!-- @format -->

<template>
  <div class="cart__wrapper">
    <img class="cart__image" :src="imageUrl" :alt="title" />
    <p class="cart__text">{{ color }}</p>
    <p class="cart__text">{{ size }}</p>
    <p class="cart__text cart__price">{{ price }} ₽</p>
    <div class="cart__count-wrapper">
      <img
        class="cart__count-button"
        src="/public/icons/vector_left.svg"
        alt="left button"
        @click="emit('onClcikMinus')"
      />
      <p class="cart__text cart__price">{{ count }}</p>
      <img
        class="cart__count-button"
        src="/public/icons/vector_right.svg"
        alt="left button"
        @click="emit('onClickPlus')"
      />
    </div>
    <p class="cart__text cart__price">{{ sum }} ₽</p>
    <div
      class="cart__button cart__delete-button"
      @click="emit('onClickRemove')"
    >
      Удалить товар
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imageUrl: String,
  title: String,
  color: String,
  size: String,
  price: Number,
  sum: Number,
  count: Number,
})

const emit = defineEmits(['onClickRemove', 'onClickPlus', 'onClcikMinus'])
</script>

<style scoped>
.cart__wrapper {
  margin-top: 30px;
  padding-bottom: 30px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  position: relative;
  grid-column-gap: 30px;
  border-bottom: 1px solid #dededb;
}
.cart__button {
  display: inline-block;
  background-color: #565656;
  padding: 18px 38px 16px;
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
.cart__delete-button {
  bottom: 30px;
}
.cart__text {
  color: #565656;
  font-weight: 400;
  line-height: 1;
  font-size: 14px;
  text-align: left;
}
.cart__price {
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  color: #1d1d1d;
}

.cart__image {
  width: 60%;
}
.cart__count-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 14px;
  gap: 17px;
}
.cart__count-button {
  cursor: pointer;
  height: 12px;
  width: 10px;
}
</style>
