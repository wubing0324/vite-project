import { defineStore } from 'pinia'
import yearInfo from './yearInfo'
const modules = import.meta.glob('./*.ts', { eager: true })
console.log(modules)
export default defineStore('app', {
  state() {
    return {
      yearInfo: yearInfo()
    }
  }
})
