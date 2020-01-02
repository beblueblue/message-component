# 类微信消息渲染组件

##  消息UI模块细化
- [x] 用户文本消息
- [x] 用户图片消息
- [x] 好友文本消息
- [x] 好友图片消息
- [x] 系统文本消息

##  性能优化
- [x] 图片懒加载 -- 利用[vue-lazyload](https://github.com/hilongjw/vue-lazyload)

##  项目运行
#### 基于Vue.js实现，利用Vue-CLI搭建项目。
```

git clone https://github.com/beblueblue/message-component.git

cd message-component

npm install

npm run serve

```

## 实现思路


组件 [MessageRender](https://github.com/beblueblue/message-component/blob/master/src/components/message/MessageRender.vue)
+ 设定消息类型ID: MsgTypes和消息发送方ID: SourceTypes
```
MsgTypes: {
  // 文本信息
  TXT = 0,
  // 图片信息
  IMG = 1,
}

SourceTypes: {
  // 系统消息
  SYS = 0,
  // 用户消息
  USER = 1,
  // 用户好友消息
  OTHER = 2,
}
```
+ 消息UI细分为5种， [subUIs](https://github.com/beblueblue/message-component/tree/master/src/components/message/subUIs)
```
MsgToUI: {
  sysTxt: 'sys-txt',
  userTxt: 'user-txt',
  userImg: 'user-img',
  otherTxt: 'other-txt',
  otherImg: 'other-img',
  blank: 'blank',
}
```
+ 构建消息虚拟数据 [ListMaker](https://github.com/beblueblue/message-component/blob/b028e7bc5c/src/utils/test/mockData.js) 和用户信息映射关系表 [CodeToUserInfo](https://github.com/beblueblue/message-component/blob/b028e7bc5c5cf03e82e2f8854bafbe6ae2de51b3/src/components/common/userInfo/index.js)
```
/**
 * 消息数据格式
 * msgItem: {
 *    id: Number,
 *    userCode: Number | String,
 *    messageInfo: {
 *        msgType: Number
 *        sourceType: Number,
 *        context?: String,
 *        largeUrl?: String,
 *        smallUrl?: String,
 *        imgName?: String,
 *    }
 * }
 */
 ```
 + 利用 [mixin](https://github.com/beblueblue/message-component/tree/b028e7bc5c5cf03e82e2f8854bafbe6ae2de51b3/src/components/message/subUIs/mixins) ，复用获取数据的方式，降低数据格式和UI的耦合。

 ## 除Vue之外的引用
 + [ css 样式库 -- 张鑫旭](https://github.com/zhangxinxu/zxx.lib.css) 作用：提高 css 复用。
 + [ vue-lazyload ](https://github.com/hilongjw/vue-lazyload) 作用：图片懒加载

 ## 不足与解决方案
 + 问题：针对大量聊天记录的性能优化  
 解决方案1： 服务端将记录分页，客户端异步获取；  
 解决方案2： 滚动加载可视区域数据，可参考[饿了么实现](https://zhuanlan.zhihu.com/p/34585166?group_id=959080998969823232)。