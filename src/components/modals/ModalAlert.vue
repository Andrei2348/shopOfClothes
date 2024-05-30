<template>
  <p class="modal__error-message">
    {{ message }}
  </p>
</template>

<script setup>
defineProps({
  message: String,
})
</script>

<style scoped>
.modal__error-message {
  font-size: 18px;
  line-height: 1.3;
  font-weight: 500;
  color: #1d1d1d;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
}
</style>
