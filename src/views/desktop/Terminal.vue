<template>
  <div id="demo-editor">
    <div class="terminal">
      <slot></slot>
      <div>
        <pre ref="block" class="language-vue extra-class"></pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less">
  #demo-editor {
    width: 100%;
  }

  .import-code {
    color: rgb(230, 71, 164);
  }

  .export-code {
    color: rgb(70, 166, 240);
  }

  .module-code {
    color: #fabe3b;
  }

  .variable-code {
    color: #38cd46;
  }

  .label-code {
    color: rgb(240, 60, 69);
  }

  .terminal {
    height: 100%;
    line-height: 16px;
    min-height: 480px;
    border-radius: 7px;
    position: relative;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 30px 1px rgba(0, 0, 0, 0.15);
    width: 100%;
    max-width: 100%;
    overflow: scroll;
    // padding-bottom: 0;
    // margin-bottom: 32px;
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
    box-shadow: 0 0 0 1px #da3d42, 22px 0 0 0 #fabe3b, 22px 0 0 1px #ecb03e, 44px 0 0 0 #38cd46,
      44px 0 0 1px #2eae32;
  }
</style>
