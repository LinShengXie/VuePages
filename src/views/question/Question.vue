<template>
  <div>问题模块</div>
  <NModal v-model:show="state.showModal"></NModal>
</template>

<script lang="ts">
export default {
  name: 'QuestionModle'
}
</script>

<script setup lang="ts">
import { reactive, shallowRef } from 'vue'
import RecursiveCom from './component/RecursiveCom.vue'
import { NModal } from 'naive-ui'

const state = reactive({
  questionList: [
    {
      label: '递归组件',
      component: shallowRef(RecursiveCom)
    },
    {
      label: '暂位组件',
      component: null
    }
  ],
  showModal: false
})
</script>

<style scoped></style>
