<template>
  <div><PageBottom :center-buttons="buttons" /></div>
</template>

<script setup lang="ts">
import { buttons } from './route'
import PageBottom from '@/components/page-bottom/PageBottom.vue'
</script>

<style lang="scss" scoped>
.test {
  color: #456;
}
</style>
