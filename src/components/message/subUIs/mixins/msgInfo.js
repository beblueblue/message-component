export const msgInfoMixin = {
  props: {
    message: Object,
  },
  methods: {
    /**
    * 获取文本信息
    * @return String: 消息内容
    */
    getTxt() {
      const { messageInfo } = this.message;

      return messageInfo.context;
    },
    /**
     * 获取图片信息
     * @return Object: { largeUrl, smallUrl, imgName }
     */
    getImg() {
      const {
        messageInfo: {
          largeUrl,
          smallUrl,
          imgName,
        }
      } = this.message;
      return { largeUrl, smallUrl, imgName }
    },
    getSysTxt() {
      return this.getTxt();
    },
    getUserTxt() {
      return this.getTxt();
    },
    getUserImg() {
      return this.getImg();
    },
    getOtherTxt() {
      return this.getTxt();
    },
    getOtherImg() {
      return this.getImg();
    },
  }
}