<template>
  <div class="base">
    <p class="base-title">我是monitor-overview</p>
    {{ year }}
    <!-- <virtual-scroll /> -->
    <virtual-table
      :columns="columns"
      :table-data="tableData"
      header-class="myHeaderClass"
      :speed="0.5" />
  </div>
</template>

<script lang="jsx">
import { useYearStore } from '@/stores/yearInfo'
import virtualTable from '@/components/virtualTable/virtualTable.vue'

export default {
  name: 'StaticMap',
  components: {
    virtualTable
  },
  data() {
    return {
      columns: [
        {
          label: '序号',
          prop: 'id',
          width: 100
        },
        {
          label: '状态',
          prop: 'status',
          width: 100,
          render: (h, { row }) => {
            let classMap = {
              'status-normal': row.status === '正常',
              'status-warning': row.status === '警告',
              'status-error': row.status === '错误'
            }
            return <span class={classMap}>{row.status}</span>
          }
        },
        {
          label: '值',
          prop: 'value'
        },
        {
          label: '时间',
          prop: 'timestamp',
          itemClass: 'myItemClass'
        },
        {
          label: '描述',
          prop: 'description'
        }
      ],
      tableData: Array.from({ length: 30 }, (_, i) => ({
        id: i,
        text: `Item ${i}`,
        status: ['正常', '警告', '错误'][Math.floor(Math.random() * 3)],
        value: Math.floor(Math.random() * 1000),
        timestamp: new Date(Date.now() - Math.random() * 86400000).toLocaleTimeString(),
        description: `这是第 ${i} 条数据的详细描述信息，包含了一些随机生成的内容`
      }))
    }
  },
  computed: {
    year() {
      const yearStore = useYearStore()
      return yearStore.year
    }
  },
  render() {
    return (
      <div class="base">
        <p class="base-title">我是monitor-overview</p>
        {this.year}
        <virtual-table columns={this.columns} tableData={this.tableData} />
      </div>
    )
  }
}
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
.base-title {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}
:deep(.status) {
  color: red;
}
:deep(.status-normal) {
  color: green;
}
:deep(.status-warning) {
  color: rgb(145, 137, 45);
}
:deep(.status-error) {
  color: red;
}
</style>
