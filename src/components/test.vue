<template>
  <div>
    <h1>test</h1>
  </div>
</template>

<script>
export default {
  name: 'test-vue',
  props: {
    msg: {
      type: String,
      default: 'hello'
    }
  },
  data() {
    return {
      count: 0,
      fds: 'fsd'
    }
  },
  methods: {
    handleClick() {
      this.count++
      this.fds = 'fsd'
    }
  }
}
</script>

<style lang="scss" scoped></style>
