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
        v-for="(tableOfContents, index) in data"
        :key="index"
        class="table-content"
    >
    {{tableOfContents}}
    </v-card-text>
  </v-col>
</template>

<script>
export default {
  // 親コンポーネントから受け取るpropsを定義しています。
  // 定義方法はいろいろありますが、ここでは一番シンプルに
  // 配列でプロパティ名を書いています。
  props: ["data"],
};
</script>
