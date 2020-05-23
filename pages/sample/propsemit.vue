<template>
  <div>
    <test-child message="Hello Vue"></test-child>
  </div>
</template>
<script>
import TestChild from '@/components/TestChild.vue'

export default {
  components: {
    TestChild
  }
}
</script>
