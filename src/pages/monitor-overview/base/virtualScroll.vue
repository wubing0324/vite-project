<template>
  <div class="scroll-container" :style="{ height: `${height}px` }">
    <virtual-list
      ref="virtualList"
      class="list"
      :data-key="'id'"
      :data-sources="virtualData"
      :data-component="ListItem"
      :extra-props="{
        description: 'description111',
        columns: columns
      }"
      :estimate-size="50"
      @scroll="handleScroll" />
  </div>
</template>

<script>
import VirtualList from 'vue-virtual-scroll-list'
import ListItem from './ListItem.vue'

export default {
  components: {
    VirtualList
  },
  props: {
    height: {
      type: Number,
      default: 300
    },
    columns: {
      type: Array,
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      ListItem: ListItem,
      originalData: this.tableData,
      scrollSpeed: 1, // 控制滚动速度
      animationFrameId: null, // 记录 requestAnimationFrame ID
      isResetting: false, // 是否正在重置滚动位置
      lastScrollTop: 0 // 记录上次滚动位置
    }
  },
  computed: {
    virtualData() {
      // 复制三份数据，确保滚动时的连续性
      return [...this.originalData, ...this.originalData]
    }
  },
  mounted() {
    // this.startAutoScroll()
  },
  methods: {
    handleScroll(event) {
      const list = event.target
      const scrollHeight = list.scrollHeight / 2 // 获取一组数据的高度
      // 检测是否是向下滚动
      const isScrollingDown = list.scrollTop > this.lastScrollTop
      this.lastScrollTop = list.scrollTop
      console.log(isScrollingDown, list.scrollTop, scrollHeight)
      if (isScrollingDown && list.scrollTop >= scrollHeight) {
        // 当滚动到第二组数据时，立即重置到第一组相同位置
        list.scrollTop = list.scrollTop % scrollHeight
      }
    },
    startAutoScroll() {
      const list = this.$refs.virtualList.$el
      const smoothScroll = () => {
        if (!list) return
        list.scrollTop += this.scrollSpeed
        this.animationFrameId = requestAnimationFrame(smoothScroll)
      }
      this.animationFrameId = requestAnimationFrame(smoothScroll)
    },
    stopAutoScroll() {
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId)
      }
    }
  },
  beforeUnmount() {
    this.stopAutoScroll()
  }
}
</script>

<style scoped>
.scroll-container {
  border: 1px solid #ddd;
  width: 100%;
}

.list {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 8px; /* 为滚动条预留空间 */
  box-sizing: border-box;
}

/* 自定义滚动条样式 */
.list::-webkit-scrollbar {
  width: 6px; /* 设置滚动条宽度 */
}

.list::-webkit-scrollbar-thumb {
  background-color: #c1c1c1;
  border-radius: 3px;
}

.list::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}
</style>
