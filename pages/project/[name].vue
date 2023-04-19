<template>
  <div>
    <PageElementTransition :message="projectData.title" />

    <div class="bg-a-tertiary">
      <CursorManager />

      <div class="relative z-30">
        <SectionWrapper id="project" class="min-h-screen py-32">
          <NuxtLink to="/#work" class="text-white underline">
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

            <Suspense>
              <ProjectImg
                :src="projectData.main.src"
                :alt="projectData.main.alt"
              />
            </Suspense>
          </div>
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
import CursorManager from '~/components/common/cursor/CursorManager.vue'
import SectionWrapper from '~/components/common/SectionWrapper.vue'
import ProjectImg from '~/components/projects/ProjectImg.vue'
import PageElementTransition from '~/components/common/PageElementTransition.vue'

export default defineComponent({
  components: {
    PageElementTransition,
    SectionWrapper,
    CursorManager,
    ProjectImg
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
