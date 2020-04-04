<template>
  <v-app>
    <v-content>
      <v-container>
        <v-row justify="center">
          <ContentTag :contentTag="content.tableOfContents" v-if="content.deviceType === 'pc'" />
          <ContentMain :contentMain="content" />
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { sourceFileArray, fileMap } from '@/posts/summary.json'
import ContentMain from '@/components/ContentMain.vue'
import ContentTag from '@/components/ContentTag.vue'

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
      return true
    }
  },
  asyncData(context) {
    // contextを使いため、context.paramsを利用
    const params = context.params
    // ファイル名の一覧を取得
    const postDates = sourceFileArray.map( s => s.replace(/[^0-9]/g, '') )
    // 特定のファイル名を取得（同一のpermalinkが存在しているとエラーになるので注意）
    const postDate = postDates.filter( p => fileMap[`posts/json/${p}.json`].permalink == params.id)

    const content = require(`@/posts/json/${postDate}.json`)

    // キャッシュ判定（初期表示はfalse）
    let cache_flag = false
    if (Array.isArray(content.tags)) {
      cache_flag = true
    }

    if (cache_flag === false) {
      // h1を起点とした目次の作成
      const headTextTmp = content.bodyHtml.split(/<h1>|<h2>/)
      // 正しく取得出来ていないケースがあったのでfilterでチェック
      const headText = headTextTmp.filter(h => h.match(/h1|h2/))

      const tableOfContents = headText.map( h => {
        if (h.match(/h1/)) {
          const headTextSub1 = h.indexOf("</h1>")
          if (headTextSub1 > 0) {
            return h.substring(0, headTextSub1)
          }
        } else if (h.match(/h2/)) {
          const headTextSub2 = h.indexOf("</h2>")
          if (headTextSub2 > 0) {
            return "　" + h.substring(0, headTextSub2)
          }
        }
      })
      content.tableOfContents = tableOfContents.filter(h => h)

      // string型のhtmlをhtmlタグとして取得
      const element = document.createElement('div')
      element.innerHTML = content.bodyHtml;

      // ページ内リンクを生成するためid属性を付与
      let elements = element.querySelectorAll('h2, h1')

      Array.prototype.forEach.call(elements, function(element, index) {
        element.setAttribute('id', `heading-${index}`)
      });

      // v-htmlを使うため、htmlタグをstring型に変換
      content.bodyHtml = `${element.innerHTML}`

      if ( content.tags.includes(",") ) {
        content.tags = content.tags.split(",")
      } else {
        content.tags = [content.tags]
      }

    // ファイル名から投稿日を取得
      content.postDate = content.base.replace(/[^0-9]/g, '')
    }

    // デバイス情報を取得（smartphone or pc）
    content.deviceType = context.$ua.deviceType()

    return { content }
  },
  head() {
    return {
      title: this.content.title
    }
  }
}
</script>
