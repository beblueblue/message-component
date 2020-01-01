<template>
  <div id="app">
    <div class="auto mt30 p10 pct80">
      <MessageRender />
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import MessageRender from '@c/message/MessageRender.vue';

  @Component({
    components: {
      MessageRender,
    },
  })
  export default class App extends Vue {}
</script>