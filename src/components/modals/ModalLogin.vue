<!-- @format -->
<template>
  <h2 class="modal__form-title">Вход</h2>
  <form @submit.prevent="submitForm" class="modal__form">
    <div class="modal__login-input--wrapper">
      <label class="modal__input-label" for="email__input"
        >Введите ваш e-mail</label
      >
      <input
        class="modal__input"
        type="text"
        id="email__input"
        v-model.trim="v$.email.$model"
        placeholder="Введите ваш e-mail"
      />
      <span
        class="modal__input-error"
        v-for="err in v$.email.$errors"
        :key="err.$uid"
        >{{ err.$message }}</span
      >
    </div>

    <div class="modal__login-input--wrapper">
      <label class="modal__input-label" for="email__input"
        >Введите ваш пароль</label
      >
      <input
        class="modal__input"
        type="password"
        id="password__input"
        v-model="v$.password.$model"
        placeholder="Введите ваш пароль"
      />
      <!-- <span
        class="modal__input-error"
        v-for="err in v$.password.$errors"
        :key="err.$uid"
        >{{ err.$message }}</span
      > -->
      <p v-if="!v$.password.minLength">Длина</p>
      <p v-if="!v$.password.hasNumber">Цифры</p>
      <p v-if="!v$.password.hasLowerCaseLetter">Нижний регистр</p>
      <p v-if="!v$.password.hasCapitalCaseLetter">Верхний регистр</p>
    </div>
    <button
      class="modal__button-submit"
      :disabled="formValid"
      type="submit"
      onclick.prevent="submitForm"
    >
      Войти
    </button>
  </form>
</template>

<script>
import { reactive, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { email, required, minLength, helpers } from '@vuelidate/validators'
import {
  hasNumber,
  hasLowerCaseLetter,
  hasCapitalCaseLetter,
} from '../../validators/password.js'

export default {
  setup() {
    const auth = reactive({
      email: '',
      password: '',
    })

    const rules = computed(() => ({
      email: {
        email: helpers.withMessage('Неверный формат ввода пароля', email),
        required: helpers.withMessage(
          'Это поле не может быть пустым',
          required
        ),
      },
      password: {
        required: helpers.withMessage(
          'Это поле не может быть пустым',
          required
        ),
        minLength: helpers.withMessage(
          () => `Длина пароля должна быть не меньше 8 символов`,
          minLength(8)
        ),
        hasNumber,
        hasLowerCaseLetter,
        hasCapitalCaseLetter,
      },
    }))

    const v$ = useVuelidate(rules, auth)
    const formValid = computed(() => v$.value.$invalid)

    const submitForm = async () => {
      const result = await v$.value.$validate()
      
      if (result) {
        console.log(result)
        console.log({ ...auth })
      }
    }
    return {
      auth,
      v$,
      submitForm,
      formValid,
    }
  },
}
</script>
<style scoped>
.modal__form-title {
  font-size: 32px;
  line-height: 32px;
  font-weight: 600;
  color: #1d1d1d;
  margin-bottom: 30px;
  text-align: center;
}
.modal__input {
  padding: 10px;
  font-size: 20px;
  background-color: #fff;
  font-size: 18px;
  color: #1d1d1d;
  outline: none;
  border: 1px solid #b6b6b6;
  border-radius: 50px;
  width: 100%;
}
.modal__input::placeholder {
  color: #b6b6b6;
  font-size: 18px;
}
.modal__login-input--wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 30px;
  position: relative;
}
.modal__input-label {
  color: #1d1d1d;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  letter-spacing: 4.5%;
  margin-bottom: 10px;
}
.modal__input-error {
  font-size: 18px;
  color: #1d1d1d;
  position: absolute;
  left: 0;
  bottom: 0;
}
.modal__button-submit {
  background-color: #565656;
  color: #fff;
  padding: 16px 50px;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  font-weight: 600;
  border-radius: 50px;
  width: 100%;
  cursor: pointer;
  text-transform: uppercase;
  border: none;
}
.modal__button-submit:disabled {
  background-color: #b6b6b6;
  cursor: default;
}
</style>
