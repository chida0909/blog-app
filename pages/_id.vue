<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <ContentTag :contentTag="content.tableOfContents" />
        <ContentMain :contentMain="content" />
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { sourceFileArray, fileMap } from '@/posts/summary.json'
import ContentMain from '@/components/ContentMain.vue';
import ContentTag from '@/components/ContentTag.vue';

export default {
  components: {
    ContentTag,
    ContentMain
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


    // 特定のファイル名を取得（同一のpermalinkが存在しているとエラーになるので注意）
    const postDate = postDates.filter( p => fileMap[`posts/json/${p}.json`].permalink == params.id);

    const content = require(`@/posts/json/${postDate}.json`);

    if ( content.bodyHtml.includes("<h2>")) {
      content.bodyHtml = content.bodyHtml.replace( /<h2>/g, "<h2 style='margin: 24px 0 16px 0'>" );
    }

    if (!Array.isArray(content.tags)) {
      if ( content.tags.includes(",")) {
        content.tags = content.tags.split(",");
      } else {
        content.tags = [content.tags];
      }
    }

    // h2を起点とした目次の作成
    const headText = content.bodyHtml.split("<h2 style='margin: 24px 0 16px 0'>");
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
  }
}
</script>
