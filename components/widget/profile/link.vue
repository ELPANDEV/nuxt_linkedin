<template>
  <v-link
    class="v-widget-profile-link"
    :to="to"
  >
    <div>
      <span v-if="title" class="title">{{ title }}</span>
      <span v-if="subtitle" class="subtitle">
        <slot name="subtitle-svg" />
        {{ subtitle }}
      </span>
    </div>
    <span v-if="counter" class="value">54</span>
  </v-link>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    to: String,
    title: {
      type: String,
      default: null
    },
    subtitle: {
      type: String,
      default: null
    },
    counter: {
      type: Number,
      default: null
    },
  }
})
</script>
