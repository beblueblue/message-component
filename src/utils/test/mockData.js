// 引入消息类型ID枚举，发送方类型ID枚举
import { MsgTypes } from '@c/common/message/MsgTypes.ts';
import { SourceTypes } from '@c/common/message/SourceTypes.ts';

const userCodes = [-1, 0, 1, 2];
const typeIDs = [MsgTypes.TXT, MsgTypes.IMG];
const sysTxtList = [
  '您撤回了一条消息',
  '欢迎 李白 加入群聊',
  '很遗憾！荀子 退出了群聊',
];
const contextList = [
  '你好', 
  '不积跬步无以至千里，不积小流无以成江海', 
  `君不见，黄河之水天上来，奔流到海不复回。
  君不见，高堂明镜悲白发，朝如青丝暮成雪。
  人生得意须尽欢，莫使金樽空对月。
  天生我材必有用，千金散尽还复来。
  烹羊宰牛且为乐，会须一饮三百杯。`,
];
const imgList = [
  {largeUrl: '/images/bird1_large.jpg', smallUrl: '/images/bird1_small.jpg', imgName: 'bird1'},
  {largeUrl: '/images/bird2_large.jpg', smallUrl: '/images/bird2_small.jpg', imgName: 'bird2'},
  {largeUrl: '/images/bird3_large.jpg', smallUrl: '/images/bird3_small.jpg', imgName: 'bird3'},
];
const Sequence = (function () {
  let instance = null;
  let _num = 0;

  class _Singleton {
      constructor() {
          if (!instance) {
              instance = this;
          }
          return instance;
      }
      next() {
          return _num++;
      }
  }
  return _Singleton;
})();

function getRandom(arr) {
  return arr[Math.random() * arr.length | 0];
}

/**
 * 虚拟数据生成器
 */
class ListMaker {
  constructor(length) {
    const list = []
    const idMaker = new Sequence();
    
    while(length--) {
      const dataItem = {};
      dataItem.id = idMaker.next();
      dataItem.userCode = getRandom(userCodes);
      if(dataItem.userCode === -1) {
        dataItem.messageInfo = {
          msgType: MsgTypes.TXT,
          sourceType: SourceTypes.SYS,
          context: getRandom(sysTxtList),
        }
      } else {
        dataItem.messageInfo = {
          msgType: getRandom(typeIDs),
          sourceType: dataItem.userCode === 0 ? SourceTypes.USER : SourceTypes.OTHER,
        }
        if(dataItem.messageInfo.msgType === MsgTypes.TXT) {
          dataItem.messageInfo.context = getRandom(contextList);
        } else if(dataItem.messageInfo.msgType === MsgTypes.IMG) {
          const img = getRandom(imgList);
          dataItem.messageInfo.largeUrl = img.largeUrl;
          dataItem.messageInfo.smallUrl = img.smallUrl;
          dataItem.messageInfo.imgName = img.imgName;
        }
      }
      list.push(dataItem);
    }
    this.list = list;
  }
}

/**
 * 获取虚拟数据
 * @param { Number } num: 数据数量
 * @return { Array } 虚拟数据列表
 */
export default function getList(num) {
  const listInstance = new ListMaker(num)
  return listInstance.list
}
