<!-- @format -->
<template>
  <div class="cards__header-wrapper">
    <h2 class="cards__title">{{ pageTitle }}</h2>
    <FilterSelector @onChangeSelect="(data) => emit('onChangeSelect', data)" />
  </div>
  <div ref="parent" class="cards__wrapper">
    <Card
      v-for="item in items"
      :id="item.id"
      :key="item.id"
      :title="item.title"
      :price="item.price"
      :brand="item.brand"
      :isAdded="item.isAdded"
      :isFavorite="item.isFavorite"
      :imageUrl="item.imageUrl"
      :onClcikAdd="() => emit('addToCart', item)"
      :onClickFavorite="() => emit('addToFavorite', item)"
    />
  </div>
</template>

<script setup>
import Card from './Card.vue';
import { useAutoAnimate } from '@formkit/auto-animate/vue';
import FilterSelector from '../UI/FilterSelector.vue';

const [parent] = useAutoAnimate();
const emit = defineEmits(['onChangeSelect', 'addToFavorite', 'addToCart']);
defineProps({
  items: Array,
  pageTitle: String
});
</script>

<style scoped>
.cards__title {
  color: #1d1d1d;
  font-size: 38px;
  font-weight: 600;
  line-height: 38px;
}
.cards__wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
}
.cards__header-wrapper {
  margin-top: 240px;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cards__select {
  padding: 10px 16px;
  font-size: 14px;
  color: #565656;
  outline: none;
  border: 1px solid #565656;
  border-radius: 3px;
  background-color: #fff;
}
</style>
