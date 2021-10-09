<template>
  <div
    class="v-widget-history-section"
    :class="{
      'has-body': $slots.body != null,
      'has-body': $slots.body != null,
    }"
  >
    <div class="header">
      <v-link v-if="title_linked_to" :to="title_linked_to">{{ title }}</v-link>
      <span   v-else class="title">{{ title }}</span>

      <div v-if="$slots['header-actions']" class="actions">
        <slot :name="'header-actions'" />
      </div>
    </div>
    <div v-if="$slots.body" class="body">
      <slot :name="'body'" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: String,
    title_linked_to: {
      type: String,
      default: null
    }
  }
})
</script>
