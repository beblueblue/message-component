<template>
  <div id="app">
    <div class="auto mt30 pct60 render-box" ref="box">
      <MessageRender :message-list="messageList" />
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import MessageRender from '@c/message/MessageRender.vue';

  @Component({
    components: {
      MessageRender,
    },
  })
  export default class App extends Vue {
    messageList = [
      {
        id: 0,
        userCode: 1,
        messageInfo: {
          msgType: 0,
          sourceType: 2,
          context: '你好',
        },
      },
      {
        id: 1,
        userCode: 2,
        messageInfo: {
          msgType: 1,
          sourceType: 2,
          largeUrl: '/images/bird1_large.jpg',
          smallUrl: '/images/bird1_small.jpg',
          imgName: 'bird2',
        },
      },
      {
        id: 2,
        userCode: 2,
        messageInfo: {
          msgType: 1,
          sourceType: 2,
          largeUrl: '/images/bird3_large.jpg',
          smallUrl: '/images/bird3_small.jpg',
          imgName: 'bird2',
        },
      },
      {
        id: 3,
        userCode: 0,
        messageInfo: {
          msgType: 0,
          sourceType: 1,
          context: '你好',
        },
      },
      {
        id: 4,
        userCode: 0,
        messageInfo: {
          msgType: 1,
          sourceType: 1,
          largeUrl: '/images/bird2_large.jpg',
          smallUrl: '/images/bird2_small.jpg',
          imgName: 'bird1',
        },
      },
      {
        id: 5,
        userCode: -1,
        messageInfo: {
          msgType: 1,
          sourceType: 0,
          context: '您撤回了一条消息',
        },
      },
    ]
  }
</script>
<style>
  .render-box {
    height: 80vh;
    overflow: auto;
  }
</style>