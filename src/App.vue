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
      
      <section id="projects" class="h-screen flex items-center justify-center bg-surface-secondary">
        <h2 class="text-4xl font-bold text-primary-600">Section Projets</h2>
      </section>
      
      <section id="contact" class="h-screen flex items-center justify-center bg-surface">
        <h2 class="text-4xl font-bold text-primary-600">Section Contact</h2>
      </section>
    </main>
  </div>
</template>

<script>
import { useTheme } from './composables/useTheme'
import AppHeader from './components/layout/AppHeader.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import ProjectSection from './components/sections/ProjectSection.vue'

import { useScrollAnimation } from './composables/useScrollAnimation'


export default {
  name: 'App',
  components: {
    AppHeader,
    HeroSection,
    AboutSection,
    SkillsSection,
    ProjectSection
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