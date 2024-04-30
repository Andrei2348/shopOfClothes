<!-- @format -->

<script setup></script>

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
          <img class="header__logo" src="/public/icons/logo.svg" alt="" />
          <ul class="header__menu-items">
            <li class="header__menu-item">Sale</li>
            <li class="header__menu-item">Женщинам</li>
            <li class="header__menu-item">Мужчинам</li>
            <li class="header__menu-item">Детям</li>
          </ul>
          <ul class="header__profile-items">
            <li class="header__profile-item">
              <img src="/public/icons/search.svg" alt="Search" />
            </li>
            <li class="header__profile-item">
              <img src="/public/icons/user.svg" alt="User" />
            </li>
            <li class="header__profile-item">
              <img src="/public/icons/heart.svg" alt="Heart" />
            </li>
            <li class="header__profile-item">
              <img src="/public/icons/bag.svg" alt="Bag" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header__categories">
      <div class="container">
        <ul class="header__categories-items">
          <li class="header__categories-item"></li>
        </ul>
      </div>
    </div>
  </header>
</template>

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
</style>
