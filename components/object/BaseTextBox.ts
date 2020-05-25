import '@/assets/sass/object/component/alert_box.scss'

import Vue, { VNode, VNodeChildren } from 'vue'

export default Vue.extend({
  props: {
    hidden: Boolean
  },
  render(h): VNode {
    const alert = this.$createElement( 'span',  { class: 'foo' }, this.$slots.default)
    const children: VNodeChildren = []
    if (this.hidden) {
      children.push(alert)
    }
    const element = this.$createElement('transition', { props: { name: 'fade' } }, children)
    const result: VNode[] = [element]
    console.log()
    return h('div', {}, result)
  }
})

