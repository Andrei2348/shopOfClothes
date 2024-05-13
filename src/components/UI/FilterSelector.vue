<template>
    <select class="cards__select" @change="onChangeSelect">
      <option class="cards__select-option" value="name">По названию</option>
      <option class="cards__select-option" value="price">
        По цене (дешевые)
      </option>
      <option class="cards__select-option" value="-price">
        По цене (дорогие)
      </option>
    </select>
</template>

<script setup>
const emit = defineEmits(['onChangeSelect'])

// Выбор фильтрации
const onChangeSelect = (event) => {
    console.log('event on ', event.target.value)
  emit('onChangeSelect', event.target.value)
}
</script>