<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col
          v-for="content in contents"
          :key="content.id"
          cols="12"
          sm="6"
          md="6"
          lg="4"
        >
          <v-card height="100%" class="cursor">
            <nuxt-link :to="`/${content.permalink}`" tag="div">
              <v-img :src="`/posts/${content.id}.jpg`" class="top-images" />
              <v-card-text class="top-date">{{content.created_at | contentDate }}</v-card-text>
              <v-card-title class="top-title">{{content.title}}</v-card-title>
              <div class="top-tag">
                <span
                  v-for="(tag, index) in content.tags"
                  :key="index"
                >
                  <v-chip
                  class="ma-2"
                  label
                  >
                    {{tag}}
                  </v-chip>
                </span>
              </div>
            </nuxt-link>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { sourceFileArray, fileMap } from '@/posts/summary.json';

export default {
  data() {
    return {
      content: []
    }
  },
  computed: {
    contents() {
      // ファイル名の一覧を取得
      const postDates = sourceFileArray.map( sourceFile => sourceFile.replace(/[^0-9]/g, '') );
      // 記事一覧を生成
      const postLists = postDates.map( postDate => fileMap[`posts/json/${postDate}.json`] );
      // タグを配列に変換
      if (!Array.isArray(postLists[0].tags)) {
        for (let i in postLists) {
          postLists[i].tags = postLists[i].tags.split(",");
        }
      }

      return postLists;
    }
  },
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
}
</style>
