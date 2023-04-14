<template>
  <img :src="img" :alt="alt" />
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
  },
  async setup() {
    const getImage = async () => {
      // set the relative path to assets
      const module = await import(
        /* @vite-ignore */ '../../assets/img/projects/safran/main.jpg'
      )
      return module.default.replace(/^\/@fs/, '')
    }
    const img = await getImage()

    return {
      img
    }
  }
})
</script>
