<template>
  <div :class="['centered-layer', 'show', state && 'centered-layer-close']" @click="hideLayer">
    <Loading />
  </div>
</template>

<script lang="ts">
export default {
  name: 'MoudlesIndex'
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
import Loading from '../loading/Loading.vue'

const state = ref(false)

const hideLayer = () => {
  state.value = !state.value
  // 你也可以在这里执行其他逻辑，例如关闭图层、显示新的内容等
}
</script>

<style scoped>
.centered-layer {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border: 5px solid #ccc;
  box-sizing: border-box;
  animation: fadeInScale 2s ease-in-out forwards;
}

@keyframes fadeInScale {
  0% {
    opacity: 0;
    width: 0;
    height: 0;
    transform: scale(0.1); /* 起始时缩小 */
  }
  100% {
    opacity: 1;
    width: 100%;
    height: 100%;
    transform: scale(1); /* 结束时恢复到原尺寸 */
  }
}

.centered-layer-close {
  display: none;
  animation: fadeInScaleClose 2s ease-in-out forwards;
}

@keyframes fadeInScaleClose {
  0% {
    opacity: 1;
    width: 100%;
    height: 100%;
    transform: scale(1); /* 结束时恢复到原尺寸 */
  }
  100% {
    opacity: 0;
    width: 0;
    height: 0;
    transform: scale(0.1); /* 起始时缩小 */
  }
}
</style>
