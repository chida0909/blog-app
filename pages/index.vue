<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col
          v-for="(content, index) in contents"
          :key="index"
          cols="12"
          sm="6"
          md="6"
          lg="4"
        >
          <v-card
            height="100%"
            class="top-cards"
          >
            <nuxt-link
              :to="`/${content.permalink}`"
              tag="div"
            >
              <v-img
                :src="`/posts/${content.id}.jpg`"
                class="top-images"
              />
              <v-card-text class="top-date">{{content.created_at | postDate }}</v-card-text>
              <v-card-title>{{content.title}}</v-card-title>
              <v-card-text>{{content.tags}}</v-card-text>
            </nuxt-link>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { sourceFileArray, fileMap } from '~/posts/summary.json';

export default {
  data() {
    return {
      content: []
    }
  },
  computed: {
    contents() {
      // ファイル名の一覧を取得
      const postDates = sourceFileArray.map( s => s.replace(/[^0-9]/g, '') );
      // 記事一覧を生成
      return postDates.map( p => fileMap[`posts/json/${p}.json`] );
    }
  },
  filters: {
    postDate(val) {
      const date = new Date(val);
      let getMonth = date.getMonth() + 1;
      let getDate = date.getDate();

      if (String(getMonth).length === 1) {
        getMonth = "0" + getMonth;
      }
      if (String(getDate).length === 1) {
        getDate = "0" + getDate;
      }
      return date.getFullYear() + "." + getMonth + "." + getDate;
    }
  }
}
</script>

<style>
.top-images {
  object-fit: cover;
  height: 250px;
}
.top-cards {
  cursor: pointer;
}
.top-date {
  padding-bottom: 0;
}
</style>
