<template>
  <article class="v-widget-advertisement">
    <header>
      <h3>Anuncio</h3>
      <v-svg-line-dots />
    </header>

    <div class="body">
      <p class="message">Francisco, unlock your full potential with LinkedIn Premium</p>

      <div class="images">
        <v-picture class="rounded sized" :src="'/images/profile.jfif'" />
        <v-picture :src="'/images/key.jfif'" />
      </div>

      <p class="description">See who's viewed your profile in the last 90 days</p>
    </div>

    <footer>
      <v-button>Try for Free</v-button>
    </footer>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>
