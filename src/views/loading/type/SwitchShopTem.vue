<template>
  <!-- loading.html -->
  <div class="loading">
    <div class="loader__bar"></div>
    <div class="loader__bar loader__bar--delay-1"></div>
    <div class="loader__bar loader__bar--delay-2"></div>
    <div class="loader__bar loader__bar--delay-3"></div>
    <div class="loader__bar loader__bar--delay-4"></div>
    <div class="loader__bar loader__bar--delay-5"></div>
    <div></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SwitchShopLoading'
}
</script>
<script setup lang="ts"></script>

<style scoped>
/* loading.css */
.load {
  width: 400px;
  height: 170px;
}
@keyframes loader {
  0% {
    background: #ff8919;
    width: 0%;
  }
  20% {
    width: 100%;
  }
  39% {
    background: #ff8919;
  }
  40% {
    background: #ffa54f;
    width: 0%;
  }
  60% {
    width: 100%;
  }
  80% {
    width: 0%;
  }
  100% {
    background: #ffa54f;
    width: 0%;
  }
}
@keyframes loaderAlt {
  0% {
    background: #ff7c00;
    width: 100%;
  }
  19% {
    background: #ff7c00;
  }
  20% {
    background: #ff9834;
    width: 0%;
  }
  40% {
    width: 100%;
  }
  59% {
    background: #ff9834;
  }
  60% {
    background: #ff7c00;
    width: 0;
  }
  80% {
    width: 100%;
  }
  100% {
    background: #ff7c00;
    width: 100%;
  }
}
.loading {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  width: 100%;
}
.loader__bar {
  display: flex;
  flex: 1;
  position: relative;
  width: 100%;
}
.loader__bar:before {
  animation: loader ease 8s infinite;
  animation-delay: 100ms;
  background: #ff7c00;
  background-size: 200% 200%;
  content: '';
  height: 100%;
  width: 0%;
}
.loader__bar:after {
  animation: loaderAlt ease 8s infinite;
  animation-delay: 100ms;
  background: #ff7c00;
  background-size: 200% 200%;
  content: '';
  height: 100%;
  width: 100%;
}
.loader__bar--delay-1:before,
.loader__bar--delay-1:after {
  animation-delay: 200ms;
}
.loader__bar--delay-2:before,
.loader__bar--delay-2:after {
  animation-delay: 300ms;
}
.loader__bar--delay-3:before,
.loader__bar--delay-3:after {
  animation-delay: 400ms;
}
.loader__bar--delay-4:before,
.loader__bar--delay-4:after {
  animation-delay: 500ms;
}
.loader__bar--delay-5:before,
.loader__bar--delay-5:after {
  animation-delay: 600ms;
}
</style>
