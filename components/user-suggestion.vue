<template>
  <article class="v-user-suggestion">
    <v-picture class="rounded sized" :src="user.image.src" />
    
    <div>
      <header>
        <h4 class="title">{{ user.name }}</h4>
        <p class="description">{{ user.description }}</p>
      </header>
      
      <footer>
        <v-button class="leading"><v-svg-add />Seguir</v-button>
      </footer>
    </div>
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