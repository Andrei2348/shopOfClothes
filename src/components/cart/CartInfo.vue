<template>
  <div class="cartinfo__wrapper">
    <img class="cartinfo__image" src="/public/icons/Cart_big.png" alt="" />
    <h2 class="cartinfo__title">Корзина пуста!</h2>
    <p class="cartinfo__content">Добавьте товары в корзину.</p>
  </div>
</template>

<style scoped>
.cartinfo__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  padding-bottom: 70px;
}
.cartinfo__image {
  width: 200px;
  margin: 0 auto 30px auto;
}
.cartinfo__title {
  color: #1d1d1d;
  font-size: 38px;
  font-weight: 600;
  line-height: 38px;
  text-align: center;
  margin-bottom: 30px;
}
.cartinfo__content {
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  color: #565656;
  text-align: center;
}
</style>
