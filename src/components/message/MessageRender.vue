<template>
  <div class="bgfb">
    <component v-for="(message, index) in messageList" :is="getMsgType(message.message_info)"></component>
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
    data() {
      return {
        msgUITypeMap: {
          sysTxt: 'sys-txt',
          useTxt: 'use-txt',
          useImg: 'use-img',
          otherTxt: 'other-txt',
          otherImg: 'other-img',
        },
        messageList: [
        {
          use_code: 1,
          message_info: {
            msgType: 0,
            sourceType: 2,
            context: '你好',
          },
        },
        {
          use_code: 2,
          message_info: {
            msgType: 1,
            sourceType: 2,
            large_url: '/images/bird2_large.jpg',
            small_url: '/images/bird2_small.jpg',
          },
        },
        {
          use_code: 0,
          message_info: {
            msgType: 0,
            sourceType: 1,
            context: '你好',
          },
        },
        {
          use_code: 0,
          message_info: {
            msgType: 1,
            sourceType: 1,
            large_url: '/images/bird1_large.jpg',
            small_url: '/images/bird1_small.jpg',
          },
        },
        {
          use_code: -1,
          message_info: {
            msgType: 1,
            sourceType: 0,
            context: '您撤回了一条消息',
          },
        }, ],
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
      }
    },
  };
</script>