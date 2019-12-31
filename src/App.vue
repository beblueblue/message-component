<template>
  <div id="app">
    <MessageRender />
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
