<!-- @format -->
<template>
  <CartItem
    v-for="item in cart"
    :key="item.id"
    :title="item.title"
    :price="item.price"
    :image-url="item.imageUrl"
    :size="item.size"
    :color="item.color"
    :sum="item.sum"
    :count="item.count"
    @onClickRemove="() => addToCart(item)"
    @onClickPlus="() => onClickPlus(item)"
    @onClcikMinus="() => onClcikMinus(item)"
  />
</template>

<script setup>
import { inject } from 'vue'
import CartItem from './CartItem.vue'

const { cart, addToCart, onClickPlus, onClcikMinus } = inject('cart')
</script>
