<template>
  <div class="l-loading-page">
    <!-- 使用 <component> 和 is 属性来动态渲染组件 -->
    <component :is="LoadingComponent"></component>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LoadingPage'
}
</script>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
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
type Type = 'cube' | 'box' | 'spinner' |'inner'|'billiards'|'clamor'|'music'|'pinball'|'pinwheel'|'switchshop'|'viscid'

// 定义组件类型
type TemTypeOf = typeof CubeLoading | typeof BoxLoading | typeof SpinnerLoading | typeof InnerLoading; 

// 定义 props
const props = defineProps<{ type: Type }>()

// 创建一个映射对象用于存储不同类型的组件
const typeTem: Record<Type,  TemTypeOf> = {
  cube: CubeLoading,
  box:BoxLoading,
  spinner:SpinnerLoading,
  inner:InnerLoading,
  billiards:BilliardsLoading,
  clamor:ClamorLoading,
  music:MusicLoading,
  pinball:PinballLoading,
  pinwheel:PinwheelLoading,
  switchshop:SwitchShopLoading,
  viscid:ViscidLoading
}

const LoadingComponent = computed(()=>{
    return typeTem[props.type]
})



</script>

<style scoped>
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
