<template>
  <v-app>
    <div testData='OK'>test</div>
  </v-app>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  props: {
    testData: String
  }
})
</script>
