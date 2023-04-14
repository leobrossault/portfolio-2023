<template>
  <div>
    <GradientBackground />

    <CursorManager />

    <div class="relative z-20">
      <HeroSection />

      <AboutSection />

      <WorkSection />

      <ContactSection />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import GradientBackground from '~/components/homepage/components/GradientBackground.vue'
import CursorManager from '~/components/common/cursor/CursorManager.vue'

import HeroSection from '~/components/homepage/sections/HeroSection.vue'
import AboutSection from '~/components/homepage/sections/AboutSection.vue'
import WorkSection from '~/components/homepage/sections/WorkSection.vue'
import ContactSection from '~/components/homepage/sections/ContactSection.vue'

export default defineComponent({
  components: {
    GradientBackground,
    CursorManager,
    HeroSection,
    AboutSection,
    WorkSection,
    ContactSection
  }
})
</script>
