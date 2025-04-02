
const route = {
  path: '/top/top2',
  name: 'top2',
  meta: { title: 'top2', root: true },
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
  { name: 'top1', path: '/top/top1'},
  { name: 'top2', path: '/top/top2'},
  { name: 'top3', path: '/top/top3'},
]