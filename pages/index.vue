<template>
  <v-app>
    <v-container fluid>
      <PostsList :contentsList="contents" />
    </v-container>
  </v-app>
</template>

<script>
import { sourceFileArray, fileMap } from '@/posts/summary.json';
import PostsList from '@/components/PostsList.vue';

export default {
  components: {
    PostsList
  },
  data() {
    return {
      content: {}
    }
  },
  asyncData() {
    // ファイル名の一覧を取得
    const postDates = sourceFileArray.map( sourceFile => sourceFile.replace(/[^0-9]/g, '') );
    // 記事一覧を生成
    const contents = postDates.map( postDate => fileMap[`posts/json/${postDate}.json`] );
    // タグを配列に変換
    if (!Array.isArray(contents[0].tags)) {
      for (let i in contents) {
        contents[i].tags = contents[i].tags.split(",");
      }
    }

    return { contents };
  },
  head() {
    return {
      title: 'Chida Note'
      // meta: [
        // `hid` は一意の識別子として使用されます。 `vmid` は動作しないので使わないでください。
        // { hid: 'description', name: 'description', content: 'My custom description' }
      // ]
    }
  }
}
</script>

