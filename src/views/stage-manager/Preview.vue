<template>
  <div style="width: 100%">
    <div v-if="isRender" ref="container" style="width: 100%"></div>
    <div tyle="width: 100%" v-else>
      <img :src="cover" class="cover" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePreview, useTimeout } from 'vue-hooks-plus'

const props = defineProps<{
  preview: {
    type: string
    main: any
  }
  cover: any
  active: boolean
}>()
const previewRef = computed(() => props.preview.main)
const { container } = usePreview(previewRef)
const isMounted = ref(false)

const isRender = ref(false)

onMounted(() => {
  isMounted.value = true
})

watchEffect(() => {
  if (isMounted.value && props.active && isRender.value === false) {
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

.cover {
  background-size: cover;
  width: 100%;
}
</style>
