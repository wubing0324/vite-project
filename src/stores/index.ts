import { defineStore } from 'pinia'
import { useYearStore } from './yearInfo'
const modules = import.meta.glob('./*.ts', { eager: true })
console.log(modules)
export const useStore = defineStore('app', {
  state: () => ({
    yearStore: useYearStore()
  })
})
