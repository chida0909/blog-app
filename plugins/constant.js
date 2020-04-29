export default ({ app }, inject) => {
  inject('title', 'Chida Blog'),
  inject('contentsMaxCount', 10)
}

/**
 * https://ja.nuxtjs.org/guide/plugins#アプリケーションのルートや-context-に注入する
 */
