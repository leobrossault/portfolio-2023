<template>
  <SectionWrapper size="s" :center="true">
    <div class="grid grid-cols-1 gap-8 text-center text-white">
      <h3 class="font-head text-4xl">
        {{ tr('HOMEPAGE.CONTACT.title') }}
      </h3>
      <p>{{ tr('HOMEPAGE.CONTACT.text') }}</p>
      <a
        class="font-head text-6xl underline transition-colors duration-500 hover:text-a-primary"
        href="mailto:brossault.leo@gmail.com"
        >{{ tr('HOMEPAGE.CONTACT.email') }}</a
      >
    </div>
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
