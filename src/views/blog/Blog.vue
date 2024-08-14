<template>
  <div class="BlogTem">
    <!-- 内容区域 -->
    <div class="BlogTem-content">
      <v-md-preview :text="state.mdVM.mdText"></v-md-preview>
    </div>
    <!-- 菜单区域 -->
    <div class="BlogTem-list">
      <ul>
        <li
          v-for="item in state.mdList"
          :key="item.title"
          :class="['item-style', item.title === state.mdVM.title && 'actived']"
          @click="listItemClick(item)"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'BlogTem'
}
</script>

<script setup lang="ts">
import { reactive } from 'vue'
import testText from '@/doc/test.md?raw'
import 第一篇博客 from '@/doc/第一篇博客.md?raw'
import 第二篇博客 from '@/doc/第二篇博客.md?raw'
const state = reactive({
  mdVM: null,
  mdList: [
    {
      title: 'test',
      mdText: testText
    },
    {
      title: '第一篇博客',
      mdText: 第一篇博客
    },
    {
      title: '第二篇博客',
      mdText: 第二篇博客
    }
  ]
})

state.mdVM = state.mdList[0]

const listItemClick = (item) => {
  state.mdVM = item
}
</script>

<style scoped lang="scss">
.BlogTem {
  width: 100%;
  display: flex;
}
.BlogTem-content {
  width: 80%;
}
.BlogTem-list {
  width: 20%;
  ul {
    padding: 12px;
    .item-style {
      cursor: pointer;
      font-size: 12px;
      color: rgba(60, 60, 60, 0.7);
      transition: color 0.5s;
      line-height: 28px;
      margin: 4px 0;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .actived {
      color: #87dedc;
    }
  }
}
</style>
