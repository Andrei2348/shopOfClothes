<!-- @format -->

<script setup>
import { ref } from 'vue';
import Header from './components/Header.vue';
// const count = ref(0);

// function increment() {
//   count.value++;
//   console.log(count);
// }

// function updateCount(event) {
//   count.value = Number(event.target.value);
// }
</script>

<template>
  <!-- <h1>{{ count }}</h1>
  <button @click="increment">+</button>
   <input @input="updateCount">
  <input v-model="count" /> -->

  <main class="main">
    <Header />

    <div class="container">
      <div class="card">
        <div class="card__image-container">
          <img class="card__image" src="/public/products/hudi.jpg" alt="hudi" />
          <div class="card__status">New</div>
          <img
            class="card__heart"
            src="/public/icons/card_heart.svg"
            alt="Heart"
          />
        </div>
        <div class="card__content">
          <p class="card__price">3990 ₽</p>
          <p class="card__brand">Stone Island</p>
          <p class="card__title">Зип худи шерпа с капюшоном (белый)</p>
          <img class="card__bag" src="/public/icons/card_bag.svg" alt="Bag" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 300px;
  transition: all ease 0.5s;
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
  padding-bottom: 10px;
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
  right: 0;
}
</style>
