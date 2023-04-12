<template>
  <div>
    <h2 class="text-center text-white font-head text-5xl">
      {{ title }}
    </h2>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { Media } from '~/types'

interface Project {
  id: number
  title: string
  description: string
  order: number
  main: Media
  images: Array<Media>
}

const props = defineProps<Project>()
</script>
