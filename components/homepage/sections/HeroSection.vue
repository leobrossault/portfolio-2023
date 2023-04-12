<template>
  <SectionWrapper :center="true">
    <h1 class="font-head text-white text-7xl">
      {{ tr('HOMEPAGE.HERO.title-a') }}<br />
      <span
        class="text-transparent saturate-200 bg-clip-text bg-gradient-to-tr from-a-tertiary from-[2%] via-a-secondary to-a-primary"
        >{{ tr('HOMEPAGE.HERO.title-b') }}</span
      >
      {{ tr('HOMEPAGE.HERO.title-c') }} <br />{{ tr('HOMEPAGE.HERO.title-d') }}
    </h1>
  </SectionWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { tr } from '~/helpers/tr'
import SectionWrapper from '~/components/layout/SectionWrapper.vue'

export default defineComponent({
  components: {
    SectionWrapper
  },
  setup() {
    return {
      tr
    }
  }
})
</script>
