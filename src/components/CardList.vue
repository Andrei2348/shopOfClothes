<!-- @format -->

<script setup>
import Card from './Card.vue';

const onClcikAdd = () => {
  console.log('добавление в корзину');
};
const onClcikFavorite = () => {
  console.log('добавление в закладки');
};
</script>

<template>
  <h2 class="cards__title">Каталог товаров</h2>
  <div class="cards__wrapper">
    <Card
      title="Зип худи шерпа с капюшоном (белый)"
      :price="3800"
      brand="Stone Island"
      :isAdded="true"
      :isFavorite="false"
      imageUrl="./public/products/hudi.jpg"
      :onClcikAdd="onClcikAdd"
      :onClcikFavorite="onClcikFavorite"
    />
    <Card
      title="Зип худи шерпа с капюшоном (белый)"
      :price="3800"
      brand="Stone Island"
      :isAdded="true"
      :isFavorite="false"
      imageUrl="./public/products/hudi.jpg"
      :onClcikAdd="onClcikAdd"
      :onClcikFavorite="onClcikFavorite"
    />
    <Card
      title="Зип худи шерпа с капюшоном (белый)"
      :price="3800"
      brand="Stone Island"
      :isAdded="true"
      :isFavorite="false"
      imageUrl="./public/products/hudi.jpg"
      :onClcikAdd="onClcikAdd"
      :onClcikFavorite="onClcikFavorite"
    />
    <Card
      title="Зип худи шерпа с капюшоном (белый)"
      :price="3800"
      brand="Stone Island"
      :isAdded="true"
      :isFavorite="false"
      imageUrl="./public/products/hudi.jpg"
      :onClcikAdd="onClcikAdd"
      :onClcikFavorite="onClcikFavorite"
    />
    <Card
      title="Зип худи шерпа с капюшоном (белый)"
      :price="3800"
      brand="Stone Island"
      :isAdded="true"
      :isFavorite="false"
      imageUrl="./public/products/hudi.jpg"
      :onClcikAdd="onClcikAdd"
      :onClcikFavorite="onClcikFavorite"
    />
    <Card
      title="Зип худи шерпа с капюшоном (белый)"
      :price="3800"
      brand="Stone Island"
      :isAdded="true"
      :isFavorite="false"
      imageUrl="./public/products/hudi.jpg"
      :onClcikAdd="onClcikAdd"
      :onClcikFavorite="onClcikFavorite"
    />
    <Card
      title="Зип худи шерпа с капюшоном (белый)"
      :price="3800"
      brand="Stone Island"
      :isAdded="true"
      :isFavorite="false"
      imageUrl="./public/products/hudi.jpg"
      :onClcikAdd="onClcikAdd"
      :onClcikFavorite="onClcikFavorite"
    />
  </div>
</template>

<style scoped>
.cards__title {
  margin-top: 240px;
  /* ======= */
  color: #1d1d1d;
  font-size: 38px;
  font-weight: 600;
  line-height: 38px;
  margin-bottom: 32px;
}
.cards__wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
}
</style>
