<template>
  <MoudlesIndex />
</template>

<script lang="ts">
export default {
  name: 'HomeView'
}
</script>

<script setup lang="ts">
import MoudlesIndex from '../moudles/MoudlesIndex.vue'
import { useRoute } from 'vue-router'
const Route = useRoute()
console.log(Route.params.teseApi, 'Route')
</script>

<style scoped></style>
