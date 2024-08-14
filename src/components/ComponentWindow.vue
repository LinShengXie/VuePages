<template>
  <div :class="['centered-layer', state ? 'centered-layer-open' : 'centered-layer-close']">
    <!-- <div class="l-header">
      <NButton @click="close">Close</NButton>
    </div> -->
    <slot> 暂无展示内容 </slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ComponentWindow'
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
const state = ref(false)

const open = () => {
  state.value = true
}

const close = () => {
  state.value = false
}

defineExpose({
  open,
  close
})
</script>

<style scoped>
.l-header {
  text-align: right;
}
.centered-layer {
  width: 100%;
  height: 100%;
  background-color: #f4f3ec;
  border: 5px solid #f4f3ec;
  box-sizing: border-box;
  animation: fadeInScale 2s ease-in-out forwards;
}

.centered-layer-open {
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

/* .centered-layer-close {
  animation: fadeInScaleClose 2s ease-in-out forwards;
} */

@keyframes fadeInScaleClose {
  0% {
    display: block;
    opacity: 1;
    width: 100%;
    height: 100%;
    transform: scale(1); /* 结束时恢复到原尺寸 */
  }
  100% {
    display: none;
    opacity: 0;
    width: 0;
    height: 0;
    transform: scale(0.1); /* 起始时缩小 */
  }
}
</style>
