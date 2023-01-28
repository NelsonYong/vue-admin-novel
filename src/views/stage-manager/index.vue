<template>
  <FrontScheduling :resources="resources" />
</template>

<script lang="ts" setup>
import Demo from '../example/demo.vue'
import MarkDown from './MarkDown.vue'
import FrontScheduling from './FrontScheduling.vue'
import cover from '@/assets/app.png'

const resources = ref<
  {
    top: number
    key: number
    view: string
    active: boolean
    container: {
      type: string
      main?: any
    }
  }[]
>(
  [
    {
      view: cover,
      container: {
        type: 'iframe',
        main: 'https://inhiblabcore.github.io/docs/hooks/useRequest'
      }
    },
    {
      view: cover,
      container: {
        type: 'iframe',
        main: 'https://inhiblabcore.github.io/docs/hooks/useFetchs'
      }
    },
    {
      view: cover,
      container: {
        type: 'component',
        main: h(MarkDown, {
          md: `# 我是markdown

## hello world

### hello world

#### hello world

<hr />

## hello world

### hello world

#### hello world

<hr />

## hello world

### hello world

#### hello world

# 我是markdown

## hello world

### hello world

#### hello world

<hr />

## hello world

### hello world

#### hello world

<hr />

## hello world

### hello world

#### hello world
# 我是markdown

## hello world

### hello world

#### hello world

<hr />

## hello world

### hello world

#### hello world

<hr />

## hello world

### hello world

#### hello world
# 我是markdown

## hello world

### hello world

#### hello world

<hr />

## hello world

### hello world

#### hello world

<hr />

## hello world

### hello world

#### hello world
# 我是markdown

## hello world

### hello world

#### hello world

<hr />

## hello world

### hello world

#### hello world

<hr />

## hello world

### hello world

#### hello world


`
        })
      }
    },
    {
      view: cover,
      container: {
        type: 'text',
        main: '我是文本：浏览内容'
      }
    },
    {
      view: cover,
      container: {
        type: 'component',
        main: Demo
      }
    }
  ]?.map((item, index) => ({
    ...item,
    key: index,
    active: false,
    top: index * (100 + 24) + 24
  }))
)
</script>

<style scoped lang="less"></style>
