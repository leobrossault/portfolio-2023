<template>
  <SectionWrapper id="about" size="s" class="pt-16 pb-32">
    <div class="grid grid-cols-1 gap-20 items-center w-full lg:grid-cols-2">
      <div class="flex justify-center lg:order-1">
        <div class="w-[25rem]">
          <div class="relative w-full pt-[100%] rounded-full overflow-hidden">
            <img
              class="absolute inset-0 object-cover"
              src="~/assets/img/profil.jpg"
              alt="Photo de profil"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 class="mb-8">
          {{ tr('HOMEPAGE.ABOUT.title') }}
        </h3>

        <p class="text-white leading-10">
          {{ tr('HOMEPAGE.ABOUT.description') }}
        </p>
      </div>
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
