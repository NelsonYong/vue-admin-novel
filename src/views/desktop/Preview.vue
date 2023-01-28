<template>
  <div style="width: 100%">
    <div v-if="isRender" ref="container" style="width: 100%"></div>
  </div>
</template>

<script lang="ts" setup>
  import { usePreview, useTimeout } from 'vue-hooks-plus'

  const props = defineProps<{
    preview: any
  }>()
  const previewRef = computed(() => props.preview)
  const { container } = usePreview(previewRef)
  const isMounted = ref(false)

  const isRender = ref(false)

  onMounted(() => {
    isMounted.value = true
  })

  watchEffect(() => {
    if (isMounted.value) {
      useTimeout(() => {
        isRender.value = true
      }, 550)
    }
  })
</script>

<style scoped lang="less">
  iframe {
    width: 100%;
    height: 100%;
  }
</style>
