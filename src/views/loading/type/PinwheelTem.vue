<template>
  <!-- loading.html -->
  <div class="loading">
    <div class="inner one"></div>
    <div class="inner two"></div>
    <div class="inner three"></div>
    <div class="inner four"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PinwheelLoading'
}
</script>

<script setup lang="ts"></script>

<style scoped>
/* loading.css */
.loading {
  position: absolute;
  top: calc(50% - 24px);
  left: calc(50% - 24px);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  transform: perspective(128px) rotateX(30deg);
}
.inner {
  position: absolute;
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  background-color: #e04960;
  border-radius: 50%;
}
.inner.one {
  left: 0%;
  top: 0%;
  animation: move-right 1s ease-out infinite;
}
.inner.two {
  right: 0%;
  top: 0%;
  animation: move-down 1s ease-in-out infinite;
}
.inner.three {
  right: 0%;
  bottom: 0%;
  animation: move-left 1s ease-in-out infinite;
}
.inner.four {
  left: 0%;
  bottom: 0%;
  animation: move-up 1s ease-out infinite;
}
@keyframes move-right {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(32px);
  }
}
@keyframes move-down {
  0% {
    transform: translateY();
  }
  100% {
    transform: translateY(32px);
  }
}
@keyframes move-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-32px);
  }
}
@keyframes move-up {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-32px);
  }
}
</style>
