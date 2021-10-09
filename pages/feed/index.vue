<template>
  <v-body class="x-feed-index">
    <div class="sidebar-left">
      <v-widget-profile />
      <v-widget-history />
      <v-button-expander :event_name="'expand_profile'" />
    </div>
    <div class="sidebar-center">

    </div>
    <div class="sidebar-rigth">

    </div>
    <!-- <v-widget-post-creator />
    <v-widget-post-organizer /> -->

    <!-- <v-widget-post
      v-for="(post, i) in store.posts"
      :key="`post${i}${uuid}`"
      :post="post"
    /> -->
  </v-body>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>