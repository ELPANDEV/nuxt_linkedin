<template>
  <section class="v-widget-network-users">
    <header>
      <h3>Te recomendamos</h3>
      <v-button>Ver todo</v-button>
    </header>
    <div class="body">
      <v-user-network
        v-for="(user, i) in [...store.users, ...store.users, ...store.users]"
        :key="`user${i}${uuid}`"
        :user="user"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>