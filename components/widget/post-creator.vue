<template>
  <div class="v-widget-post-creator">
    <div class="header">
      <v-picture class="rounded" :src="'/images/profile.jfif'" />
      <v-button>Crear publicación</v-button>
    </div>
    <div class="footer">
      <v-button class="photo"><v-svg-post-picture />Foto</v-button>
      <v-button class="video"><v-svg-post-video />Video</v-button>
      <v-button class="event"><v-svg-post-event />Evento</v-button>
      <v-button class="article"><v-svg-post-article />Escribir artículo</v-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>
