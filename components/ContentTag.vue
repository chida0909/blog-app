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
  </v-col>
</template>

<script>
export default {
  // 親コンポーネントから受け取るpropsを定義しています。
  props: ["contentTag"]
};
</script>
