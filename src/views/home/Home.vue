<template>
  <WelCome />
  <MoudlesIndex />
</template>

<script lang="ts">
export default {
  name: 'HomeView'
}
</script>

<script setup lang="ts">
import MoudlesIndex from '../moudles/MoudlesIndex.vue'
import WelCome from './component/WelCome.vue'
</script>

<style scoped></style>
