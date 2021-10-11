<template>
  <article class="v-user-network">
    <v-picture class="sized" :src="x.get_image_src(user.bg_image)" />
    <v-button class="close center">
      <v-svg-close />
    </v-button>

    <header>
      <v-picture class="rounded sized" :src="user.image.src" />
      <h3>{{ user.name }}</h3>
      <p>{{ user.description }}</p>
      <span>{{ user.followers_count }} seguidores</span>
    </header>
    
    <footer>
      <v-button>Seguir</v-button>
    </footer>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    user: Object as () => interface_user
  }
})
</script>