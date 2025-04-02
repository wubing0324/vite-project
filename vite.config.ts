import { defineConfig } from 'vite';
import vue2 from '@vitejs/plugin-vue2';
import vue2Jsx from '@vitejs/plugin-vue2-jsx';
import DefineOptions from 'unplugin-vue-define-options/vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import requireTransform from 'vite-plugin-require-transform';
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    requireTransform({ fileRegex: /maptalks.gmvi|.ts$|.tsx$/ }),
    vue2(),
    vue2Jsx(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    }),
    DefineOptions(),
    requireTransform({ fileRegex: /maptalks.gmvi|.ts$|.vue$/ }),
  ],
});
