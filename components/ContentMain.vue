<template>
  <v-col
    cols="12"
    sm="8"
    md="8"
    lg="7"
  >
    <v-card class="main-content">
      <v-img
        :src="`/posts/${contentMain.id}.jpg`"
        height="250px"
      />
      <v-card-text class="main-date">
        {{contentMain.created_at | contentDate }}
      </v-card-text>
      <v-card-title class="main-title">
        {{contentMain.title}}
      </v-card-title>
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
              class="tag-btton"
            >
              {{tag}}
            </v-btn>
          </span>
        </div>
        <hr>
      <v-card-text
        v-html="contentMain.bodyHtml"
        class="main-article"
      >
      </v-card-text>
      <hr>
      <v-card-text>
        <div class="notes">
          本記事に対して、ご質問やご意見などがある場合は、ページ下部のCONTACTよりお願いします。
        </div>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ["contentMain"],
  filters: {
    contentDate(val) {
      const date = new Date(val)
      let getMonth = date.getMonth() + 1
      let getDate = date.getDate();

      if (String(getMonth).length === 1) {
        getMonth = "0" + getMonth;
      }
      if (String(getDate).length === 1) {
        getDate = "0" + getDate;
      }
      return `${date.getFullYear()}.${getMonth}.${getDate}`
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
.notes {
  color: #424242 !important;
  font-size: 15px;
  line-height: 1.6;
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

<style>
.v-application code {
  color: #424242;
  box-shadow: none;
  width: 100%;
  font-weight: 1;
  padding: 8px;
}
.v-application code:after,
.v-application code:before {
  content: "";
}
pre {
  margin-bottom: 16px;
}
</style>
