<template>
  <SectionWrapper id="hero" class="flex items-center min-h-screen">
    <h1 class="font-head text-white text-7xl">
      {{ tr('HOMEPAGE.HERO.title-a') }}<br />
      <span class="text-gradient">{{ tr('HOMEPAGE.HERO.title-b') }}</span>
      {{ tr('HOMEPAGE.HERO.title-c') }} <br />{{ tr('HOMEPAGE.HERO.title-d') }}
    </h1>
  </SectionWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { tr } from '~/helpers/tr'
import SectionWrapper from '~/components/common/SectionWrapper.vue'

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
