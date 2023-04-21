<template>
  <div>
    <NuxtLink
      :to="`/project/${project.slug}`"
      class="relative block overflow-hidden group"
    >
      <h2
        class="text-center text-white font-head text-5xl z-20 transition-all duration-700 group-hover:tracking-widest"
      >
        {{ project.title }}
      </h2>

      <div
        class="absolute bottom-0 left-1/2 translate-x-[-50%] w-full h-[48px] max-h-0 overflow-hidden transition-all duration-700 group-hover:max-h-[48px]"
      >
        <h2
          class="absolute bottom-0 left-0 w-full text-gradient text-center font-head text-5xl z-20 transition-all duration-700 group-hover:tracking-widest"
        >
          {{ project.title }}
        </h2>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Project } from '~/types'

export default defineComponent({
  props: {
    project: {
      type: Object as PropType<Project>,
      required: true
    }
  }
})
</script>
