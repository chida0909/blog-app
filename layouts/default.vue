<template>
  <v-app>
    <v-app-bar
      dark
      shrink-on-scroll
      src="/posts/header.jpg"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        >
        </v-img>
      </template>
      <nuxt-link
        to="/"
        tag="div"
        class="cursor"
      >
        <v-toolbar-title
          v-text="title"
          class="header-tltle"
        />
      </nuxt-link>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      class="testchida"
      padless
    >
      <v-img
        src="/posts/footer.jpg"
        height="100px"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        class="white--text align-center text-center"
      >
        <v-btn
          v-for="link in footerLinks"
          :key="link.id"
          :to="link.url"
          color="white"
          text
          rounded
          nuxt
        >
          <v-icon>
            {{link.icon}}
          </v-icon>
          &nbsp;
          {{ link.name }}
        </v-btn>
      </v-img>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Chida Blog',
      links: []
    }
  },
  computed: {
    footerLinks() {
      const linksArray = [
        { 'id': 1, 'name': 'Home', 'url': '/', 'icon': 'mdi-home' },
        { 'id': 2, 'name': 'contact', 'url': '/contact', 'icon': 'mdi-email' }
       ]
      return linksArray
    }
  }
}
</script>

<style>
.cursor {
  cursor: pointer;
}
.header-tltle {
  font-weight: bold;
  margin-top: 4%;
}
</style>
