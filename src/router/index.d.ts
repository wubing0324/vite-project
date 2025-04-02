import { type RouteConfig } from 'vue-router'

export declare type RouteConfigExt = RouteConfig & {
  meta: {
    title: string;
    root?: boolean;
  }
}
