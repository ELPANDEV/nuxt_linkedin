<template>
  <v-link class="hash" :to="to">
    <v-svg-hash />
    <slot />
  </v-link>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    to: String
  }
})
</script>