<!-- @format -->
<template>
  <header class="header">
    <div class="header__title">
      <div class="container">
        <h1 class="header__title-text">
          Lorem ipsum is placeholder text commonly used -20%
        </h1>
      </div>
    </div>
    <div class="header__wrapper">
      <div class="container">
        <div class="header__content">
          <router-link to="/">
            <img class="header__logo" src="/public/icons/logo.svg" alt="" />
          </router-link>
          <ul class="header__menu-items">
            <li class="header__menu-item">Sale</li>
            <li class="header__menu-item">Женщинам</li>
            <li class="header__menu-item">Мужчинам</li>
            <li class="header__menu-item">Детям</li>
          </ul>
          <ul class="header__profile-items">
            <li class="header__profile-item">
              <input
                :class="[switcher ? 'visible' : '']"
                type="text"
                class="header__profile-search"
                placeholder="Поиск..."
                @input="onChangeSearchInput"
              />
              <img
                class="header__profile-item--icon"
                src="/public/icons/search.svg"
                alt="Search"
                @click="showSearchInput"
              />
            </li>
            <li class="header__profile-item">
              <img
                class="header__profile-item--icon"
                src="/public/icons/user.svg"
                alt="User"
              />
            </li>
            <li class="header__profile-item">
              <router-link to="/favorites">
                <img
                  class="header__profile-item--icon"
                  src="/public/icons/heart.svg"
                  alt="Heart"
                />
                <InfoCount />
              </router-link>
            </li>
            <li class="header__profile-item">
              <router-link to="/cart">
                <img
                  class="header__profile-item--icon"
                  src="/public/icons/bag.svg"
                  alt="Bag"
                  @click="() => emit('openCart')"
                />
                <InfoCount :totalCount="totalCount" />
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header__categories">
      <div class="container">
        <ul class="header__categories-items">
          <li class="header__categories-item">новинки</li>
          <li class="header__categories-item">одежда</li>
          <li class="header__categories-item">Обувь</li>
          <li class="header__categories-item">аксессуары</li>
          <li class="header__categories-item">Любимые бренды</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import InfoCount from '../UI/InfoCount.vue'
const switcher = ref(false)
defineProps({
  totalCount: Number,
  totalFavorCount: Number
})

const emit = defineEmits(['searchEvent', 'openCart'])
const onChangeSearchInput = (event) => {
  emit('searchEvent', event.target.value)
}
const showSearchInput = () => {
  switcher.value = !switcher.value
}
</script>

<style scoped>
.header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 30;
}
.header__title-text {
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  padding: 18px 0 20px;
  color: #565656;
  text-align: center;
  text-transform: uppercase;
  background-color: #fff;
}
.header__wrapper {
  background-color: #1d1d1d;
}
.header__logo {
  height: 24px;
  width: 53px;
  margin-right: 103px;
}
.header__menu-items,
.header__profile-items {
  display: flex;
  align-items: center;
}
.header__profile-items {
  gap: 20px;
}
.header__menu-item {
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  color: #fff;
  text-transform: uppercase;
  padding: 29px 34px;
  position: relative;
}
.header__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__profile-item,
.header__menu-item {
  cursor: pointer;
}
.header__profile-item {
  position: relative;
}
.header__categories {
  background: #fff;
}
.header__categories-items {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 22px;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  color: #565656;
  cursor: pointer;
  text-transform: uppercase;
  gap: 24px;
}
.header__profile-item--icon {
  height: 24px;
  width: 24px;
  display: inline-block;
}
.header__profile-search {
  font-size: 16px;
  padding: 0px 10px;
  position: absolute;

  top: 50%;
  transform: translateY(-50%);
  left: -160px;
  border: none;
  border-radius: 4px;
  background: #565656;
  color: #fff;
  outline: none;
  transition: ease all 1s;
  opacity: 0;
  width: 150px;
  height: 0;
  visibility: hidden;
}
.header__profile-search.visible {
  height: 100%;
  padding: 6px;
  padding-bottom: 6px;
  opacity: 1;
  visibility: visible;
}
</style>
