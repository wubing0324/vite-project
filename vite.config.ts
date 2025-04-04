import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue2 from '@vitejs/plugin-vue2'
import vue2Jsx from '@vitejs/plugin-vue2-jsx'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import requireTransform from 'vite-plugin-require-transform'
import { codeInspectorPlugin } from 'code-inspector-plugin'
// import AutoImport from 'unplugin-auto-import/vite'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // AutoImport({
    //   imports: [
    //     'vue',
    //     'vue-router/composables',
    //     {
    //       '@/stores': [['default', 'useStore']],
    //     }
    //   ],
    // }),
    requireTransform({ fileRegex: /maptalks.gmvi|.ts$|.tsx$/ }),
    vue2(),
    vue2Jsx(),
    /**
     * 在页面上按住组合键时，鼠标在页面移动即会在 DOM 上出现遮罩层并显示相关信息，点击一下将自动打开 IDE 并将光标定位到元素对应的代码位置
     * Mac 默认组合键 Option + Shift
     * Windows 默认组合键 Alt + Shift
     * 更多用法看 https://inspector.fe-dev.cn/guide/start.html
     */
    codeInspectorPlugin({
      bundler: 'vite',
      hideConsole: true
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    }),
    DefineOptions(),
    requireTransform({ fileRegex: /maptalks.gmvi|.ts$|.vue$/ })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      process: 'rollup-plugin-node-polyfills/polyfills/process-es6.js',
      stream: 'rollup-plugin-node-polyfills/polyfills/stream',
      vue: path.resolve(__dirname, './node_modules/vue/dist/vue.runtime.esm.js')
    }
  }
})
