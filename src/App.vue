<template>
  <a-layout>
    <a-layout-sider
      class="layout-sider"
      collapsible
      v-model:collapsed="collapsed"
    >
      <div
        :class="
          clxs(
            'w-full h-10 flex  items-center overflow-hidden pl-2 mt-2',
            collapsed ? 'justify-center' : ''
          )
        "
      >
        <img
          style="width: 27px; height: 24px"
          src="https://raw.githubusercontent.com/InhiblabCore/vue-hooks-plus/master/packages/hooks/docs/public/logo.png"
          alt=""
        />
        <span
          v-show="!collapsed"
          class="w-30 whitespace-nowrap pl-2 font-[700] text-lg"
          >Vue Admin Novel</span
        >
      </div>
      <a-menu
        mode="inline"
        class="layout-menu mt-1"
        @click="menuClick as any"
        v-model:selectedKeys="selectedKeys"
      >
        <a-menu-item key="/setup">
          <aliwangwang-filled />
          <span>首页</span>
        </a-menu-item>
        <a-menu-item key="/stage-manager">
          <apple-filled />
          <span>调度</span>
        </a-menu-item>
        <!-- <a-menu-item key="/upload">
          <rocket-filled />
          <span>上传</span>
        </a-menu-item>

        <a-menu-item key="/app-warehouse">
          <appstore-filled />
          <span>资源库</span>
        </a-menu-item>

        <a-menu-item key="/code-area">
          <security-scan-filled />
          <span>码场</span>
        </a-menu-item> -->
      </a-menu>
    </a-layout-sider>

    <a-layout style="padding: 12px" class="layout">
      <Loading>
        <a-layout-content class="layout-content">
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </a-layout-content>
      </Loading>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import {
  // RocketFilled,
  AliwangwangFilled,
  AppleFilled
  // AppstoreFilled,
  // SecurityScanFilled,
  // DesktopOutlined
} from '@ant-design/icons-vue'
// import { MenuClickEventHandler } from 'ant-design-vue/es/menu/src/interface'
import { useDarkMode, useWinResize } from 'vue-hooks-plus'
import clxs from 'classnames'

const router = useRouter()
const route = useRoute()
const collapsed = ref(true)
const layoutContentHeight = ref(0)
const selectedKeys = ref(['/setup'])

const [darkMode, setDarkMode] = useDarkMode()

provide('darkMode', [darkMode, setDarkMode])

watchEffect(() => {
  document
    .querySelector('html')
    ?.setAttribute(
      'data-prefers-color-scheme',
      `${darkMode.value ? 'dark' : ''}`
    )
})

watchEffect(() => {
  selectedKeys.value = [route.path]
})

onMounted(() => {
  const height = window.outerHeight - 135
  layoutContentHeight.value = height
})

useWinResize(() => {
  const height = window.outerHeight - 135
  layoutContentHeight.value = height
})

const menuClick = ({ key }: { key: string }) => {
  router.push({ path: key })
}
</script>
<style lang="less">
body {
  background-color: var(--van-layout-sider-color);
}

.layout {
  background-color: var(--van-layout-sider-color);
}
.layout-content {
  background-color: var(--van-page-background);
  // padding: 12px;
  margin: 0;
  overflow: scroll;
  min-height: 280px;
  border-radius: 0.35rem;
  height: calc(100vh - 24px);
}

.layout-sider {
  background-color: var(--van-layout-sider-color);
  color: var(--van-layout-sider-font-color);
}

.layout-menu {
  background-color: var(--van-layout-sider-color);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 0;
  color: var(--van-layout-sider-font-color);
}

.ant-menu-item {
  background-color: var(--van-layout-sider-color);
  color: var(--van-layout-sider-font-color);
  border-radius: 1rem 0 0 1rem !important;
  font-weight: 500;
  span {
    position: relative;
    top: 1x;
  }
}
.ant-menu-light .ant-menu-item:hover,
.ant-menu-light .ant-menu-item-active,
.ant-menu-light .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
.ant-menu-light .ant-menu-submenu-active,
.ant-menu-light .ant-menu-submenu-title:hover {
  @apply text-purple-700;
}

.ant-menu {
  background-color: var(--van-layout-sider-color);
  color: var(--van-layout-sider-font-color);
}

.ant-menu-submenu {
  background-color: var(--van-layout-sider-color);
  color: var(--van-layout-sider-font-color);
  border-radius: 1rem 0 0 1rem !important;
}

.ant-menu-inline {
  background-color: var(--van-layout-sider-color) !important;
  color: var(--van-layout-sider-font-color);
  border-radius: 1rem 0 0 1rem !important;
}

.ant-menu-item-selected {
  background-color: rgba(82, 129, 255, 0.15) !important;
  border-radius: 1.5rem 0 0 1.5rem !important;

  @apply text-purple-700;
}

.ant-menu-title-content {
  display: flex;
  align-items: center;
}

.ant-layout-sider-trigger {
  background-color: var(--van-layout-sider-color) !important;
}

.ant-layout-sider-trigger {
  color: var(--van-layout-sider-font-color);
  font-size: 18px;
  opacity: 0.8;
}
</style>
