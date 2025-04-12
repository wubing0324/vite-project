/* eslint-env node */
export default {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 100, // 设计稿宽度/10，比如设计稿宽度是 1920px，则设置为 192
      propList: ['*'], // 需要转换的属性，* 表示所有属性
      selectorBlackList: [], // 不需要转换的选择器
      minPixelValue: 1, // 小于或等于 1px 不转换为 rem
      mediaQuery: false, // 是否在媒体查询的 css 代码中也进行转换
      exclude: /node_modules/i // 排除 node_modules 文件夹
    }
  }
}
