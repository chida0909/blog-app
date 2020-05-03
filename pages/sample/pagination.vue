<template>
  <v-app>
    <span
      v-for="content in contents"
      :key="content.id"
    >
      {{content.title}}
    </span>
    <PagiNation
      :pageCurrent="pageCurrent"
      :pageLength="pageLength"
      :pageChange="pageChange"
    />
  <div style="margin-top:30px;">
      <nuxt-link to="/vuetify-pagination">
      前のページに戻る
      </nuxt-link>
    </div>
  </v-app>
</template>

<script>
import PagiNation from '@/components/PagiNation.vue'
export default {
  components: {
    PagiNation
  },
  data() {
    return {
      pageCurrent: 1, // 初期表示は1から始める
      pageLength: 0,
      maxCount: 3
    }
  },
  asyncData(context) {
    let contents = [
      { id: 0, title: 'hoge0'},
      { id: 1, title: 'hoge1'},
      { id: 2, title: 'hoge2'},
      { id: 3, title: 'hoge3'},
      { id: 4, title: 'hoge4'},
      { id: 5, title: 'hoge5'}
    ]

    // ページ内に表示する最大コンテンツ数
    const MAX_COUNT = 3
    // 全体のページ数を取得
    const pageLength = Math.ceil(contents.length / MAX_COUNT)
    // ページング処理に使うため、一時的に保持
    const contentsAll = contents
    return { contents, pageLength, contentsAll }
  },
  methods: {
    pageChange( pageNumber ) {
      this.contents = this.contentsAll
      const startCount = pageNumber === 1 ? 0 : ( pageNumber - 1 ) * this.maxCount
      const endCount = pageNumber * this.maxCount
      this.contents = this.contents.slice( startCount, endCount )
    }
  },
  mounted() {
    // Vueの要素がマウントされた後、最初のコンテンツの表示を確定させる処理
    this.contents = this.contents.slice( 0, this.maxCount )
  }
}
</script>
