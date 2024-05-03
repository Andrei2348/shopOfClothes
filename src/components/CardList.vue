<!-- @format -->
<template>
  <div class="cards__header-wrapper">
    <h2 class="cards__title">Каталог товаров</h2>
    <select class="cards__select" @change="onChangeSelect">
      <option class="cards__select-option" value="name">По названию</option>
      <option class="cards__select-option" value="price">
        По цене (дешевые)
      </option>
      <option class="cards__select-option" value="-price">
        По цене (дорогие)
      </option>
    </select>
  </div>
  <div class="cards__wrapper">
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
      :onClcikAdd="onClcikAdd"
    />
  </div>
</template>

<script setup>
import Card from './Card.vue'

defineProps({
  items: Array,
})

const emit = defineEmits(['selectEvent'])
const onChangeSelect = (event) => {
  emit('selectEvent', event.target.value)
}

const onClcikAdd = () => {
  console.log('добавление в корзину')
}



// const onChangeSelect = (event) => {
//   console.log(event.target.value)
//   $emit('onChangeSelect', {
//     data: event.target.value,
//   })
// }
</script>

<style scoped>
.cards__title {
  /* ======= */
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
