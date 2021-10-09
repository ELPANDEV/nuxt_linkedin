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
    initial_enabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      enabled: this.initial_enabled
    }
  },
  methods: {
    change() {
      this.enabled = !this.enabled
      this.$emit('on_click', this.enabled)
    }
  }
})
</script>