<template>
  <div
    class="fixed inset-0 z-50 grid grid-cols-[50px_1fr_50px] items-center gap-8 bg-white/70 p-10"
  >
    <div class="absolute top-10 right-10 cursor-pointer" @click="onClose">
      <svg
        class="h-8 w-8 text-a-tertiary transition-colors duration-500 hover:text-a-secondary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>

    <div class="cursor-pointer" @click="onPrev">
      <svg
        class="h-16 w-16 text-a-tertiary transition-colors duration-500 hover:text-a-secondary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>

    <div class="flex items-center justify-center">
      <ProjectImg
        class="max-h-[calc(100vh_-_80px)]"
        :src="currentImg.src"
        :alt="currentImg.alt"
      />
    </div>

    <div class="cursor-pointer" @click="onNext">
      <svg
        class="h-16 w-16 text-a-tertiary transition-colors duration-500 hover:text-a-secondary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { Media } from '~/types'
import ProjectImg from '~/components/projects/ProjectImg.vue'

export default defineComponent({
  components: {
    ProjectImg
  },
  props: {
    currentIndex: {
      type: Number,
      required: true
    },
    images: {
      type: Array as PropType<Media[]>,
      required: true
    }
  },
  setup(props, { emit }) {
    const index = ref(props.currentIndex)
    const currentImg = computed(() => props.images[index.value])

    function onNext() {
      index.value =
        index.value === props.images.length - 1 ? 0 : index.value + 1
    }

    function onPrev() {
      index.value =
        index.value === 0 ? props.images.length - 1 : index.value - 1
    }

    function onClose() {
      emit('on-close')
    }

    return {
      index,
      currentImg,
      onNext,
      onPrev,
      onClose
    }
  }
})
</script>
