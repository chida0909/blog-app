<template>
  <v-app>
    <v-app-bar
      dark
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <nuxt-link to="/" tag="div" class="cursor">
        <v-toolbar-title v-text="title" class="header-tltle" />
      </nuxt-link>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      color="primary lighten-1"
      padless
    >
      <v-row
        justify="center"
        no-gutters
      >
        <v-btn
          v-for="link in footerLinks"
          :key="link.id"
          color="white"
          text
          rounded
          class="my-2"
          nuxt
          :to="link.url"
        >
          {{ link.name }}
        </v-btn>
        <v-col
          class="primary lighten-2 py-4 text-center white--text"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Chida Note</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Chida Note',
      links: []
    }
  },
  computed: {
    footerLinks() {
      const linksArray = [
        { 'id': 1, 'name': 'Home', 'url': '/' },
        { 'id': 2, 'name': 'contact', 'url': '/contactform' }
       ];
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
