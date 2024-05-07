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
    @onClickRemove="() => addToCart(item)"
  />
</template>

<script setup>
import { inject } from 'vue'
import CartItem from './CartItem.vue'

const { cart, addToCart } = inject('cart')
</script>
