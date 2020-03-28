<template>
  <v-app>
    <v-container fluid>
    <v-row>
      <ContentTag :data="content.tableOfContents"></ContentTag>
        <v-col
          cols="12"
          sm="9"
          md="9"
          lg="9"
        >
        <v-card class="main-content">
          <v-img :src="`/posts/${content.id}.jpg`" />
          <v-card-text class="main-date">{{content.created_at | contentDate }}</v-card-text>
          <v-card-title class="main-title">{{content.title}}</v-card-title>
            <div class="main-tag">
              <span
                v-for="(tag, index) in content.tags"
                :key="index"
              >
                <v-chip
                  class="ma-2"
                  label
                  outlined
                >
                  {{tag}}
                </v-chip>
              </span>
            </div>
            <hr>
          <v-card-text
            v-html="content.bodyHtml"
            class="main-article">
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { sourceFileArray, fileMap } from '@/posts/summary.json'
import ContentTag from '@/components/ContentTag.vue';

export default {
  components: {
    ContentTag
  },
  data () {
    return { content: '' }
  },
  validate ({ params }) {
    if (params) {
      return true;
    }
  },
  asyncData({ params }) {
    // ファイル名の一覧を取得
    const postDates = sourceFileArray.map( s => s.replace(/[^0-9]/g, '') );
    // 特定のファイル名を取得
    const postDate = postDates.filter( p => fileMap[`posts/json/${p}.json`].permalink === params.id);

    const content = require(`@/posts/json/${postDate}.json`);

    if ( content.bodyHtml.includes("<h2>")) {
      content.bodyHtml = content.bodyHtml.replace( /<h2>/g, "<h2 style='margin-bottom:16px;'>" );
    }
    if ( content.bodyHtml.includes("<p>")) {
      content.bodyHtml = content.bodyHtml.replace( /<p>/g, "<p style='line-height: 2;'>" );
    }

    if (!Array.isArray(content.tags)) {
      if ( content.tags.includes(",")) {
        content.tags = content.tags.split(",");
      } else {
        content.tags = [content.tags];
      }
    }

    // h2を起点とした目次の作成
    const headText = content.bodyHtml.split("<h2 style='margin-bottom:16px;'>");
    const tableOfContents = headText.map( h => {
      const headTextSub = h.indexOf("</h2>");
      if (headTextSub > 0) {
        return h.substring(0, headTextSub)
      }
    });
    content.tableOfContents = tableOfContents.filter(h => h);

    return { content }
  },
  head() {
    return {
      title: this.content.title
      // meta: [
        // `hid` は一意の識別子として使用されます。 `vmid` は動作しないので使わないでください。
        // { hid: 'description', name: 'description', content: 'My custom description' }
      // ]
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
.main-date {
  padding-bottom: 0;
}
.main-title {
  font-weight: bold;
}
.main-content {
  margin: auto;
}
.main-article {
  color: black !important;
}
.container {
  position: relative;
}
.main-tag {
  padding: 0px 0px 8px 8px;
}
hr {
  border: 0;
  border-top: 1px solid #f1f1f1;
  height: 0;
  padding: 0;
}
.table-content {
  padding-top: 8px;
  padding-bottom: 8px;
}
</style>
