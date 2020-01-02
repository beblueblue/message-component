<template>
  <div class="user-img-box flex flex-justify-content-flex-end pt10 pb10">
    <div class="img-msg-box mr5">
      <img class="img-msg" v-lazy="getUserImg().smallUrl" :alt="getUserImg().imgName">
      <div class="shadow-block"></div>
    </div>
    <img class="b-r-4 w30 h30" v-lazy="getUserInfo().profile" :alt="getUserInfo().name">
  </div>
</template>

<script>
  import { userInfoMixin } from './mixins/userInfo.js';
  import { msgInfoMixin } from './mixins/msgInfo.js';
  export default {
    name: 'UserImg',
    mixins: [userInfoMixin, msgInfoMixin],
  };
</script>

<style lang="less">
  @sub-width: 30px;
  @max-height: 400px;
  @bg-color: #f5f5f5;

  .user-img-box {
    .img-msg-box {
      position: relative;
      max-width: calc(80% - @sub-width);
      max-height: @max-height;

      &:after {
        position: absolute;
        top: 0px;
        right: 0px;
        border-right: 5px solid @bg-color;
        border-bottom: 5px solid transparent;
        width: 0px;
        height: 10px;
        content: "";
      }

      &:before {
        position: absolute;
        top: 5px;
        right: 0px;
        border-left: 5px solid transparent;
        border-bottom: 5px solid @bg-color;
        width: 0px;
        height: 10px;
        content: "";
      }

      .shadow-block {
        position: absolute;
        top: 20px;
        right: 0px;
        width: 5px;
        height: calc(100% - 20px);
        background-color: @bg-color;
      }

      .img-msg {
        border-radius: 4px 15px 15px 4px;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>