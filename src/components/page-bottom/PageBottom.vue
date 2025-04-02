<template>
  <div class="bar-container">
    <div class="center-container animate__animated animate__fadeInUp" :class="{'notEmpty': centerButtons.length > 0 && centerVisible}">
      <div v-show="centerVisible" v-for="button in centerButtons" :key="button.name"
        class="center-button__bg"
        @click.stop="centerButtonClick(button)"
      >
        <div class="center-button__title">{{ button.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router/composables'
import { defineProps } from 'vue'

const props = defineProps({
  centerVisible: {
    type: Boolean,
    default: () => true
  },
  centerButtons: {
    type: Array,
    default: () => []
  },
  activeCenterButton: {
    type: Object,
    default: () => null
  }
})
console.log('props.button = ', props.centerButtons)
const router = useRouter()

const centerButtonClick = (button) => {
  if (button.path) router.push(button.path)
}

</script>

<style lang="scss" scoped>
.bar-container {
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}
.center-container{
  display: flex;
  cursor: pointer;
}
.center-button__bg{
  margin: 0 10px;
  font-size: 24px;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
}
</style>
