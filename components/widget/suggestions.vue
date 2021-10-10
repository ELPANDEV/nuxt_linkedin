<template>
  <div class="v-widget-suggestions">
    <div class="header">
      <h3 class="title">Añadir a tu feed</h3>
      <v-button>
        <v-svg-feed-information />
      </v-button>
    </div>

    <div class="body">
      <v-user-suggestion
        v-for="(user, i) in store.users.slice(0, 3)"
        :key="`user${i}${uuid}`"
        :user="user"
      />
    </div>

    <div class="footer">
      <v-button class="actions">
        Ver todas las recomendaciones
        <v-svg-large-arrow-right />
      </v-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>