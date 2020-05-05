export default ({ app }, inject) => {
  inject('title', 'Chida Blog'),
  inject('contentsMaxCount', 10)
}

/**
 * https://ja.nuxtjs.org/guide/plugins#アプリケーションのルートや-context-に注入する
 */


// declare module 'vue/types/vue' {
//   interface Vue {
//     $myInjectedFunction(message: string): void
//   }
// }

// Vue.prototype.$myInjectedFunction = (message: string) => console.log(message)
