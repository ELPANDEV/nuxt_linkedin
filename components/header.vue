<template>
  <header class="v-header">
    <div class="container">
      <v-link to="/feed/" class="linkedin">
        <v-svg-logo />
      </v-link>

      <v-button class="search">
        <v-svg-search />
        <span>Buscar</span>
      </v-button>

      <v-searcher-advanced />
      
      <div class="navigation">
        <v-link to="/feed/" class="home">
          <v-svg-home />
          <span>Inicio</span>
        </v-link>

        <v-link to="/network/" class="network">
          <v-svg-network />
          <span>Mi red</span>
        </v-link>

        <v-link to="/jobs" class="jobs">
          <v-svg-job />
          <span>Empleos</span>
        </v-link>

        <v-link to="/messages" class="messages">
          <v-svg-message />
          <span>Mensajes</span>
        </v-link>

        <v-link to="/notifications" class="notifications">
          <v-svg-notification />
          <span>Notificaciones</span>
        </v-link>

        <v-button class="profile">
          <v-picture class="rounded" src="/images/profile.jfif" />
          <span>Yo <v-svg-arrow-selector-down /></span>
        </v-button>
        
        <v-button class="menu">
          <v-svg-dots />
          <v-svg-grid />
          <span>Productos <v-svg-arrow-selector-down /></span>
        </v-button>

        <v-link  to="/premium" class="premium">
          Probar Premium gratis
        </v-link>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>
