<template>
  <div class="grid grid-cols-6 gap-2 mt-4">
    <div
      v-for="(img, index) in images"
      :key="index"
      class="relative h-[250px] overflow-hidden cursor-pointer group"
      @click="onOpenModal(index)"
    >
      <div
        class="absolute inset-0 flex items-center justify-center bg-a-tertiary/50 opacity-0 blur-sm transition-all duration-500 group-hover:blur-none group-hover:opacity-100"
      >
        <svg
          class="h-10 w-10 text-white"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <polyline points="16 4 20 4 20 8" />
          <line x1="14" y1="10" x2="20" y2="4" />
          <polyline points="8 20 4 20 4 16" />
          <line x1="4" y1="20" x2="10" y2="14" />
        </svg>
      </div>

      <ProjectImg
        class="w-full h-full object-cover"
        :src="img.src"
        :alt="img.alt"
      />
    </div>

    <Teleport to="body">
      <Transition name="fadeWithBlur">
        <ProjectModal
          v-if="isOpen"
          :images="images"
          :current-index="currentIndex"
          @on-close="onCloseModal"
        />
      </Transition>
    </Teleport>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, PropType } from 'vue'
import { Media } from '~/types'
import ProjectImg from '~/components/projects/ProjectImg.vue'
import ProjectModal from '~/components/projects/ProjectModal.vue'

export default defineComponent({
  components: {
    ProjectImg,
    ProjectModal
  },
  props: {
    images: {
      type: Array as PropType<Media[]>,
      required: true
    }
  },
  setup() {
    const isOpen = ref(false)
    const currentIndex = ref(0)

    function onOpenModal(index: number) {
      isOpen.value = true
      currentIndex.value = index
    }

    function onCloseModal() {
      isOpen.value = false
    }
    return {
      isOpen,
      currentIndex,
      onOpenModal,
      onCloseModal
    }
  }
})
</script>
