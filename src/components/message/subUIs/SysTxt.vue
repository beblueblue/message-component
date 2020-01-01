<template>
  <div class="pt10 pb10 tc g9">
    {{ getSysTxt() }}
  </div>
</template>

<script>
  import { msgInfoMixin } from './mixins/msgInfo.js';

  export default {
    mixins: [msgInfoMixin],
    name: 'SysTxt',
  };
</script>