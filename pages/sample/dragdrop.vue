<template>
  <v-app>
    <div
      v-for="(user, index) in users"
      :key="user.id"
      draggable
      @dragstart="dragMethod($event, index)"
      @drop="dropMethod($event, index)"
      @dragover.prevent
      @dragenter.prevent
      class="list"
    >
      {{user.name}}
    </div>
    <div style="margin-top:30px;">
      <nuxt-link to="/vue-drag-drop">
      前のページに戻る
      </nuxt-link>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 1, name: "山田" },
        { id: 2, name: "四宮" },
        { id: 3, name: "山本" }
      ]
    };
  },
  methods: {
    dragMethod(event, index) {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("drag-index", index);
    },
    dropMethod(event, index) {
      const dropEvent = event.dataTransfer.getData("drag-index");
      const deleteTarget = this.users.splice(index, 1);
      this.users.splice(dropEvent, 0, deleteTarget[0]);
    }
  }
};
</script>

<style scoped>
.list {
  margin: 3px;
  padding: 3px;
  width: 100px;
  text-align: center;
  background: coral;
}
</style>
