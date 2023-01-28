<template>
  <div
    ref="container"
    :style="{
      color: 'var(--van-font-color)',
      height: affixHeight ? `${affixHeight}px` : 'auto',
      overflow: 'scroll',
      padding: `24px`
    }"
  ></div>
</template>

<script lang="ts" setup>
import { ComputedRef } from 'vue'

const props = defineProps<{
  md?: string
  affixHeight?: number
}>()
const previewRef = computed(() => props.md)
const { container } = usePreview(previewRef as ComputedRef<string>)
</script>

<style lang="less">
h1 {
  @apply text-2xl;
  color: var(--van-font-color);
}
h2 {
  @apply text-xl;
  color: var(--van-font-color);
}
h3 {
  @apply text-lg;
  color: var(--van-font-color);
}
</style>
