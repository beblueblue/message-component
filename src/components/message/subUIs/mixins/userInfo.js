import CodeToUserInfo from '@c/common/userInfo';

export const userInfoMixin = {
  props: {
    message: Object,
  },
  methods: {
    /**
     * 获取用户信息
     * @return Object: { profile, name }
     */
    getUserInfo() {
      const { userCode } = this.message;
      let info = '';

      if (CodeToUserInfo[userCode]) {
        info = CodeToUserInfo[userCode];
      } else {
        // 处理用户信息不存在的情况，
      }
      return info;
    }
  }
}