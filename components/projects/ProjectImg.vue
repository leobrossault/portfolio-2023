<template>
  <img :src="`/_nuxt/assets/img/projects/${src}`" :alt="alt" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    }
  }
})
</script>
