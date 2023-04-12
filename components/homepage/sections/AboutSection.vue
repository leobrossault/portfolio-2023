<template>
  <SectionWrapper size="s" :center="true">
    <div class="grid grid-cols-2 gap-20 items-center w-full">
      <div>
        <p class="text-white leading-10">
          {{ tr('HOMEPAGE.ABOUT.description') }}
        </p>
      </div>

      <div class="flex justify-center">
        <div class="w-[25rem] h-[25rem] rounded-full overflow-hidden">
          <img src="../../../assets/img/profil.jpg" alt="Photo de profil" />
        </div>
      </div>
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
