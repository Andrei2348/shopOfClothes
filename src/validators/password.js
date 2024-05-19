/** @format */

import { required, helpers, minLength } from "@vuelidate/validators";

// export function hasNumber(value) {
//   return /\d/.test(value) ? true : false;  
// }



export const hasNumber = {
      $validator: value => !helpers.req(value) || /\d/.test(value),
      $message: 'Введите число'
    }

export function hasLowerCaseLetter(value) {
  return /[a-z]/.test(value) ? true : false;
}

export function hasCapitalCaseLetter(value) {
  return /[A-Z]/.test(value) ? true : false;
}
