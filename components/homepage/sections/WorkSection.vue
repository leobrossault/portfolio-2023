<template>
  <SectionWrapper>
    <div class="grid grid-cols-1 gap-20">
      <ProjectItem
        v-for="project in projects"
        :id="project.id"
        :key="project.id"
        :order="project.order"
        :title="project.title"
        :description="project.description"
        :main="project.main"
        :images="project.images"
      />
    </div>
  </SectionWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { projects } from '~/data/projects.json'
import { tr } from '~/helpers/tr'
import SectionWrapper from '~/components/layout/SectionWrapper.vue'
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
