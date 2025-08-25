<template>
  <div class="min-h-screen bg-surface text-primary">
    <AppHeader />
    
    <!-- Sections temporaires pour tester la navigation -->
    <main>
      <section id="hero" class="h-screen flex items-center justify-center bg-surface">
        <HeroSection/>
      </section>
      
      <AboutSection/>
      <SkillsSection/>
      <ProjectSection/>
      <ContactSection/>
    
    </main>
  </div>
  <AppFooter />
</template>

<script>
import { useTheme } from './composables/useTheme'
import AppHeader from './components/layout/AppHeader.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import ProjectSection from './components/sections/ProjectSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import AppFooter from './components/layout/AppFooter.vue'

import { useScrollAnimation } from './composables/useScrollAnimation'



export default {
  name: 'App',
  components: {
    AppHeader,
    HeroSection,
    AboutSection,
    SkillsSection,
    ProjectSection,
    ContactSection,
    AppFooter
  },
  setup() {
    const { isDark, toggleTheme } = useTheme()
    
    useScrollAnimation()

    return {
      isDark,
      toggleTheme
      
    }
  }
}
</script>