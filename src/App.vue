<template>
  <div id="app">
    <div class="auto mt30 pct60 render-box" ref="box">
      <MessageRender :message-list="messageList" />
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  // 导入UI组件
  import MessageRender from '@c/message/MessageRender.vue';
  // 导入测试工具
  import getList from '@/utils/test/mockData';
  // 导入懒加载模块
  import VueLazyLoad from 'vue-lazyload';

  const length = 20;

  Vue.use(VueLazyLoad, {
    attempt: 1,
  });

  @Component({
    components: {
      MessageRender,
    },
  })
  export default class App extends Vue {
    public messageList = getList(length);
  }
</script>
<style>
  .render-box {
    height: 80vh;
    overflow: auto;
  }
</style>