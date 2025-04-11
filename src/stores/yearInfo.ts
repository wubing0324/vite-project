import { defineStore } from 'pinia'

export const useYearStore = defineStore('yearInfo', {
  state: () => ({
    year: '2025'
  }),
  actions: {
    setYear(year: string) {
      this.year = year
      localStorage.setItem('year', year)
    }
  }
})
