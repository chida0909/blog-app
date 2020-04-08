<template>
  <v-app>
    <div v-for="(user, index) in users" :key="index">
      <v-btn @click="userDelete(index)" style="margin: 8px;" >{{index}}: {{user.name}}</v-btn>
    </div>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      users: []
    }
  },
  mounted() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => (this.users = response.data))
  },
  methods: {
    userDelete(index) {
      this.$delete(this.users, index)
      console.log(index)
    }
  }
}
</script>
