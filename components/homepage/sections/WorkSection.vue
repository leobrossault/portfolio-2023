<template>
  <SectionWrapper id="work" class="py-32">
    <h3 class="text-center mb-20">
      {{ tr('HOMEPAGE.PROJECTS.title') }}
    </h3>

    <div class="grid grid-cols-1 gap-20">
      <ProjectItem
        v-for="project in projects"
        :id="project.id"
        :key="project.id"
        :order="project.order"
        :title="project.title"
        :slug="project.slug"
        :description="project.description"
        :main="project.main"
        :images="project.images"
      />
    </div>
  </SectionWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import projects from '~/data/projects'
import { tr } from '~/helpers/tr'
import SectionWrapper from '~/components/common/SectionWrapper.vue'
import ProjectItem from '~/components/homepage/components/ProjectItem.vue'

export default defineComponent({
  components: {
    SectionWrapper,
    ProjectItem
  },
  setup() {
    return {
      tr,
      projects
    }
  }
})
</script>
