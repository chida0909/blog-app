<template>
  <v-app>
    <v-container>
      <v-card class="main-content">
        <v-img :src="`/posts/${content.id}.jpg`" />
        <v-card-text class="main-date">{{content.created_at | contentDate }}</v-card-text>
        <v-card-title>{{content.title}}</v-card-title>
        <v-card-text v-html="content.bodyHtml" class="main-article"></v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import { sourceFileArray, fileMap } from '@/posts/summary.json'

export default {
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
    return { content: require(`@/posts/json/${postDate}.json`) }
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
.main-content {
  width: 72%;
  margin: auto;
}
.main-article {
  color: black !important;
}
.container  {
  position: relative;
}
</style>
