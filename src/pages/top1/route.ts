const route = {
  path: '/top/top1',
  name: 'top1',
  meta: { title: 'top1', root: true },
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
  { name: 'top1-sub1', path: '/top/sub1'},
  { name: 'top1-sub2', path: '/top/sub2'},
]