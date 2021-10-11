<template>
  <section class="v-widget-network-information">
    <header>
      <h3>Gestionar mi red</h3>
    </header>
    
    <div class="body">
      <v-link to="/">
        <v-svg-network />
        <span class="title">Contactos</span>
        <span class="counter">54</span>
      </v-link>

      <v-link to="/">
        <v-svg-network-contacts />
        <span class="title">Contactos</span>
      </v-link>

      <v-link to="/">
        <v-svg-network-followers />
        Gente que sigo
        <span>5</span>
      </v-link>

      <v-link to="/">
        <v-svg-post-event />
        Eventos
      </v-link>

      <v-link to="/">
        <v-svg-network-pages />
        Páginas
        <span>17</span>
      </v-link>

      <v-link to="/">
        <v-svg-network-newsletters />
        Newsletters
      </v-link>

      <v-link to="/">
        <v-svg-hash />
        Hashtags
        <span>6</span>
      </v-link>
    </div>

    <footer>
      <v-button-expander :initial_enabled="true" />
    </footer>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>