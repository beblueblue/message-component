<template>
  <div class="other-txt-box flex pt10 pb10">
    <img class="b-r-4 w30 h30" :src="getUserInfo().profile" :alt="getUserInfo().name">
    <p class="ml10 b-r-4 p5 lh20">{{ getOtherTxt() }}</p>
  </div>
</template>

<script>
  import { userInfoMixin } from './mixins/userInfo.js';
  import { msgInfoMixin } from './mixins/msgInfo.js';

  export default {
    name: 'OtherTxt',
    mixins: [userInfoMixin, msgInfoMixin],
  };
</script>

<style lang="less">
  @white: #fff;
  @space-width: 30px;

  .other-txt-box {
    >p {
      position: relative;
      max-width: calc(80% - @space-width);
      background-color: @white;

      &:after {
        position: absolute;
        top: 8px;
        left: -10px;
        border-left: 5px solid transparent;
        border-top: 5px solid transparent;
        border-right: 5px solid @white;
        border-bottom: 5px solid transparent;
        content: "";
      }
    }

  }
</style>