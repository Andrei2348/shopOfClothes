<!-- @format -->

<template>
  <span class="header__profile-item--info" v-if="totalCount > 0">
    {{ totalCount }}
  </span>
</template>

<script setup>
defineProps({ totalCount: Number })
</script>
<style scoped>
.header__profile-item--info {
  background-color: #ed1331;
  padding: 3px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  position: absolute;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  right: -8px;
  bottom: -7px;
}
</style>
