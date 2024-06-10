<template>
  <div class="modal__layer" @click="() => emit('openModal')">
    <div class="modal__form-wrapper" @click.stop>
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

      <ModalLogin
        v-if="switcher === 'login'"
        @switchToRegister="switcher = 'register'"
        @loginUser="loginUser"
      />

      <ModalRegister
        v-if="switcher === 'register'"
        @switchToLogin="switcher = 'login'"
        @registerUser="registerUser"
      />

      <ModalAlert v-if="switcher === 'alert'" :message="message" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useStore } from 'vuex'
import ModalLogin from './ModalLogin.vue'
import ModalRegister from './ModalRegister.vue'
import ModalAlert from './ModalAlert.vue'
import messagesInfo from './mess.js'
import { saveJWT } from './../secure/secure.js'

const store = useStore()
const switcher = ref('login')
const message = ref('')
const emit = defineEmits(['openModal', 'setFlagLogin'])

const switchAlertModal = (mess) => {
  switcher.value = 'alert'
  message.value = mess
}

const saveLoginPersonal = (data) => {
  saveJWT(data.token)
  store.commit('setPersonObject', data.data)
  emit('setFlagLogin', true)
}

const loginUser = async (result) => {
  try {
    const { data } = await axios.post(
      'https://78f27ce1435ab43d.mokky.dev/auth',
      result
    )
    saveLoginPersonal(data)
    switchAlertModal(messagesInfo[2])
    return data
  } catch (error) {
    console.log(error)
  }
}

const registerUser = async (result) => {
  try {
    const { data } = await axios.post(
      'https://78f27ce1435ab43d.mokky.dev/register',
      JSON.stringify(result)
    )
    switchAlertModal(messagesInfo[0])
    saveLoginPersonal(data)
    return data
  } catch (error) {
    switchAlertModal(messagesInfo[1])
    console.log(error)
  }
}
</script>

<style scoped>
.modal__layer {
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
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
