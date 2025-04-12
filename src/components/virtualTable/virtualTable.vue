<template>
  <div class="table-container">
    <div class="table-header">
      <div
        class="table-header-td"
        :class="item.headerClass"
        :style="{ width: item.width ? item.width + 'px' : 'auto', flex: item.width ? 'none' : '1' }"
        v-for="item in columns"
        :key="item.prop">
        {{ item.label }}
      </div>
    </div>
    <virtual-scroll
      :columns="columns"
      :table-data="tableData"
      height="200"
      :item-height="40"
      :item-class="itemClass"
      :speed="speed" />
  </div>
</template>

<script>
import virtualScroll from './virtualScroll.vue'
export default {
  name: 'virtual-table',
  components: {
    virtualScroll
  },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
    },
    itemClass: {
      type: String,
      default: ''
    },
    speed: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {}
  }
}
</script>
<style>
.table-container {
  width: 100%;
  border: 1px solid red;
  box-sizing: border-box;
}
.item {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
.table-header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 20px;
  width: 100%;
  box-sizing: border-box;
}
.table-header-td {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-width: 100px;
  padding: 0;
  box-sizing: border-box;
}
</style>
