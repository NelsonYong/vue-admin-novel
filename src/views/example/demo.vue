<template>
  <div class="flex flex-col w-full items-center">
    <img
      src="https://vuejs.org/images/logo.png"
      alt="vue logo"
      style="cursor: pointer"
    />
    <div class="text-3xl">
      我是组件
      {{ count }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const count = ref(0)

useInterval(() => {
  count.value++
}, 1000)
</script>

<style scoped lang="less">
img {
  width: 300px;
  height: 300px;
}
</style>
