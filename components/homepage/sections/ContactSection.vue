<template>
  <SectionWrapper id="contact" size="s" class="py-32">
    <div class="grid grid-cols-1 gap-12 text-center text-white">
      <h3 class="font-head text-4xl">
        {{ tr('HOMEPAGE.CONTACT.title') }}
      </h3>
      <div class="flex justify-center">
        <p class="w-2/3">
          {{ tr('HOMEPAGE.CONTACT.text') }}
        </p>
      </div>
      <a
        class="font-head text-3xl underline break-all transition-colors duration-500 hover:text-a-primary lg:text-6xl"
        href="mailto:brossault.leo@gmail.com"
        >{{ tr('HOMEPAGE.CONTACT.email') }}</a
      >
    </div>
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
