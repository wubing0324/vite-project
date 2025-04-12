<template>
  <div>
    <div class="table-header">
      <div
        class="table-header-td"
        :style="{ width: item.width ? item.width + 'px' : 'auto', flex: item.width ? 'none' : '1' }"
        v-for="item in columns"
        :key="item.prop">
        {{ item.label }}-{{ item.width }}
      </div>
    </div>
    <virtual-scroll :columns="columns" :table-data="tableData" />
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
    }
  },
  data() {
    return {}
  }
}
</script>
<style>
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
  border: 1px solid #ddd;
  box-sizing: border-box;
}
.table-header-td {
  border: 1px solid #ddd;
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
