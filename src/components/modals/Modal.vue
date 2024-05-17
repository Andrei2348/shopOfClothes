<template>
  <form action.prevent="submit" class="form">
    <input type="text" v-model.trim="email" /><br /><br />
    <input
      type="text"
      v-model.trim="name"
    /><br /><br />
      <!-- :class="{
        invalid:
          ($v.email.$dirty && !$v.email.required) ||
          ($v.email.$dirty && $v.email.email),
      }" -->
    
    <input type="password" v-model="password" /><br /><br />
    <button type="submit" >Login</button>
  </form>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { email, required, minLength } from '@vuelidate/validators'

export default {
  setup() {
    return {
      v$: useVuelidate(),
    }
  },
  data() {
    return {
      email: '',
      name: '',
      password: '',
    }
  },
  validations() {
    return {
      email: { email, required },
      name: { required },
      password: { required, minLength: minLength(6) },
    }
  },

}
// function submitHandler(){
//   if($v.$invalid){
//       $v.$touch()
//       return
//   }
// }
</script>
<style>
.form {
  margin-top: 200px;
}
input {
  padding: 10px;
  font-size: 20px;
}
</style>
