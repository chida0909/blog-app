import Vue from 'vue'

Vue.prototype.$constant = {
  title: 'Chid Blog',
  contentsMaxCount: 10
}

// 定数をdataメソッドではなく、asyncDataメソッド内のcontextに渡して使用する
export default ({ app }, inject) => {
  app.contentsMaxCount =  10
  inject('myInjectedFunction', 10)
}

/**
 * https://jp.vuejs.org/v2/cookbook/adding-instance-properties.html
 * https://ja.nuxtjs.org/guide/plugins#アプリケーションのルートや-context-に注入する
 */
