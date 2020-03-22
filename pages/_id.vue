<template>
  <div>{{content}}</div>
</template>

<script>
import { sourceFileArray, fileMap } from '~/posts/summary.json'

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
    // 特定の記事を生成
    return { content: fileMap[`posts/json/${postDate}.json`] }
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
