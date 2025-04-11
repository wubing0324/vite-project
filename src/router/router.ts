import Vue from 'vue'
import VueRouter from 'vue-router'
import type { RouteConfig, type Router, type RouteRecordRaw, type RouteComponent } from 'vue-router'
import monitorOverview from '@/pages/monitor-overview/route'
import emegcSub1 from '@/pages/emegc-sub1/route'
import top1 from '@/pages/top1/route'
import top2 from '@/pages/top2/route'
import top3 from '@/pages/top3/route'
import top1Sub1 from '@/pages/top1-sub1/route'
import top1Sub2 from '@/pages/top1-sub2/route'
Vue.use(VueRouter)

const modules: Record<string, any> = import.meta.glob(
  ['@/pages/**/route.ts', '!./modules/**/remaining.ts'],
  {
    eager: true
  }
)
const routes: RouteRecordRaw[] = []

Object.keys(modules).forEach((key) => {
  routes.push(modules[key].default)
})
/** 运行监测 */
export const monitor: RouteConfig = {
  path: '/',
  name: 'home',
  component: () => import('@/views/main/MainApp.vue'),
  redirect: monitorOverview.path,
  children: routes
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

const router: Router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      if (savedPosition) {
        resolve(savedPosition)
      } else {
        if (from.meta?.saveSrollTop) {
          const top: number = document.documentElement.scrollTop || document.body.scrollTop
          resolve({ x: 0, y: top })
        }
      }
    })
  },
  routes: [monitor, { path: '/', name: 'empty', redirect: monitor.path }]
})

export default router
