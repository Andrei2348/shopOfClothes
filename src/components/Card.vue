<!-- @format -->
<template>
  <div class="card">
    <div class="card__image-container">
      <img class="card__image" :src="imageUrl" alt="hudi" />
      <div class="card__status">New</div>
      <img
        class="card__heart"
        :src="
          !isFavorite
            ? '/public/icons/card_heart.svg'
            : '/public/icons/card_heartRed.svg'
        "
        alt="Heart"
        @click="onClickFavorite"
      />
    </div>
    <div class="card__content">
      <p class="card__price">{{ price }} ₽</p>
      <p class="card__brand">{{ brand }}</p>
      <p class="card__title">{{ title }}</p>
      <img
        class="card__bag"
        :src="!isAdded ? '/public/icons/card_bag.svg' : ''"
        alt="Bag"
        @click="onClcikAdd"
      />
    </div>
  </div>
</template>

<script setup>
  defineProps({
    id: Number,
    title: String,
    imageUrl: String,
    price: Number,
    brand: String,
    isFavorite: Boolean,
    favoriteId: Number,
    isAdded: Boolean,
    onClcikAdd: Function,
    onClickFavorite: Function,
  });
</script>

<style scoped>
  .card {
    display: flex;
    flex-direction: column;
    width: 300px;
    transition: all ease 0.5s;
    background-color: #fff;
  }
  .card:hover {
    -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    transform: translateY(-2px);
  }
  .card__image {
    display: block;
  }
  .card__image-container,
  .card__content {
    position: relative;
  }
  .card__content {
    padding: 10px;
  }
  .card__status {
    font-size: 14px;
    line-height: 1;
    font-weight: 600;
    color: #fff;
    padding: 5px 11px;
    background-color: #13ed1c;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .card__heart {
    position: absolute;
    display: block;
    height: 34px;
    width: 34px;
    right: 8px;
    top: 20px;
    cursor: pointer;
    z-index: 10;
  }
  .card__image-container {
    margin-bottom: 20px;
  }
  .card__price {
    font-size: 20px;
    font-weight: 600;
    line-height: 1;
    color: #1d1d1d;
    margin-bottom: 20px;
  }
  .card__brand,
  .card__title {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    color: #1d1d1d;
  }
  .card__brand {
    margin-bottom: 10px;
  }
  .card__bag {
    display: block;
    height: 24px;
    width: 24px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 10px;
  }
</style>
