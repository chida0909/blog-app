<template>
  <v-col
    cols="12"
    sm="8"
    md="8"
    lg="7"
  >
    <v-card class="content-main__content">
      <v-img
        :src="`/posts/${contentMain.postDate}.jpg`"
        height="250px"
      />
      <v-card-text class="content-main__date">
        {{contentMain.created_at | contentDate }}
      </v-card-text>
      <v-card-title class="content-main__title">
        {{contentMain.title}}
      </v-card-title>
        <div class="content-main__tag">
          <span
            v-for="(tag, index) in contentMain.tags"
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
        </div>
        <hr>
      <v-card-text
        v-html="contentMain.bodyHtml"
        class="content-main__article"
      >
      </v-card-text>
      <hr>
      <v-card-text>
        <div class="notes">
          本記事に対して、ご質問やご意見などがある場合は、ページ下部のCONTACTよりお願いします。
        </div>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    contentMain: {
      type: Object,
      required: true,
      validator (value: any) {
        // 必要なkeyが全て存在するかチェック
        const objectKeys = Object.keys( value )
        const contentArray = ['postDate', 'created_at', 'tags', 'bodyHtml', 'title']
        return contentArray.every( needKey => objectKeys.includes(needKey) )
      }
    }
  },
  filters: {
    contentDate(val: string) {
      const date = new Date(val)
      let getMonth: number | string = date.getMonth() + 1
      let getDate: number | string = date.getDate()

      if (String(getMonth).length === 1) {
        getMonth = "0" + getMonth
      }
      if (String(getDate).length === 1) {
        getDate = "0" + getDate
      }
      return `${date.getFullYear()}.${getMonth}.${getDate}`
    }
  }
})
</script>

<style lang="scss" scoped>
.content-main {
  &__date {
    padding-bottom: 0;
  }
  &__title {
    font-size: 1.5em;
    font-weight: bold;
  }
  &__content {
    margin: auto;
  }
  &__article {
    color: #424242 !important;
    font-size: 16px;
    line-height: 2;
  }
  &__tag {
    padding: 0px 0px 8px 8px;
  }
}
.notes {
  color: #424242 !important;
  font-size: 15px;
  line-height: 1.6;
}
hr {
  border: 0;
  border-top: 1px solid #d5d5de;
  height: 0;
  padding: 0;
}
.tag-btton {
  margin: 8px;
}
</style>

