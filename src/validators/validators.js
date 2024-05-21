/** @format */

import { helpers } from '@vuelidate/validators'

export const hasNumber = {
  $validator: (value) => !helpers.req(value) || /\d/.test(value),
  $message: 'Пароль должен содержать число',
}

export const hasLowerCaseLetter = {
  $validator: (value) => /[a-z]/.test(value),
  $message: 'Пароль должен содержать буквы нижнего регистра',
}

export const hasCapitalCaseLetter = {
  $validator: (value) => /[A-Z]/.test(value),
  $message: 'Пароль должен содержать буквы верхнего регистра',
}
