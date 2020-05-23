<template>
  <v-app>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="4"
        md="4"
        lg="3"
      >
        <v-form ref="login_form">
          <!-- <div>{{ $store.state.authenticated.message }}</div> -->
          <v-text-field
            v-model="email"
            label="id"
            :rules="[() => !!email || 'This field is required']"
            type="email"
            required
          >
          </v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            :rules="[() => !!password || 'This field is required']"
            type="password"
            required
          >
          </v-text-field>
          <v-btn @click="submit">
            送信
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-app>
</template>

<script lang='ts'>
import { mapActions, mapState } from 'vuex'
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
     ...mapActions({
      submit() {
        if (!this.$refs.login_form.validate()) {
          return false
        }
        this.$store.dispatch("authenticated/signIn", {
          email: this.email,
          password: this.password
        })
      }
    })
  }
})
</script>
