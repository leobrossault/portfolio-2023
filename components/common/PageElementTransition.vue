<template>
  <div
    class="page-element-transition fixed z-40 top-0 bottom-0 w-full h-screen max-w-0 bg-a-primary transition-all duration-[1200ms] overflow-hidden"
  >
    <div
      class="absolute top-0 bottom-0 w-screen h-full flex items-center justify-center"
    >
      <p
        class="page-text-transition font-head text-a-tertiary text-6xl transition-all duration-[1200ms]"
      >
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    message: {
      type: String,
      required: true
    }
  }
})
</script>
