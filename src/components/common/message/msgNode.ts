// 引入消息类型ID枚举，发送方类型ID枚举
import { MsgTypes } from './MsgTypes';
import { SourceTypes } from './SourceTypes';

abstract class Msg {
  readonly msgType: number;
  readonly sourceType: number;
  constructor(
    msgTypeID: MsgTypes,
    sourceTypeID: SourceTypes,
  ) {
    this.msgType = msgTypeID;
    this.sourceType = sourceTypeID;
  }
};

export class TxtMsg extends Msg {
  context: string;

  constructor(
    sourceTypeID: SourceTypes,
    context: string,
  ) {
    super(MsgTypes.TXT, sourceTypeID);
    this.context = context;
  }
};

export class ImgMsg extends Msg {
  largeUrl: string;
  smallUrl: string;
  imgName: string;

  constructor(
    sourceTypeID: SourceTypes,
    smallUrl: string,
    largeUrl: string,
    imgName: string,
  ) {
    super(MsgTypes.IMG, sourceTypeID);
    this.largeUrl = largeUrl;
    this.smallUrl = smallUrl;
    this.imgName = imgName;
  }
}
