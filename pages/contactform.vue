<template>
  <v-app>
    <v-layout>
      <v-flex class="text-center">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSclZPwbMoPHggb9d4fYR7skMW4ald2aDE23-HrgibOts0UOyA/viewform?embedded=true" width="100%" height="709" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>
