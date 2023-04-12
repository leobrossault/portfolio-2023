<template>
  <BackgroundManager />

  <CursorManager />

  <div class="relative z-20">
    <HeroSection />

    <AboutSection />

    <WorkSection />

    <ContactSection />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import BackgroundManager from '~/components/homepage/utils/BackgroundManager.vue'
import CursorManager from '~/components/homepage/utils/CursorManager.vue'

import HeroSection from '~/components/homepage/sections/HeroSection.vue'
import AboutSection from '~/components/homepage/sections/AboutSection.vue'
import WorkSection from '~/components/homepage/sections/WorkSection.vue'
import ContactSection from '~/components/homepage/sections/ContactSection.vue'

export default defineComponent({
  components: {
    BackgroundManager,
    CursorManager,
    HeroSection,
    AboutSection,
    WorkSection,
    ContactSection
  }
})
</script>
