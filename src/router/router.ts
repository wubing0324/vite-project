import Vue from 'vue'
import VueRouter from 'vue-router'
import type { RouteConfig } from 'vue-router'
import monitorOverview from '@/pages/monitor-overview/route'
import emegcSub1 from '@/pages/emegc-sub1/route'
import top1 from '@/pages/top1/route'
import top2 from '@/pages/top2/route'
import top3 from '@/pages/top3/route'
import top1Sub1 from '@/pages/top1-sub1/route'
import top1Sub2 from '@/pages/top1-sub2/route'

Vue.use(VueRouter)

/** 运行监测 */
export const monitor: RouteConfig = {
  path: '/monitor',
  name: 'monitor',
  component: () => import('@/views/main/MainApp.vue'),
  redirect: monitorOverview.path,
  children: [monitorOverview]
}

export const emegc: RouteConfig = {
  path: '/emegc',
  name: 'emegc',
  component: () => import('@/views/main/MainApp.vue'),
  redirect: emegcSub1.path,
  children: [emegcSub1]
}

export const top: RouteConfig = {
  path: '/top',
  name: 'top',
  component: () => import('@/views/main/MainApp.vue'),
  redirect: top2.path,
  children: [top1, top2, top3, top1Sub1, top1Sub2]
}

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes: [
//     monitor,
//     emegc,
//     top,
//     { path: '/', name: 'empty', redirect: monitor.path },
//   ]
// })
export default new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    monitor,
    emegc,
    top,
    { path: '/', name: 'empty', redirect: monitor.path },
  ]
})