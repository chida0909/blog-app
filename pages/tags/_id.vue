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
      title: '',
      content: []
    }
  },
  asyncData({ params }) {
      // ファイル名の一覧を取得
      const postDates = sourceFileArray.map( sourceFile => sourceFile.replace(/[^0-9]/g, '') );

      // 記事一覧を生成
      const contentsList = postDates.map( postDate => {
        if (fileMap[`posts/json/${postDate}.json`].tags.includes(params.id)) {
          return fileMap[`posts/json/${postDate}.json`];
        }
      });

      // 対象外を除外
      const contents = contentsList.filter( c => c );

      // タグを配列に変換
      if (!Array.isArray(contents[0].tags)) {
        for (let i in contents) {
          contents[i].tags = contents[i].tags.split(",");
        }
      }
      return { contents };
  },
  head() {
    return { title: `${this.contents[0].tags[0]}のタグ一覧` }
  }
}
</script>
