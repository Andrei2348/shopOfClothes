<template>
  <Subscribe />
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__menu-items--list">
          <h3 class="footer__menu-title">Помощь</h3>
          <ul class="footer__menu-items">
            <li class="footer__menu-item">Мой аккаунт</li>
            <li class="footer__menu-item">Где мой магазин</li>
            <li class="footer__menu-item">Доставка и Оплата</li>
            <li class="footer__menu-item">правила возврата</li>
            <li class="footer__menu-item">найти магазин</li>
            <li class="footer__menu-item">подобрать размер</li>
          </ul>
        </div>

        <div class="footer__menu-items--list">
          <h3 class="footer__menu-title">Каталог</h3>
          <ul class="footer__menu-items">
            <li class="footer__menu-item">новинки</li>
            <li class="footer__menu-item">одежда</li>
            <li class="footer__menu-item">Обувь</li>
            <li class="footer__menu-item">аксессуары</li>
            <li class="footer__menu-item">Любимые бренды</li>
            <li class="footer__menu-item">SALE%</li>
          </ul>
        </div>

        <div class="footer__menu-items--list">
          <h3 class="footer__menu-title">Компания</h3>
          <ul class="footer__menu-items">
            <li class="footer__menu-item">О нас</li>
            <li class="footer__menu-item">Философия бренда</li>
            <li class="footer__menu-item">Блог</li>
            <li class="footer__menu-item">контакты</li>
            <li class="footer__menu-item">Faq</li>
          </ul>
        </div>
      </div>
      <FooterCards />
    </div>
  </footer>
  <FooterCopy />
</template>
<script setup>
import Subscribe from './Subscribe.vue'
import FooterCards from './FooterCards.vue'
import FooterCopy from './FooterCopy.vue'
</script>

<style scoped>
.footer {
  padding-top: 80px;
  background-color: #dbdbdb;
  border-bottom: 1px solid #56565650;
}
.footer__wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  text-transform: uppercase;
  text-align: center;
}
.footer__menu-title {
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 30px;
  color: #1a1a1a;
}
.footer__menu-items--list {
  padding: 0 10px;
}
.footer__menu-item + .footer__menu-item {
  margin-top: 20px;
}
.footer__menu-item {
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  color: #1d1d1d;
  cursor: pointer;
}
</style>
