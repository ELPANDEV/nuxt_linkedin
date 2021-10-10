<template>
  <div class="v-widget-about">
    <nav class="body">
      <v-link class="hover-underline" to="/">Acerca de</v-link>
      <v-link class="hover-underline" to="/">Accesibilidad</v-link>
      <v-link class="hover-underline" to="/">Centro de ayuda</v-link>

      <v-link class="hover-underline actions sized" to="/">
        Privacidad y términos
        <v-svg-arrow-down-larger />
      </v-link>

      <v-link class="hover-underline" to="/">Opciones de publicidad</v-link>
      <v-link class="hover-underline" to="/">Publicidad</v-link>

      <v-link class="hover-underline actions sized" to="/">
        Servicios empresariales
        <v-svg-arrow-down-larger />
      </v-link>

      <v-link class="hover-underline" to="/">Descargar la aplicación de LinkedIn</v-link>
      <v-link class="hover-underline" to="/">Más</v-link>
    </nav>

    <div class="footer">
      <v-svg-linkedin />
      LinkedIn Corporation © 2021
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>
