<template>
  <div class="user-txt-box flex flex-justify-content-flex-end pt10 pb10">
    <p class="mr10 b-r-4 p5 lh20">{{ getUserTxt() }}</p>
    <img class="b-r-4 w30 h30" :src="getUserInfo().profile" :alt="getUserInfo().name">
  </div>
</template>

<script>
  import { userInfoMixin } from './mixins/userInfo.js';
  import { msgInfoMixin } from './mixins/msgInfo.js';

  export default {
    name: 'UserTxt',
    mixins: [userInfoMixin, msgInfoMixin],
  };
</script>

<style lang="less">
  @soft-green: #7fde5c;
  @space-width: 30px;

  .user-txt-box {
    >p {
      position: relative;
      max-width: calc(80% - @space-width);
      background-color: @soft-green;

      &:after {
        position: absolute;
        top: 8px;
        right: -10px;
        border-left: 5px solid @soft-green;
        border-top: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid transparent;
        content: "";
      }
    }
  }
</style>