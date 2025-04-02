<template>
  <div class="page-top">
    <div class="menu-container">
      <div
        v-for="menu in rootMenus"
        :key="menu.name"
        class="menu-item"
        :class="{ active: currentRoute.path.startsWith(menu.path) }"
        @click="handleMenuClick(menu)"
      >
        {{ menu.meta?.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router/composables'
import { monitor, emegc, top } from '@/router/router.ts'

const router = useRouter()
const currentRoute = useRoute()

const rootMenus = computed(() => {
  const allRoutes = [
    ...(monitor.children || []),
    ...(emegc.children || []),
    ...(top.children || [])
  ]
  return allRoutes.filter(route => route.meta?.root === true)
})

const handleMenuClick = (menu) => {
  router.push(menu.path)
}
</script>

<style lang="scss" scoped>
.page-top {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%);
  backdrop-filter: blur(10px);
  
  .menu-container {
    display: flex;
    gap: 40px;
    
    .menu-item {
      font-size: 24px;
      color: #ffffff;
      cursor: pointer;
      padding: 8px 16px;
      border-radius: 4px;
      transition: all 0.3s ease;
      
      &:hover {
        background: rgba(255,255,255,0.1);
      }
      
      &.active {
        color: #00ffff;
        background: rgba(0,255,255,0.1);
      }
    }
  }
}
</style>
