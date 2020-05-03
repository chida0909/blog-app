<template>
  <v-app>
    <v-form>
      <v-text-field
        v-model="email"
        label="email"
        required
      >
      </v-text-field>
      <v-text-field
        v-model="password"
        label="Password"
        required
      >
      </v-text-field>
      <v-btn @click="submit">
        送信
      </v-btn>
    </v-form>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
     ...mapActions({
      submit() {
        this.$store.dispatch("authenticated/signIn", {
          email: this.email,
          password: this.password
        })
      }
    })
  }
}
</script>
