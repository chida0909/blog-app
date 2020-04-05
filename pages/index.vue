<template>
  <v-app>
    <v-container fluid>
      <PostsList :contentsList="contents" />
    </v-container>
  </v-app>
</template>

<script>
import { sourceFileArray, fileMap } from '@/posts/summary.json'
import PostsList from '@/components/PostsList.vue'

export default {
  components: {
    PostsList
  },
  data() {
    return {
      title: this.$constant.title,
      contents: {}
    }
  },
  asyncData() {
    // ファイル名の一覧を取得
    const postDates = sourceFileArray.map( s => s.replace(/[^0-9]/g, '') )
    // 記事一覧を生成
    const contents = postDates.map( p => fileMap[`posts/json/${p}.json`] )

    // ファイル名から投稿日を取得
    if (!Array.isArray(contents[0].postDate)) {
      for (let i in contents) {
        contents[i].postDate = contents[i].base.replace(/[^0-9]/g, '')
      }
    }

    // タグを配列に変換
    if (!Array.isArray(contents[0].tags)) {
      for (let i in contents) {
        contents[i].tags = contents[i].tags.split(",")
      }
    }

    return { contents }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { charset: 'utf-8' },
        // meta viewport Google推奨の記述
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'description' }
      ]
    }
  }
}
</script>

