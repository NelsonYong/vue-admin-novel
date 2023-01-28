<template>
  <div class="flex flex-col items-center justify-center h-full w-full mt-20">
    <img
      @click="handleClick"
      src="https://raw.githubusercontent.com/InhiblabCore/vue-hooks-plus/master/packages/hooks/docs/public/logo.png"
      alt="logo"
      style="cursor: pointer"
    />
    <div @click="handleClick" class="header cursor-pointer">
      {{ title ?? '-' }}
    </div>
    <div>Click Logo & Title 👆 Change Theme</div>
  </div>
  <!-- <div class="header" v-boolean="boolean">test</div> -->
</template>

<script lang="ts" setup>
import JSConfetti from 'js-confetti'
defineProps<{
  title?: string
}>()

// @ts-ignore
const [darkMode, setDarkMode] = inject<any>('darkMode')
const [value, { toggle, set }] = useToggle()

const confetti = new JSConfetti()

onMounted(() => {
  // @ts-ignore
  set(darkMode.value)
  setDarkMode?.(localStorage.getItem('dark-mode-enabled')?.includes('true'))
})

watch(value, (v) => {
  setDarkMode(v)
})

const handleClick = () => {
  toggle()
  confetti.addConfetti()
}
</script>

<style scoped lang="less">
img {
  width: 370px;
  height: 300px;
}

.header {
  font-size: 64px;
  font-weight: 600;
  text-align: center;
}
</style>
