<template>
  <v-app>
    <v-container fluid>
      <PostsList :contentsList="contents" />
      <PagiNation
        :pageCurrent="pageCurrent"
        :pageLength="pageLength"
        :pageChange="pageChange"
      />
      {{hoge}}
    </v-container>
  </v-app>
</template>

<script>
import { sourceFileArray, fileMap } from '@/posts/summary.json'
import PostsList from '@/components/PostsList.vue'
import PagiNation from '@/components/PagiNation.vue'

export default {
  components: {
    PostsList,
    PagiNation
  },
  data() {
    return {
      title: this.$constant.title,
      maxCount: this.$constant.contentsMaxCount,
      hoge: this.$myInjectedFunction,
      contents: [],
      pageCurrent: 1, // 初期表示は1から始める
      pageLength: 0
    }
  },
  asyncData(context) {
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

    console.log(context.app.$myInjectedFunction)

    // pluginsから呼び出した定数
    const MAX_COUNT = context.app.contentsMaxCount

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

    return { contents, pageLength, contentsAll }
  },
  methods: {
    pageChange( pageNumber ) {
      const MAX_COUNT = this.maxCount
      this.contents = this.contentsAll

      const startCount = pageNumber === 1 ? 0 : ( pageNumber - 1 ) * MAX_COUNT
      const endCount = pageNumber * MAX_COUNT - 1
      this.contents = this.contents.slice( startCount, endCount )
    }
  },
  mounted() {
    // Vueの要素がマウントされた後、最初のコンテンツの表示を確定させる処理
    this.contents = this.contents.slice(0, this.maxCount - 1)
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

