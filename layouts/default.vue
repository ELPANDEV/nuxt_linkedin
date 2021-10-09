<template>
  <div class="v-layout">
    <v-header />

    <nuxt />

    <v-alert-copyright v-if="store.alert_copyright_enabled" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>