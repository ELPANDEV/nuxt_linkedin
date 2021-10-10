<template>
  <article class="v-widget-profile">
    <div class="bg-image">
      <v-svg-bg-profile-image />
    </div>

    <header>
      <v-picture class="rounded" :src="'/images/profile.jfif'" />
      <h3>Francisco Moncayo</h3>
      <p>Laravel, Vue/Nuxt Developer</p>
    </header>

    <div v-show="store.profile.enabled" class="body">
      <div class="social">
        <v-widget-profile-link class="title-bolder"
          :to="'/'"
          :title="'Contactos'"
          :subtitle="'Amplía tu red'"
          :counter="54"
        />
        <v-widget-profile-link class="title-bolder title-separator"
          :to="'/'"
          :title="'Quién ha visto tu perfil'"
          :counter="67"
        />
      </div>

      <div>
        <v-widget-profile-link
          :to="'/'"
          :title="'Accede a información y herramientas exclusivas'"
          :subtitle="'Probar Premium gratis'"
        >
          <v-svg-premium slot="subtitle-svg" />
        </v-widget-profile-link>
      </div>

      <div class="labels">
        <v-widget-profile-link class="title-bolder"
          :to="'/'"
          :subtitle="'Marcapáginas'"
        >
          <v-svg-label slot="subtitle-svg" />
        </v-widget-profile-link>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>
