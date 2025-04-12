<template>
  <div class="item-tr">
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
    }
  }
}
</script>
<style>
.item-tr {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
.item-td {
  flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid #ddd;
  box-sizing: border-box;
}
</style>
