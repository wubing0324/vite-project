const route = {
  path: '/top/sub1',
  name: 'top1-sub1',
  meta: { title: 'top1-sub1', root: false },
  components: {
    base: () => import('./base/StaticMap.vue'),
    top: () => import('@/components/page-top/PageTop.vue'),
    left: () => import('./OverviewMainLeft.vue'),
    right: () => import('./OverviewMainRight.vue'),
    bottom: () => import('./BottomPage.vue'),
  },
}

export default route

export const buttons = [
  { name: '监测', path: '/monitor/overview'},
  { name: 'sub1', path: '/emegc/sub1'},
]