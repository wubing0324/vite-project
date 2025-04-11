<template>
  <div class="base">
    我是monitor-overview
    {{ year }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useYearStore } from '@/stores/yearInfo'

const yearStore = useYearStore()
const year = computed(() => yearStore.year)
</script>

<style lang="scss" scoped>
.map-background {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid red;
}
</style>
