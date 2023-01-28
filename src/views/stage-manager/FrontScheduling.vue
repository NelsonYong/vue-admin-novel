<template>
  <div class="wrapper">
    <div class="container" ref="containerRef">
      <div
        class="small-figure"
        v-for="item in resourcesRef"
        :key="item.key"
        :style="{
          backgroundSize: 'cover',
          top: `${item.top}px`,
          filter: item.active ? 'none' : 'grayscale(10%)'
        }"
        :ref="
          (ref) => {
            setFigureRefs(ref)
          }
        "
        @click="() => (item.active ? null : handleClick(item.key))"
      >
        <div
          :style="{
            width: `${scaleNum * 100}%`,
            height: `${scaleNum * 100}%`,
            overflow: 'scroll',
            transform: `scale3d(${zoomValue},${zoomValue},${zoomValue})`,
            position: 'absolute',
            padding: '24px',
            paddingTop: `${30 + scaleNumAdd * 20}px`,
            paddingLeft: `0px`,
            paddingRight: `0px`,
            paddingBottom: 0,
            transformOrigin: 'top left'
          }"
          :ref="
            (ref) => {
              setTerminalRefs(ref)
            }
          "
          class="terminal"
        >
          <Preview
            :preview="item.container"
            :cover="item.view"
            :active="item.active"
          />
        </div>

        <div
          v-if="item.active === false"
          class="mask"
          :style="{
            width: `100%`,
            height: `100%`,
            overflow: 'hidden',
            position: 'absolute',
            padding: '24px',
            paddingTop: `${30 + scaleNumAdd * 20}px`,
            paddingLeft: `8px`,
            transformOrigin: 'top left',
            zIndex: 9999
          }"
        ></div>
      </div>
    </div>
    <div class="bar">
      <!-- <div><apple-filled /></div> -->
      <div @click="barClick('https://github.com/NelsonYong/vue-admin-novel')">
        <github-filled />
      </div>
      <!-- <div><chrome-filled /></div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { GithubFilled } from '@ant-design/icons-vue'
import { frontSchedulingTransformEnterView } from './frontScheduling'
import { generatePreview } from './frontScheduling/generatePreview'
import Preview from './Preview.vue'

const containerRef = ref()
const figureRefs = ref<any[]>([])
const terminalRefs = ref<HTMLDivElement[]>([])
const activeKey = ref(0)
const scaleNum = ref(5)
const scaleNumAdd = ref(0)

const setFigureRefs = (el: any) => {
  if (el) figureRefs.value.push(el)
}

const setTerminalRefs = (el: any) => {
  if (el) terminalRefs.value.push(el)
}

const resourcesRef = ref()

const props = defineProps<{
  resources: {
    top: number
    key: number
    view: string
    active: boolean
    container: {
      type: string
      main?: any
    }
  }[]
}>()

watchEffect(() => {
  resourcesRef.value = props.resources
})

onMounted(() => {
  scaleNum.value = (window.screen.availWidth * 6) / 1920
  scaleNumAdd.value = (window.screen.availWidth * 0.08) / 1920
  handleClick(0)
  resourcesRef.value = resourcesRef?.value?.map((item: any) => ({
    ...item,
    container: generatePreview(item.container, 100 * scaleNum.value - 30)
  }))
})

const zoomValue = computed(() => 1 / scaleNum.value)

const returnList = (index: number, top: number) => {
  figureRefs.value[activeKey.value].style.transform =
    'rotate3d(0,1,0,65deg) scale3d(1,1,1)'
  figureRefs.value[activeKey.value].style.top = `${top}px`
  figureRefs.value[activeKey.value].style.left = `0px`
  resourcesRef.value[index].top = top
}

const handleClick = (key: number) => {
  const activeTargetIndex = resourcesRef.value.findIndex(
    (i: { active: boolean }) => i.active === true
  )
  const replaceTarget = resourcesRef.value.find(
    (i: { key: number }) => i.key === key
  )

  if (activeTargetIndex !== -1) {
    // @ts-ignore
    returnList(activeTargetIndex, replaceTarget?.top)
  }
  activeKey.value = key
  frontSchedulingTransformEnterView(
    containerRef.value,
    figureRefs.value[key],
    scaleNum.value,
    0.35,
    (top) => {
      resourcesRef.value = resourcesRef.value.map((item: { key: number }) => {
        if (item.key === key)
          return {
            ...item,
            active: true,
            top
          }
        return {
          ...item,
          active: false
        }
      })
    }
  )
}

const barClick = (url: string) => {
  window.open(url, '__')
}
</script>

<style scoped lang="less">
.wrapper {
  width: 100%;
  height: 100%;
  background: url('../../assets/bg.jpeg') no-repeat;
  background-size: cover;
  color: var(--van-font-color);
  position: relative;
  padding: 12px;
}
.container {
  width: 100%;
  height: calc(100% - 1% - 49px - 2px);
  position: absolute;
  perspective: 1500px;
  opacity: 1;
  perspective-origin: 60% 50%;

  .small-figure {
    transition-timing-function: ease;
    position: absolute;
    left: 0;
    height: 100px;
    width: 180px;
    background-color: var(--van-layout-sider-color);
    transform: rotate3d(0, 1, 0, 65deg);
    border-radius: 2px;
    overflow: hidden;
    transition: transform 0.25s;
  }

  .small-figure:hover {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 1, 0, 65deg);
    opacity: 1;
    filter: none;
  }
}

.terminal {
  height: 100%;
  line-height: 16px;
  border-radius: 7px;
  position: relative;
  width: 100%;
  overflow: scroll;
  transform: translateZ(0) translate3d(0, 0, 0);
}

.terminal::after {
  content: '';
  position: fixed;
  top: 12px;
  left: 10px;
  width: 12px;
  height: 12px;
  z-index: 100;
  background: #f95c5b;
  border-radius: 7px;
  box-shadow: 0 0 0 1px #da3d42, 22px 0 0 0 #fabe3b, 22px 0 0 1px #ecb03e,
    44px 0 0 0 #38cd46, 44px 0 0 1px #2eae32;
}

.close {
  width: 12px;
  height: 12px;
  background: #f95c5b;
  border-radius: 100%;
}

.mask {
  opacity: 0.05;
  background-color: var(--van-real-header-color);
  filter: grayscale(50%);
  cursor: pointer;
}

.mask:hover {
  opacity: 0;
  // transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 1, 0, 65deg);
  filter: none;
}

.bar {
  position: absolute;
  // width: 90%;
  bottom: 1%;
  height: 49px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  border: 1px solid rgba(182, 202, 230, 0.35);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  padding-right: 24px;
  font-size: 32px;
  justify-content: center;
  padding-left: 24px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;
    color: var(--van-font-color);
  }
  div:hover {
    transform: scale3d(1.15, 1.15, 1.15);
  }

  & > div:nth-child(n + 2) {
    margin-left: 12px;
  }
}
</style>
