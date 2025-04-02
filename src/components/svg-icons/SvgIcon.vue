<template>
  <svg aria-hidden="true" class="svg-icon" :style="svgStyle">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import type { SvgIconProps } from './index';

export default defineComponent({
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#333'
    },
    size: {
      type: [String, Number],
      default: 16
    }
  },
  setup(props: SvgIconProps) {
    const symbolId = computed(() => `#icon-${props.name}`);
    const svgStyle = computed(() => {
      const size = typeof props.size === 'number' ? `${props.size}px` : props.size;
      return {
        width: size,
        height: size
      };
    });

    return {
      symbolId,
      svgStyle
    };
  }
});
</script>

<style scoped>
.svg-icon {
  overflow: hidden;
  vertical-align: -0.15em;
  fill: currentColor;
}
</style>