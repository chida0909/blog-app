<template>
  <v-row justify="center">
    <v-col
      v-for="content in contentsList"
      :key="content.id"
      cols="12"
      sm="4"
      md="4"
      lg="3"
    >
      <v-card
        height="100%"
        class="cursor"
      >
        <nuxt-link
          :to="(content.private ? '' : `/${content.permalink}`)"
          @click.native="submit(content)"
          tag="div"
        >
          <v-img
           :src="`/posts/${content.postDate}.jpg`"
           class="posts-list__image"
           height="225px"
          />
          <v-card-text class="posts-list__date">
            <v-icon
              v-if="content.private"
              style="font-size: 16px;"
            >
              mdi-lock
            </v-icon>
            {{content.created_at | contentDate }}
          </v-card-text>
          <v-card-title class="posts-list__title">
            {{content.title}}
          </v-card-title>
          <v-card-text>
            <span
              v-for="(tag, index) in content.tags"
              :key="index"
            >
              <v-btn
                small
                outlined
                nuxt
                color="grey darken-3"
                :to="`/tags/${tag.toLowerCase()}`"
                class="tag-btton"
              >
                {{tag}}
              </v-btn>
            </span>
          </v-card-text>
        </nuxt-link>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    contentsList: Array
  },
  filters: {
    contentDate(val) {
      const date = new Date(val)
      let getMonth = date.getMonth() + 1
      let getDate = date.getDate()

      if (String(getMonth).length === 1) {
        getMonth = "0" + getMonth
      }
      if (String(getDate).length === 1) {
        getDate = "0" + getDate
      }
      return `${date.getFullYear()}.${getMonth}.${getDate}`
    }
  },
  methods: {
    submit( content ) {
      if ( content && content.private ) {
        alert('未公開記事のため、読むことが出来ません。')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.posts-list {
  &__image {
    object-fit: cover;
    height: 248px;
  }
  &__date {
    padding-bottom: 0;
  }
  &__title {
    min-height: 96px;
    padding: 0 16px;
  }
}
.tag-btton {
  margin-right: 8px;
  padding: 12px;
}
</style>
