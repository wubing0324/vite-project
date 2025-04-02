import Vue from 'vue'
import SvgIcon from './SvgIcon.vue'

Vue.component('SvgIcon', SvgIcon)

// 自动引入所有的图标svg文件
import.meta.glob('@/assets/svg/*.svg', { eager: true })
import 'virtual:svg-icons-register'

export interface SvgIconProps {
  name: string;
  color?: string;
  size?: string | number;
}
