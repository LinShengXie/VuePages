<template>
  <!-- loading.html -->
  <div class="bars">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ViscidLoading'
}
</script>

<script setup lang="ts"></script>

<style scoped>
/* loading.css */
.bars {
  position: relative;
  height: 30px;
  width: 83px;
}
.bar {
  background: #e04960;
  bottom: 1px;
  height: 3px;
  position: absolute;
  width: 6px;
  animation: sound 0ms -800ms linear infinite alternate;
}
@keyframes sound {
  0% {
    opacity: 0.35;
    height: 3px;
  }
  100% {
    opacity: 1;
    height: 28px;
  }
}
.bar:nth-child(1) {
  left: 0;
  animation-duration: 474ms;
}
.bar:nth-child(2) {
  left: 10%;
  animation-duration: 433ms;
}
.bar:nth-child(3) {
  left: 20%;
  animation-duration: 407ms;
}
.bar:nth-child(4) {
  left: 30%;
  animation-duration: 458ms;
}
.bar:nth-child(5) {
  left: 40%;
  animation-duration: 400ms;
}
.bar:nth-child(6) {
  left: 50%;
  animation-duration: 427ms;
}
.bar:nth-child(7) {
  left: 60%;
  animation-duration: 441ms;
}
.bar:nth-child(8) {
  left: 70%;
  animation-duration: 419ms;
}
.bar:nth-child(9) {
  left: 80%;
  animation-duration: 487ms;
}
.bar:nth-child(10) {
  left: 90%;
  animation-duration: 442ms;
}
</style>
