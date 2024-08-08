<template>
  <div class="l-welcome">
    <div class="l-text">WelCome to My Blog !</div>
    <div class="l-cube-box">
      <div class="l-cube" v-for="i in state.year?.split('')" :key="i">{{ i }}</div>
      <div class="l-cube">年</div>
      <div class="l-cube" v-for="i in state.month?.split('')" :key="i">{{ i }}</div>
      <div class="l-cube">月</div>
      <div class="l-cube" v-for="i in state.day?.split('')" :key="i">{{ i }}</div>
      <div class="l-cube">日</div>
      <div class="l-cube" v-for="i in state.time?.split('')" :key="i">{{ i }}</div>
    </div>
    <NButton :focusable="false" text class="l-btn" @click="toHome">Go to My Bolg</NButton>
  </div>
</template>

<script lang="ts">
export default {
  name: 'WelCome'
}
</script>

<script setup lang="ts">
import router from '@/router'
import { NButton } from 'naive-ui'
import { onMounted, onUnmounted, reactive } from 'vue'
const formatNumber = (num: number): string => num.toString().padStart(2, '0')

const setTime = () => {
  const nowTime = new Date()
  const year = nowTime.getFullYear().toString()
  const month = (nowTime.getMonth() + 1).toString()
  const day = nowTime.getDate().toString()
  const hours = formatNumber(nowTime.getHours())
  const minutes = formatNumber(nowTime.getMinutes())
  const seconds = formatNumber(nowTime.getSeconds())

  state.year = year
  state.month = month
  state.day = day
  state.time = `${hours}:${minutes}:${seconds}`
}

const begin = setInterval(() => {
  setTime()
}, 1000)

// 兴趣驱动学习
// 日历时间 场景动画 及 进入按钮
const state = reactive({
  year: '',
  month: '',
  day: '',
  time: ''
})

const toHome = () => {
  router.push('/home')
}

onMounted(() => {
  begin
})

onUnmounted(() => {
  clearInterval(begin)
})
</script>

<style scoped>
.l-welcome {
  background: url('@/assets/pexels-nitin-arya-386173-1029141.jpg') no-repeat center center;
  opacity: 0.8;
  background-size: cover;
  margin: auto;
  padding: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgb(66, 66, 66);
}
.l-text {
  font-size: 24px;
  margin: 16px 0;
  font-weight: bold;
}
.l-cube-box {
  display: flex;
}
.l-cube {
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  overflow: hidden;
}
.l-btn {
  margin: 16px 0;
}
</style>
