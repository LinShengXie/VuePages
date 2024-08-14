<template>
  <div class="l-module-box">
    <div class="header">
      <NMenu :value="activeKey" mode="horizontal" :options="menuOptions" responsive />
    </div>
    <div class="containter">
      <div class="containter-left">
        <ul>
          <li
            :class="[activating.label === item.label && 'side-actived']"
            v-for="item in state.module"
            :key="item.label"
            @click="changeTab(item)"
          >
            {{ item.label }}
          </li>
        </ul>
      </div>
      <div class="containter-right">
        <ComponentWindow ref="ComponentWindowDom">
          <component :is="activating.component"></component>
        </ComponentWindow>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MoudlesIndex'
}
</script>

<script setup lang="ts">
import ComponentWindow from '@/components/ComponentWindow.vue'
import router from '@/router'
import { BookOutline as BookIcon } from '@vicons/ionicons5'
import { MenuOption, NIcon, NMenu } from 'naive-ui'
import type { Component } from 'vue'
import { h, reactive, ref, shallowRef } from 'vue'
import { RouterLink } from 'vue-router'
import Loading from '../loading/Loading.vue'
import Question from '../question/Question.vue'
import Blog from '../blog/Blog.vue'
const activeKey = ref(null)

const state = reactive({
  module: [
    {
      label: 'BLOG',
      component: shallowRef(Blog)
    },
    {
      label: '加载动画',
      component: shallowRef(Loading)
    },
    {
      label: '遇到问腿',
      component: shallowRef(Question)
    }
  ]
})

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

let activating = ref(state.module[0])

const ComponentWindowDom = ref(null)

const changeTab = (module) => {
  activating.value = module
}

const { routes } = router.options

const menuOptions: MenuOption[] = routes.reduce((pre, next) => {
  if (next.path !== '/' && !next.children && next.meta?.type !== 'notFound') {
    pre.push({
      label: () =>
        h(
          RouterLink,
          {
            to: {
              name: next.name
            }
          },
          () => {
            return next.name
          }
        ),
      icon: renderIcon(BookIcon)
    })
  }
  return pre
}, [])
</script>

<style scoped lang="scss">
.l-module-box {
  .header {
    border: 1px solid #fff;
  }
  .containter {
    display: flex;
    .containter-left {
      width: 20%;
      ul {
        li {
          cursor: pointer;
          padding: 12px;
          border: 1px solid #fff;
          margin: 1px;
          &:hover {
            background: #f1e1c7;
          }
        }
        .side-actived {
          background: #f1e1c7;
        }
      }
    }
    .containter-right {
      width: 80%;
    }
  }
}
.l-module-box-item {
  margin: 4px 12px;
}
</style>
