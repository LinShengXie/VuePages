<template>
  <div class="l-radio-group">
    <n-space vertical>
      <n-radio-group v-model:value="state.radioVal" @click.stop>
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
    <div class="l-loading-page">
      <!-- 使用 <component> 和 is 属性来动态渲染组件 -->
      <component :is="LoadingComponent"></component>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LoadingPage'
}
</script>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import { NSpace, NRadioGroup, NRadioButton } from 'naive-ui'
import CubeLoading from './type/CubeTem.vue'
import BoxLoading from './type/BoxTem.vue'
import SpinnerLoading from './type/SpinnerTem.vue'
import InnerLoading from './type/InnerTem.vue'
import BilliardsLoading from './type/BilliardsTem.vue'
import ClamorLoading from './type/ClamorTem.vue'
import MusicLoading from './type/MusicTem.vue'
import PinballLoading from './type/PinballTem.vue'
import PinwheelLoading from './type/PinwheelTem.vue'
import SwitchShopLoading from './type/SwitchShopTem.vue'
import ViscidLoading from './type/ViscidTem.vue'

// 定义类型
type Type =
  | 'cube'
  | 'box'
  | 'spinner'
  | 'inner'
  | 'billiards'
  | 'clamor'
  | 'music'
  | 'pinball'
  | 'pinwheel'
  | 'switchshop'
  | 'viscid'

// 定义组件类型
type TemTypeOf =
  | typeof CubeLoading
  | typeof BoxLoading
  | typeof SpinnerLoading
  | typeof InnerLoading

// 创建一个映射对象用于存储不同类型的组件
const typeTem: Record<Type, TemTypeOf> = {
  cube: CubeLoading,
  box: BoxLoading,
  spinner: SpinnerLoading,
  inner: InnerLoading,
  billiards: BilliardsLoading,
  clamor: ClamorLoading,
  music: MusicLoading,
  pinball: PinballLoading,
  pinwheel: PinwheelLoading,
  switchshop: SwitchShopLoading,
  viscid: ViscidLoading
}

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

const LoadingComponent = computed(() => {
  return typeTem[state.radioVal]
})
</script>

<style scoped>
.l-radio-group {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
}

.l-loading-page {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
