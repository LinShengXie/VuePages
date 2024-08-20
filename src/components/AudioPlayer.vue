<template>
  <audio ref="audioVm" loop preload="auto">
    <source src="../assets/video/王巨星 - 无名的人.mp3" type="audio/mpeg" />
    <p>
      Download <a href="../assets/video/王巨星 - 无名的人.mp3" download="myAudio.mp3">MP3</a> or
      audio.
    </p>
  </audio>
  <div :class="['l-icon-box', state.playerState && 'l-icon-box-play', props.position]">
    <n-icon size="25" @click="playerClick">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 5v8.55c-.94-.54-2.1-.75-3.33-.32c-1.34.48-2.37 1.67-2.61 3.07a4.007 4.007 0 0 0 4.59 4.65c1.96-.31 3.35-2.11 3.35-4.1V7h2c1.1 0 2-.9 2-2s-.9-2-2-2h-2c-1.1 0-2 .9-2 2z"
          fill="#efce7d"
        ></path>
      </svg>
    </n-icon>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AudioPlayer'
}
</script>

<script setup lang="ts">
import { NIcon } from 'naive-ui'
import { reactive, ref } from 'vue'
const props = defineProps({
  position: {
    type: String,
    default: 'top-left'
  }
})
const audioVm = ref(null)
const state = reactive({
  playerState: false
})

const playerClick = () => {
  if (audioVm.value.paused) {
    audioVm.value.play()
    state.playerState = true
  } else {
    audioVm.value.pause()
    state.playerState = false
  }
}
</script>

<style scoped lang="scss">
.top-left {
  position: absolute;
  right: 12px;
  top: 12px;
}
.l-icon-box {
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px #efce7d solid;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0 0 12px #d99e96) drop-shadow(0 0 8px #c0cbbb) drop-shadow(0 0 4px #ef852f)
      drop-shadow(0 0 2px #ffb8ce);
  }
}

.l-icon-box-play {
  animation: 4s linear infinite transformPlay;
}

@keyframes transformPlay {
  0% {
    transform: rotate(0deg);
    filter: drop-shadow(0 0 12px #d99e96) drop-shadow(0 0 8px #c0cbbb) drop-shadow(0 0 4px #ef852f)
      drop-shadow(0 0 2px #ffb8ce);
  }

  25% {
    transform: rotate(90deg);
    filter: drop-shadow(0 0 2px #c0cbbb) drop-shadow(0 0 12px #d99e96) drop-shadow(0 0 8px #ef852f)
      drop-shadow(0 0 4px #ffb8ce);
  }

  50% {
    transform: rotate(180deg);
    filter: drop-shadow(0 0 4px #ffb8ce) drop-shadow(0 0 2px #c0cbbb) drop-shadow(0 0 12px #d99e96)
      drop-shadow(0 0 8px #ef852f);
  }

  75% {
    transform: rotate(270deg);
    filter: drop-shadow(0 0 12px #ef852f) drop-shadow(0 0 8px #ffb8ce) drop-shadow(0 0 4px #c0cbbb)
      drop-shadow(0 0 2px #d99e96);
  }

  100% {
    transform: rotate(360deg);
    filter: drop-shadow(0 0 2px #d99e96) drop-shadow(0 0 4px #ef852f) drop-shadow(0 0 8px #ffb8ce)
      drop-shadow(0 0 12px #c0cbbb);
  }
}
</style>
