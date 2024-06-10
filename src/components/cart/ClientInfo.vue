<template>
  <h3 class="client__title">Информация о клиенте</h3>
  <form class="client__form">
    <div class="client__input-wrapper">
      <label class="client__input-label" for="client__name">Ваше имя *</label>
      <p class="client__input-info">Имя получателя заказа</p>
      <input
        class="client__input"
        type="text"
        id="client__name"
        placeholder="Ваше имя"
      />
    </div>

    <div class="client__input-wrapper">
      <label class="client__input-label" for="client__email">E-mail *</label>
      <p class="client__input-info">
        Для отправки деталей заказа, статуса производства и доставки
      </p>
      <input
        class="client__input"
        type="email"
        id="client__email"
        placeholder="Введите e-mail"
        v-model="person.email"
        />
        </div>

    <div class="client__input-wrapper">
      <label class="client__input-label" for="client__phone">Телефон *</label>
      <p class="client__input-info">
        Чтобы мы могли связаться для уточнения деталей доставки или заказанного
        товара.
      </p>
      <input
        class="client__input"
        type="text"
        id="client__phone"
        placeholder="Введите телефон"
        v-model="person.phone"
        />
    </div>
  </form>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()



const person = computed(() => store.state.personObject)



// watch(personObject.email, () => {
//   console.log(personObject.email)
// })
</script>

<style scoped>
.client__form {
  padding-right: 40px;
  width: 100%;
  margin-bottom: 80px;
}

.client__title {
  font-size: 32px;
  font-weight: 600;
  line-height: 1;
  color: #1d1d1d;
  margin-bottom: 40px;
}
.client__input {
  width: 100%;
  padding: 16px 22px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  color: #565656;
  border: 1px solid #c5c5c5;
  border-radius: 50px;
  outline: none;
  letter-spacing: 1.1px;
}
.client__input::placeholder {
  color: #c5c5c5;
  letter-spacing: 1.1px;
}
.client__input-label {
  font-size: 14px;
  font-weight: 500;
  color: #1d1d1d;
  text-transform: uppercase;
}
.client__input-info {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  color: #565656;
  margin-top: 10px;
  margin-bottom: 20px;
  letter-spacing: 1.1px;
}
.client__input-wrapper {
  margin-bottom: 30px;
}
.client__input-wrapper:last-child {
  margin-bottom: 0;
}
</style>
