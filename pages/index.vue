<template>
  <v-app>
    <v-container fluid>
      <PostsList :contentsList="contents" />
      <PagiNation
        :pageCurrent="pageCurrent"
        :pageLength="pageLength"
        :pageChange="pageChange"
      />
    </v-container>
  </v-app>
</template>


<script>
import { sourceFileArray, fileMap } from '@/posts/summary.json'
import PostsList from '@/components/PostsList.vue'
import PagiNation from '@/components/PagiNation.vue'
import Vue, { PropType } from 'vue'

// interface MethodType {
//   contentsAll: any
// }

export default Vue.extend({
  components: {
    PostsList,
    PagiNation
  },
  data() {
    return {
      title: 'Chida Blog',
      maxCount: 10,
      // title: this.$title,
      // maxCount: this.$contentsMaxCount,
      contents: [],
      contentsAll: [],
      pageCurrent: 1, // 初期表示は1から始める
      pageLength: 0,
    }
  },
  asyncData({store}) {
    // ファイル名の一覧を取得
    const postDates = sourceFileArray.map( s => s.replace(/[^0-9]/g, '') )
    // 記事一覧を生成
    let contents = postDates.map( p => fileMap[`posts/json/${p}.json`] )

    // ファイル名から投稿日を取得
    if (!Array.isArray(contents[0].postDate)) {
      for (let i in contents) {
        contents[i].postDate = contents[i].base.replace(/[^0-9]/g, '')
      }
    }

    // pluginsから呼び出した定数
    // const MAX_COUNT = context.app.$contentsMaxCount
    const MAX_COUNT = 10

    // タグを配列に変換
    if (!Array.isArray(contents[0].tags)) {
      for (let i in contents) {
        contents[i].tags = contents[i].tags.split(",")
      }
    }

    // 全体のページ数を取得
    const pageLength = Math.ceil(contents.length / MAX_COUNT)
    // ページング処理に使うため、一時的に保持
    const contentsAll = contents

    // ログイン認証済みの場合、非公開記事を公開する
    for (const content of contents) {
      if (content.private && store.getters['authenticated/isAuthenticated']) {
        content.private = false
      }
    }

    return { contents, pageLength, contentsAll }
  },
  methods: {
    pageChange( pageNumber ) {
      const MAX_COUNT = 10
      // const MAX_COUNT = this.$contentsMaxCount
      this.contents = this.contentsAll

      const startCount = pageNumber === 1 ? 0 : ( pageNumber - 1 ) * MAX_COUNT
      const endCount = pageNumber * MAX_COUNT
      this.contents = this.contents.slice( startCount, endCount )
    }
  },
  mounted() {
    // Vueの要素がマウントされた後、最初のコンテンツの表示を確定させる処理
    this.contents = this.contents.slice( 0, this.maxCount - 1 )
  },
  head() {
    return {
      title: 'Chida Blog',
      // title: this.$title,
      meta: [
        { charset: 'utf-8' },
        // meta viewport Google推奨の記述
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'description' }
      ]
    }
  }
})
</script>



