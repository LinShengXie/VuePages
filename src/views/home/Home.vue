<template>
  <div class="l-radio-group" >
    <n-space vertical>
    <n-radio-group v-model:value="state.radioVal" name="radiobuttongroup1">
      <n-radio-button
        v-for="type in state.typeList"
        :key="type.value"
        :value="type.value"
        :label="type.label"
      />
    </n-radio-group>
  </n-space>
  </div>
  <div>
    <Loading :type="state.radioVal" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'HomeView'
}
</script>

<script setup lang="ts">
import { reactive } from 'vue'
import Loading from '../loading/Loading.vue'
import { NSpace, NRadioGroup, NRadioButton } from 'naive-ui'

// 定义类型
type Type = 'cube' | 'box' | 'spinner' |'inner'|'billiards'|'clamor'|'music'|'pinball'|'pinwheel'|'switchshop'|'viscid'

const state = reactive({
  radioVal: 'cube' as Type,
  typeList: [
    {
      value: 'cube',
      label: 'cube'
    },
    {
      value: 'box',
      label: 'box'
    },
    {
      value: 'spinner',
      label: 'spinner'
    },
    {
      value: 'inner',
      label: 'inner'
    },
    {
      value: 'billiards',
      label: 'billiards'
    },
    {
      value: 'music',
      label: 'music'
    },
    {
      value: 'pinball',
      label: 'pinball'
    },
    {
      value: 'pinwheel',
      label: 'pinwheel'
    },
    {
      value: 'switchshop',
      label: 'switchshop'
    },
    {
      value: 'viscid',
      label: 'viscid'
    },
    {
      value: 'clamor',
      label: 'clamor'
    }
  ]
})
</script>

<style scoped>
.l-radio-group{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
}
</style>
