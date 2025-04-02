import { defineStore } from 'pinia'

const useStore = defineStore('yearInfo', {
  state: () => {
    return {
      year: '2025',
    };
  },
  actions: {
    // 设置ws上一次连接的随机标识
    setYear(year) {
      useStore().year = year
      localStorage.setItem('year', year)
    },
  },
  getters: {
  }
})

export default useStore