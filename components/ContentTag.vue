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
    <hr style="max-width: 80%;">
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
        <v-icon>
          mdi-home
        </v-icon>
        &nbsp;HOMEに戻る
      </v-btn>
    </div>
  </v-col>
</template>

<script>
export default {
  props: ["contentTag"]
}
</script>

<style scoped>
.table-content {
  font-size: 16px;
  padding: 8px;
}
.table-content-botton {
  padding-top: 16px;
  max-width: 80%;
}
</style>
