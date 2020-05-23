<template>
  <v-col
    cols="12"
    sm="4"
    md="4"
    lg="3"
  >
    <v-card-title>
      Table of Contents
    </v-card-title>
    <hr class="hr">
    <v-card-text
      v-for="(content, index) in contentHeading"
      :key="index"
      class="content-heding__list"
    >
      <nuxt-link
        v-scroll-to="`#heading-${index}`"
        to
        tag="div"
        class="cursor"
      >
        {{content}}
      </nuxt-link>
    </v-card-text>
    <div class="content-heding__botton">
      <v-btn
        block
        outlined
        nuxt
        color="grey darken-3"
        to="/"
      >
        <v-icon>
          mdi-home
        </v-icon>
        &nbsp;HOMEに戻る
      </v-btn>
    </div>
  </v-col>
</template>

<script lang='ts'>
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

export default Vue.extend({
  props: {
    contentHeading: Array
  }
})
</script>

<style lang="scss" scoped>
.content-heding {
  &__list {
    font-size: 16px;
    padding: 4px;
  }
  &__botton {
    padding-top: 16px;
    max-width: 80%;
  }
}
.hr {
  max-width: 85%;
  margin-bottom: 8px;
}
</style>
