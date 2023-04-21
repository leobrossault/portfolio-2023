<template>
  <div>
    <PageElementTransition :message="projectData.title" />

    <div class="bg-a-tertiary">
      <CursorManager />

      <div class="relative z-30">
        <SectionWrapper id="project" class="min-h-screen py-32">
          <NuxtLink to="/#work" class="flex items-center text-white">
            <svg
              class="h-4 w-4"
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

            {{ tr('PROJECT.back') }}
          </NuxtLink>

          <h1 class="my-8 font-head text-white text-5xl">
            {{ projectData.title }}
          </h1>

          <div class="grid grid-cols-2 gap-10">
            <div class="text-white">
              <p class="leading-relaxed">
                {{ projectData.description }}
              </p>

              <p class="mt-8 font-bold">
                {{ tr('PROJECT.stack') }} {{ projectData.stack }}
              </p>
            </div>

            <div class="flex items-start justify-center">
              <ProjectImg
                class="max-w-[400px]"
                :src="projectData.main.src"
                :alt="projectData.main.alt"
              />
            </div>
          </div>

          <template v-if="projectData.images.length">
            <p class="font-head text-l text-white mt-8 font-bold">
              {{ tr('PROJECT.gallery') }}
            </p>

            <ProjectGallery :images="projectData.images" />
          </template>
        </SectionWrapper>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { tr } from '~/helpers/tr'
import { Project } from '~/types'
import projects from '~/data/projects'
import PageElementTransition from '~/components/common/PageElementTransition.vue'
import CursorManager from '~/components/common/cursor/CursorManager.vue'
import SectionWrapper from '~/components/common/SectionWrapper.vue'
import ProjectImg from '~/components/projects/ProjectImg.vue'
import ProjectGallery from '~/components/projects/ProjectGallery.vue'

export default defineComponent({
  components: {
    PageElementTransition,
    SectionWrapper,
    CursorManager,
    ProjectImg,
    ProjectGallery
  },
  setup() {
    const route = useRoute()
    const projectData: Project =
      projects.find((project: Project) => project.slug === route.params.name) ||
      projects[0]

    return {
      tr,
      projectData
    }
  }
})
</script>
