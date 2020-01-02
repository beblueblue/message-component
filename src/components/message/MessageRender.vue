<template>
  <div class="list-box pl20 pr20 bgf5">
    <component 
        v-for="(message, index) in messageListCache" 
        :is="getMsgType(message.messageInfo)"
        :message="message"
        :key="message.id"
    ></component>
  </div>
</template>

<script>
  import { MsgTypes } from '@c/common/message/MsgTypes.ts';
  import { SourceTypes } from '@c/common/message/SourceTypes.ts';

  import { MsgToUI } from './MsgToUI';
  import MsgUIComponents from './MsgUI';

  export default {
    name: 'MessageRender',
    components: MsgUIComponents,
    props: {
        messageList: Array,
    },
    data() {
      return {
        messageListCache: this.messageList.slice(),
      };
    },
    methods: {
      /**
       * 获取消息类型
       * @param Object messageInfo 消息详细信息
       * @return String 消息组件名
       */
      getMsgType(messageInfo) {
        let type = MsgToUI.blank;
        switch (messageInfo.sourceType) {
          // 系统消息
        case SourceTypes.SYS:
          type = MsgToUI.sysTxt;
          break;
          // 用户消息
        case SourceTypes.USER:
          if (messageInfo.msgType === MsgTypes.TXT) {
            type = MsgToUI.userTxt;
          } else if (messageInfo.msgType === MsgTypes.IMG) {
            type = MsgToUI.userImg;
          }
          break;
          // 好友消息
        case SourceTypes.OTHER:
          if (messageInfo.msgType === MsgTypes.TXT) {
            type = MsgToUI.otherTxt;
          } else if (messageInfo.msgType === MsgTypes.IMG) {
            type = MsgToUI.otherImg;
          }
          break;
        default:
        }
        return type;
      },
    },
  };
</script>

<style>
.list-box {
    min-height: 100%;
}
</style>