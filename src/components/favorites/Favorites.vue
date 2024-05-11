<template>
  <h1>Мои закладки</h1>
  <CardList :items="favorites" />
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import CardList from '../home/CardList.vue'

const favorites = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get(
      `https://78f27ce1435ab43d.mokky.dev/favorites`
    )
    favorites.value = data
  } catch (error) {
    console.log(error)
  }
})
</script>
