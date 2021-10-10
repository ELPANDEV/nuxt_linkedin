<template>
  <article class="v-widget-post">
    <header>
      <div class="suggestion">
        <span class="message"><b>Miguel Angel Rantes</b> apoya esto</span>
        <v-svg-line-dots-expanded />
      </div>
      <div class="profile">
        <v-picture
          class="rounded sized"
          :src="post.user.image.src"
        />

        <div class="information">
          <h2>{{ post.user.name }}</h2>
          <p>{{ post.user.description }}</p>
          <span>2 días</span>
        </div>
      </div>
    </header>
    <div class="body">
      <p class="text">{{ post.text }}</p>
      <v-picture
        v-if="post.image"
        :src="post.image.src"
      />
    </div>
    <footer>
      <div class="reactions">
        <div class="icons">
          <v-svg-icon-like />
          <v-svg-icon-love />
        </div>
        <div class="data">
          <v-link class="hover-underline" to="/">432</v-link>
          <span class="dot">.</span>
          <v-link class="hover-underline" to="/">5 comentarios</v-link>
        </div>
      </div>
      <div class="actions">
        <v-button class="leading"><v-svg-like />Recomendar</v-button>
        <v-button class="leading"><v-svg-comment />Comentar</v-button>
        <v-button class="leading"><v-svg-share />Compartir</v-button>
        <v-button class="leading"><v-svg-send />Enviar</v-button>
      </div>
    </footer>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    post: Object as () => interface_post
  },
  data() {
    return {
      
    }
  }
})
</script>
