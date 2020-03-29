<template>
  <v-col
    cols="12"
    sm="3"
    md="3"
    lg="3"
  >
    <v-card-title>Table of Contents</v-card-title>
    <hr>
    <v-card-text
      v-for="(content, index) in contentTag"
      :key="index"
      class="table-content"
    >
    {{content}}
    </v-card-text>
    <div class="table-content-botton">
      <v-btn
        block
        outlined
        nuxt
        color="grey darken-3"
        to="/"
      >
        <v-icon>mdi-home</v-icon>&nbsp;HOMEに戻る
      </v-btn>
    </div>
  </v-col>
</template>

<script>
export default {
  props: ["contentTag"]
};
</script>

<style scoped>
.table-content {
  font-size: 16px;
}
.table-content-botton {
  padding-top: 20px;
}
</style>
