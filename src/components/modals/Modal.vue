<!-- @format -->

<template>
  <form @submit.prevent="submitForm" class="form">
    <!-- <div :class="{ error: v$.firstName.$errors.length }">
      <input v-model="state.firstName" />
      <div
        class="input-errors"
        v-for="error of v$.firstName.$errors"
        :key="error.$uid"
      >
        <div class="error-msg">{{ error.$message }}</div>
      </div>
    </div> -->
    <span v-for="err in v$.email.$errors" :key="err.$uid">{{
      err.$message
    }}</span>
    <input type="text" v-model.trim="v$.email.$model" /><br /><br />
    <span v-for="err in v$.name.$errors" :key="err.$uid">{{
      err.$message
    }}</span>
    name
    <input type="text" v-model.trim="v$.name.$model" /><br /><br />
    <span v-for="err in v$.password.$errors" :key="err.$uid">{{
      err.$message
    }}</span>
    <input type="password" v-model="v$.password.$model" /><br /><br />
    <button type="submit" onclick.prevent="submitForm">Login</button>
  </form>
</template>

<script>
  import { reactive, ref, watchEffect, computed } from "vue";
  import { useVuelidate } from "@vuelidate/core";
  import { email, required, minLength } from "@vuelidate/validators";
  import {
    hasNumber,
    hasLowerCaseLetter,
    hasCapitalCaseLetter,
  } from "../../validators/password.js";

  export default {
    setup() {
      const auth = reactive({
        email: "",
        name: "",
        password: "",
      });

      const rules = computed(() => ({
        email: { email, required, minLength: minLength(3) },
        name: { required, minLength: minLength(4) },
        password: {
          required,
          hasNumber,
          minLength: minLength(6),
          hasLowerCaseLetter,
          hasCapitalCaseLetter,
        },
      }));

      const v$ = useVuelidate(rules, auth);

      const submitForm = async () => {
        const result = await v$.value.$validate();

        if (result) {
          console.log(result);
          console.log({ ...auth });
        }
      };
      return {
        auth,
        v$,
        submitForm,
      };
    },
  };
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
