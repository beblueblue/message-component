<template>
  <div class="other-img-box flex pt10 pb10">
    <img class="b-r-4 w30 h30" v-lazy="getUserInfo().profile" :alt="getUserInfo().name">
    <div class="img-msg-box ml5">
      <img class="img-msg" v-lazy="getOtherImg().smallUrl" :alt="getOtherImg().imgName">
      <div class="shadow-block"></div>
    </div>
  </div>
</template>

<script>
  import { userInfoMixin } from './mixins/userInfo.js';
  import { msgInfoMixin } from './mixins/msgInfo.js';
  export default {
    name: 'OtherImg',
    mixins: [userInfoMixin, msgInfoMixin],
  };
</script>

<style lang="less">
  @sub-width: 30px;
  @max-height: 400px;
  @bg-color: #f5f5f5;

  .other-img-box {
    .img-msg-box {
      position: relative;
      max-width: calc(80% - @sub-width);
      max-height: @max-height;

      &:after {
        position: absolute;
        top: 0px;
        left: 0px;
        border-left: 5px solid @bg-color;
        border-bottom: 5px solid transparent;
        width: 0px;
        height: 10px;
        content: "";
      }

      &:before {
        position: absolute;
        top: 15px;
        left: 0px;
        border-left: 5px solid @bg-color;
        border-top: 5px solid transparent;
        width: 0px;
        height: 10px;
        content: "";
      }

      .shadow-block {
        position: absolute;
        top: 20px;
        left: 0px;
        width: 5px;
        height: calc(100% - 20px);
        background-color: @bg-color;
      }

      .img-msg {
        border-radius: 15px 4px 4px 15px;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>