<template>
  <div
    class="item-tr"
    :style="{
      height: itemHeight + 'px',
      backgroundColor: isHover ? '#d3e9f4' : index % 2 === 0 ? stripe : '#fff'
    }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave">
    <div
      class="item-td"
      v-for="column in columns"
      :key="column.prop"
      :style="{
        width: column.width ? column.width + 'px' : 'auto',
        flex: column.width ? 'none' : '1'
      }">
      <div v-if="column.render">
        <expand-dom :column="column" :row="source" :index="index" :render="column.render" />
      </div>
      <div v-else>
        <span>{{ formatValue(source[column.prop]) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'item-component',
  props: {
    stripe: {
      type: String,
      default: () => '#f0f0f0'
    },
    itemHeight: {
      type: Number,
      default: 40
    },
    columns: {
      type: Array,
      default: () => []
    },
    index: {
      // index of current item
      type: Number
    },
    source: {
      // here is: {uid: 'unique_1', text: 'abc'}
      type: Object,
      default() {
        return {}
      }
    },
    description: {
      type: String,
      default: ''
    },
    onMouseEnter: {
      type: Function,
      default: () => {}
    },
    onMouseLeave: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      isHover: false
    }
  },
  components: {
    expandDom: {
      functional: true,
      props: {
        row: Object,
        render: Function,
        index: Number,
        column: {
          type: Object,
          default: null
        }
      },
      render: (h, ctx) => {
        const defaultParams = {
          row: ctx.props.row,
          index: ctx.props.index
        }
        if (ctx.props.column) defaultParams.column = ctx.props.column
        return ctx.props.render(h, defaultParams)
      }
    }
  },
  methods: {
    formatValue(val) {
      if (val || val === 0) {
        return val
      }
      return '-'
    },
    handleMouseEnter() {
      this.isHover = true
      this.onMouseEnter()
    },
    handleMouseLeave() {
      this.isHover = false
      this.onMouseLeave()
    }
  }
}
</script>
<style>
.item-tr {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  transition: background-color 0.3s ease;
  cursor: pointer;
}
.item-td {
  flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
}
.strip-line {
  background-color: #9fcaee;
}
.item-tr-hover {
  background-color: #f0f0f0;
  cursor: pointer;
}
</style>
