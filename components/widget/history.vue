<template>
  <div class="v-widget-history">
    <v-widget-history-section :title="'Recientes'">
      <template #body>
        <v-link class="leading" to="/"><v-svg-hash />vue</v-link>
        <v-link class="leading" to="/"><v-svg-hash />vue</v-link>
        <v-link class="leading" to="/"><v-svg-hash />laravel</v-link>
        <v-link class="leading" to="/"><v-svg-hash />javascript</v-link>
        <v-link class="leading" to="/"><v-svg-hash />marketing digital</v-link>
        <v-link class="leading" to="/"><v-svg-hash />diseño web</v-link>
      </template>
    </v-widget-history-section>

    <v-widget-history-section
      :title="'Grupos'"
      :title_linked_to="'/'"
    />

    <v-widget-history-section
      :title="'Eventos'"
      :title_linked_to="'/'"
    >
      <template #header-actions>
        <v-svg-add />
      </template>
    </v-widget-history-section>

    <v-widget-history-section
      :title="'Hashtags seguidos'"
      :title_linked_to="'/'"
    >
      <template #header-actions>
        
      </template>
      <template #body>
        <v-link class="leading" to="/"><v-svg-hash />vue</v-link>
        <v-link class="leading" to="/"><v-svg-hash />laravel</v-link>
        <v-link class="leading" to="/"><v-svg-hash />javascript</v-link>
      </template>
    </v-widget-history-section>

    <v-link class="more" to="/">Ver más</v-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>
