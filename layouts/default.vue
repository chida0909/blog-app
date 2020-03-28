<template>
  <v-app>
    <v-app-bar
      dark
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random">
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
      app
    >
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Chida Note'
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
