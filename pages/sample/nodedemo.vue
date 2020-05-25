<template>
  <v-app>
    <button @click="clickButton()">クリック</button>
    <base-text-box :hidden="alert">表示されました</base-text-box>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseTextBox from '@/components/object/BaseTextBox'

export default Vue.extend({
  components: {
    BaseTextBox
  },
  data() {
    return {
      alert: false
    }
  },
  methods: {
    clickButton() {
      console.log('button clicked!!')
      this.alert = !this.alert
    }
  }
})
</script>
