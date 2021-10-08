<template>
  <article class="v-widget-profile" :class="{ enabled }">
    <div class="bg-image"></div>

    <header>
      <v-picture class="rounded" :src="'/images/profile.jfif'" />
      <h3>Francisco Moncayo</h3>
      <p>Laravel, Vue/Nuxt Developer</p>
    </header>

    <div v-if="enabled" class="body">
      <div class="information">
        <div class="social">
          <div>
            <div>
              <span>Contactos</span>
              <span>Amplía tu red</span>
            </div>
            <span>54</span>
          </div>
          <div>
            <div>
              <span>Quién ha visto tu perfil</span>
            </div>
            <span>67</span>
          </div>
        </div>

        <v-link class="premium" to="/">
          <span>Accede a información y herramientas exclusivas</span>
          <div>
            <v-svg-premium />
            <span>Probar Premium gratis</span>
          </div>
        </v-link>

        <div class="labels">
          <div>
            <v-svg-label />
            <span>Marcapáginas</span>
          </div>
        </div>
      </div>
      <div class="history">
        <section>
          <h3>Recientes</h3>
          <v-link-hash to="/">vue</v-link-hash>
          <v-link-hash to="/">vue</v-link-hash>
          <v-link-hash to="/">laravel</v-link-hash>
          <v-link-hash to="/">javascript</v-link-hash>
          <v-link-hash to="/">marketing digital</v-link-hash>
          <v-link-hash to="/">diseño web</v-link-hash>
        </section>
        <v-link class="section" to="/">Grupos</v-link>
        <v-link class="section" to="/">Eventos<v-svg-add/></v-link>
        <section>
          <v-link class="section" to="/">Hashtags seguidos<v-svg-add/></v-link>
          <v-link-hash to="/"><v-svg-hash />vue</v-link-hash>
          <v-link-hash to="/"><v-svg-hash />laravel</v-link-hash>
          <v-link-hash to="/"><v-svg-hash />javascript</v-link-hash>
        </section>
        <v-link to="/">Ver más</v-link>
      </div>
    </div>

    <footer>
      <v-button @click.native="enabled = !enabled">
        Mostrar más
        <v-svg-arrow-down-larger />
      </v-button>
    </footer>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      enabled: false
    }
  }
})
</script>
