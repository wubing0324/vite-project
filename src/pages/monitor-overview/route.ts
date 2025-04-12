const route = {
  path: '/monitor/overview',
  name: 'monitor-overview',
  meta: { title: '虚拟表格', root: true },
  components: {
    base: () => import('./base/StaticMap.vue'),
    top: () => import('@/components/page-top/PageTop.vue'),
    left: () => import('./OverviewMainLeft.vue'),
    right: () => import('./OverviewMainRight.vue'),
    bottom: () => import('./BottomPage.vue')
  }
}

export default route

export const buttons = [
  { name: '监测', path: '/monitor/overview' },
  { name: 'sub1', path: '/emegc/sub1' }
]
