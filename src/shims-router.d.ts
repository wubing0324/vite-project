import Vue from 'vue'
import VueRouter from 'vue-router'

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter
  }
}

declare module 'vue' {
  export interface GlobalComponents {
    RouterLink: typeof import('vue-router')['RouterLink']
    RouterView: typeof import('vue-router')['RouterView']
  }
}