<template>
  <div
    :class="`container m-auto min-h-screen ${
      center ? 'flex items-center' : 'py-16'
    }`"
  >
    <slot />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    size: {
      default: 'm',
      type: String
    },
    center: {
      default: false,
      type: Boolean
    }
  }
})
</script>
