<template>
  <div class="modal__layer">
    <div class="modal__form-wrapper">
      <div class="modal__close-button" @click="() => emit('openModal')">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.545 1.45459L1.4541 14.5455"
            stroke="#565656"
            stroke-width="1.5"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
          <path
            d="M14.545 14.5455L1.4541 1.45459"
            stroke="#565656"
            stroke-width="1.5"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <ModalLogin />
    </div>
  </div>
</template>
<script setup>
import ModalLogin from './ModalLogin.vue'

const emit = defineEmits(['openModal'])
</script>

<style scoped>
.modal__layer {
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #21212142;
  z-index: 1100;
}
.modal__form-wrapper {
  width: 476px;
  background-color: #fff;
  padding: 48px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.modal__close-button {
  position: absolute;
  display: inline-block;
  top: 16px;
  right: 16px;
  cursor: pointer;
}
</style>
