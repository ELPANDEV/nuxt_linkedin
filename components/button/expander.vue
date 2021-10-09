<template>
  <v-button
    class="v-expander"
    :class="{ enabled }"
    @click.native="change()"
  >
    Mostrar más
    <v-svg-arrow-down-larger />
  </v-button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    event_name: String
  },
  data() {
    return {
      enabled: false
    }
  },
  methods: {
    change() {
      this.enabled = !this.enabled
      this.$root.$emit(this.event_name, this.enabled)
    }
  }
})
</script>