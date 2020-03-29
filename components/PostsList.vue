<template>
  <v-row>
    <v-col
      v-for="content in contentsList"
      :key="content.id"
      cols="12"
      sm="4"
      md="4"
      lg="4"
    >
      <v-card height="100%" class="cursor">
        <nuxt-link :to="`/${content.permalink}`" tag="div">
          <v-img :src="`/posts/${content.id}.jpg`" class="top-images" />
          <v-card-text class="top-date">{{content.created_at | contentDate }}</v-card-text>
          <v-card-title class="top-title">{{content.title}}</v-card-title>
          <v-card-text class="top-tag">
            <span
              v-for="(tag, index) in content.tags"
              :key="index"
            >
              <v-btn small outlined nuxt color="grey" :to="`/tags/${tag}`" style="margin-right: 8px;">
                {{tag}}
              </v-btn>
            </span>
          </v-card-text>
        </nuxt-link>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["contentsList"],
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
  },
}
</script>

<style scoped>
.top-images {
  object-fit: cover;
  height: 248px;
}
.top-cards {
  cursor: pointer;
}
.top-date {
  padding-bottom: 0;
}
.top-title {
  min-height: 96px;
  padding: 0 16px;
}
.top-tag {
  padding: 8px;
}
</style>
