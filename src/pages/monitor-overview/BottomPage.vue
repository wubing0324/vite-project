<template>
  <div>
    <PageBottom :center-buttons="buttons" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { buttons } from './route'
interface user {
  grid: string
  num: number
}
const gds = ref<Array<user>>([
  { grid: 'cn', num: 1 },
  { grid: 'cn', num: 2 },
  { grid: 'cn', num: 3 },
  { grid: 'cn', num: 4 },
  { grid: 'cn', num: 5 },
  { grid: 'cn', num: 6 },
  { grid: 'cn', num: 7 },
  { grid: 'cn', num: 8 },
  { grid: 'cn', num: 9 }
])
console.log(gds)

const layersInfo1: { records: Record<string, user[]> } = {
  records: {}
}
layersInfo1.records.dsa = [
  { grid: 'cn', num: 1 },
  { grid: 'cn', num: 2 },
  { grid: 'cn', num: 3 },
  { grid: 'cn', num: 4 },
  { grid: 'cn', num: 5 }
]
console.log(layersInfo1)
</script>

<style lang="scss" scoped></style>
