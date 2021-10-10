<template>
  <v-body class="x-feed-index">
    <div class="sidebar-left">
      <v-widget-profile />
      
      <v-widget-history class="sticky"
        v-show="store.profile.enabled"
      />

      <v-button-expander
        @on_click="(enabled) => {
          store.profile.enabled = enabled
        }"
      />
    </div>
    <div class="sidebar-center">
      <v-widget-post-creator />
      <v-button-organizer />
    </div>
    <div class="sidebar-right">
      <v-widget-suggestions />
      <div class="sticky">
        <v-widget-advertisement />
        <v-widget-about />
      </div>
    </div>
  </v-body>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>