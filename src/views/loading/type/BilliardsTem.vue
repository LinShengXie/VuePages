<template>
  <!-- loading.html -->
  <div class="loading"></div>
</template>

<script lang="ts">
export default {
  name: 'BilliardsLoading'
}
</script>

<script setup lang="ts"></script>

<style scoped>
/* loading.css */
.loading {
  width: 83px;
  height: 83px;
  transform: translate(-50%, -50%);
}
.loading span {
  width: 100%;
  text-align: center;
  color: #e04960;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 15px;
  letter-spacing: 1px;
  position: absolute;
  left: 1px;
  top: 46%;
}
.loading:before,
.loading:after {
  content: '';
  border-radius: 50%;
  background-color: #e04960;
  width: 26px;
  height: 26px;
  position: absolute;
  left: 72px;
  top: 8px;
  animation: rotate 6s linear;
  animation-iteration-count: infinite;
  transform-origin: 12px 76px;
}
.loading:before {
  box-shadow:
    45px 19px 0px 0px #e04960,
    62px 63px 0px 0px #e04960,
    45px 107px 0px 0px #e04960,
    0px 126px 0px 0px #e04960,
    -46px 107px 0px 0px #e04960,
    -63px 63px 0px 0px #e04960,
    -46px 19px 0px 0px #e04960;
}
.loading:after {
  animation-direction: reverse;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>
