<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8">
        <v-container class="max-width">
          <v-pagination
            v-model="dataCurrent"
            class="my-4"
            :length="pageLength"
            @input="dataChange"
          ></v-pagination>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    pageCurrent: Number,
    pageLength: Number,
    pageChange: Function
  },
  data() {
    return {
      dataChange: this.pageChange,
      dataCurrent: this.pageCurrent
    }
  }
})
</script>
