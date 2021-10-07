<template>
  <nuxt-link class="v-link" :to="to">
    <slot />
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    to: String
  }
})
</script>