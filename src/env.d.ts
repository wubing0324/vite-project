/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** 网页标题 */
  readonly VITE_HTML_TITLE: string
  readonly VITE_APP_PUBLIC_PATH: string
  readonly VITE_APP_PLATFORM_API: string
  /** 对应请求的基础地址，主要用于 MOCK 数据和上线时的基础 URL */
  readonly VITE_APP_BASE_API: string
  /** 是否打开本地 MOCK 数据，为`true`时打开 */
  readonly VITE_APP_MOCK: string
  /** websocket地址 */
  readonly VITE_APP_WS_API: string
  /** 底图服务器地址 */
  readonly VITE_APP_MAPHREF: string
  /** 地图图层工作区 */
  readonly VITE_APP_LAYERSPACE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
