<template>
  <div class="home">
    <Hearder :title="title" />
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Home',
  }
</script>

<script lang="ts" setup>
  // import { useHomeStore } from '@/store/modules/home'
  // import { storeToRefs } from 'pinia'
  import Hearder from './Hearder.vue'

  const title = ref(`Vue Admin Novel 🌟`)

  /**
   * 使用vue内置全局环境变量
   */
  console.log(`${import.meta.env.VITE_APP_ENV}`)

  /**
   * 发送网络请求
   */
  // import { useRequest } from 'vue3-hooks-plus';
  // import { getName } from './services';
  // 请求实例
  // const { data } = useRequest(() => getName(123));

  /**
   * 使用pinia状态管理
   */
  // const store = useHomeStore()
  // const storeTitle = computed(() => store.getFuncTitle)
  // // 保持响应式
  // const { count } = storeToRefs(store)

  // // const newCount = computed(() => `state ${count.value}`)
  // store.$patch({ count: store.count + 10 });
  // store.incrementPromise();
</script>

<style scoped lang="less">
  .home {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
