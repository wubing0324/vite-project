<script setup lang="ts">
</script>

<template>
  <div class="main-view">
    <transition mode="out-in" name="slide-base">
      <router-view name="base" class="main-aside main-aside-base" />
    </transition>

    <transition mode="out-in" name="slide-base-no-animation">
      <router-view name="baseNoAnimation" class="main-aside main-aside-base" />
    </transition>

    <router-view class="main-aside main-aside-bottom" name="bottom" />

    <transition mode="out-in" name="slide-aside-left">
      <router-view name="left" class="main-aside main-aside-left" />
    </transition>

    <transition mode="out-in" name="slide-aside-right">
      <router-view name="right" class="main-aside main-aside-right" />
    </transition>

    <transition mode="out-in" name="slide-center">
      <router-view name="center" class="main-aside main-aside-center" />
    </transition>

    <router-view class="main-aside main-aside-top" name="top" />
  </div>
</template>

<style lang="scss" scoped>
.main-view {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .main-aside {
    position: absolute;
  }
  .main-aside-top {
    top: 0;
    width: 100%;
    background: #3bd995;
  }
  .main-aside-base {
    height: 100vh;
    width: 63vw;
    transform: translateX(-50%);
    left: 50%;
    background: #99dcdd;
    overflow: hidden;
    padding-top: 86px;
  }
  .main-aside-left {
    z-index: 10;
    left: 0;
    background: #e6ec95;
    width: 18vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .main-aside-right {
    z-index: 10;
    background: #e6ec95;
    right: 0;
    width: 18vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .main-aside-center {
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  .main-aside-bottom {
    bottom: 10px;
    width: 35vw;
    height: 100px;
    border: 1px solid red;
    z-index: 11;
    left: 50%;
    transform: translateX(-50%);
  }
}

.slide-aside-left-enter-active,
.slide-aside-left-leave-active,
.slide-aside-right-enter-active,
.slide-aside-right-leave-active {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}

// 左侧菜单动画
.slide-aside-left-enter-from,
.slide-aside-left-leave-to {
  transform: translateX(-100%);
}

// 右侧菜单动画
.slide-aside-right-enter-from,
.slide-aside-right-leave-to {
  transform: translateX(100%);
}

.slide-base-enter-active,
.slide-base-leave-active {
  transition: all 1.5s ease;
  opacity: 1;
}
.slide-base-enter,
.slide-base-leave-to {
  opacity: 0;
}

.slide-center-enter-active,
.slide-center-leave-active {
  transition: all 0.5s ease;
  opacity: 1;
}
.slide-center-enter,
.slide-center-leave-to {
  opacity: 0;
}
</style>
