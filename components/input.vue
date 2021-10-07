<template>
  <div class="v-input">
    <input
      v-model="local_value"
      :type="type"
      :placeholder="placeholder"
    >
  </div>
</template>

<script lang="ts">
import mixin_v_model from '~/mixins/mixin_v_model'
export default mixin_v_model.extend({
  props: {
    type:        { type: String, default: 'text' },
    placeholder: { type: String, default: null   },
  }
})
</script>