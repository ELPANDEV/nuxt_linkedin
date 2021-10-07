<template>
  <picture class="v-picture">
    <img :lazy-src="src" :alt="alt">
  </picture>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    src: String,
    alt: {
      type: String,
      default: null
    }
  },
  watch: {
    src() { this.observer() }
  },
  mounted() {
    this.observer()
  },
  methods: {
    observer() {
      const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target
            const src = img.getAttribute('lazy-src') || ''

            img.setAttribute('src', src)

            observer.disconnect();
          }
        })
      })

      io.observe(this.$el.getElementsByTagName('img')[0])
    }
  }
})
</script>