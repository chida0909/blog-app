<template>
  <v-col
    cols="12"
    sm="9"
    md="9"
    lg="9"
  >
    <v-card class="main-content">
      <v-img :src="`/posts/${contentMain.id}.jpg`" />
      <v-card-text class="main-date">{{contentMain.created_at | contentDate }}</v-card-text>
      <v-card-title class="main-title">{{contentMain.title}}</v-card-title>
        <div class="main-tag">
          <span
            v-for="(tag, index) in contentMain.tags"
            :key="index"
          >
            <v-btn
              small
              outlined
              nuxt
              color="grey darken-3"
              :to="`/tags/${tag}`"
              class="tag-btton">
                {{tag}}
            </v-btn>
          </span>
        </div>
        <hr>
      <v-card-text
        v-html="contentMain.bodyHtml"
        class="main-article">
      </v-card-text>
      <hr>
      <v-card-text>
        <nuxt-link to="/contactform" style="text-decoration: none;"><v-icon>mdi-email</v-icon>&nbsp;CONTACT</nuxt-link>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ["contentMain"],
  filters: {
    contentDate(val) {
      const date = new Date(val);
      let getMonth = date.getMonth() + 1;
      let getDate = date.getDate();

      if (String(getMonth).length === 1) {
        getMonth = "0" + getMonth;
      }
      if (String(getDate).length === 1) {
        getDate = "0" + getDate;
      }
      return `${date.getFullYear()}.${getMonth}.${getDate}`;
    }
  }
};
</script>

<style scoped>
.main-date {
  padding-bottom: 0;
}
.main-title {
  font-size: 1.5em;
  font-weight: bold;
}
.main-content {
  margin: auto;
}
.main-article {
  color: #424242 !important;
  font-size: 16px;
  line-height: 2;
}
.container {
  position: relative;
}
.main-tag {
  padding: 0px 0px 8px 8px;
}
hr {
  border: 0;
  border-top: 1px solid #d5d5de;
  height: 0;
  padding: 0;
}
.tag-btton {
  margin: 8px;
}
</style>
