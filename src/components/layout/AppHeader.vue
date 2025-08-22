<template>
  <header class="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-theme">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        
        <div class="flex items-center">
          <h1 class="text-2xl font-bold text-primary-600">
            {{ name }}
          </h1>
          <!-- <span class="ml-2 text-sm text-secondary hidden sm:inline">
            {{ title }}
          </span> -->
        </div>

        <!-- Navigation desktop -->
        <ul class="hidden md:flex space-x-8">
          <li v-for="item in navItems" :key="item.id">
            <a 
              :href="`#${item.id}`"
              @click="scrollToSection(item.id)"
              class="text-primary hover:text-primary-600 transition-colors duration-200 font-medium"
              :class="{ 'text-primary-600': activeSection === item.id }"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
        

        <!-- Bouton thème + menu mobile -->
        <div class="flex items-center space-x-4">
            <SocialIcons />
          
          <ThemeToggle />
          
          <!-- Bouton menu mobile -->
          <button 
            @click="toggleMobileMenu"
            class="md:hidden p-2 rounded-lg bg-surface-secondary hover:opacity-80 transition-opacity"
          >
            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Menu mobile -->
      <div v-show="mobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-theme">
        <ul class="space-y-2 pt-4">
          <li v-for="item in navItems" :key="item.id">
            <a 
              :href="`#${item.id}`"
              @click="scrollToSection(item.id, true)"
              class="block py-2 px-4 rounded-lg text-primary hover:bg-surface-secondary transition-colors duration-200"
              :class="{ 'bg-surface-secondary text-primary-600': activeSection === item.id }"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import ThemeToggle from '../ui/ThemeToggle.vue'
import SocialIcons from '../ui/SocialIcons.vue'

export default {
  name: 'AppHeader',
  components: {
    ThemeToggle,
    SocialIcons
  },
  setup() {
    const mobileMenuOpen = ref(false)
    const activeSection = ref('hero')

    const name = 'SR'
    const title = 'Développeur Full Stack'

    const navItems = [
      { id: 'hero', label: 'Accueil' },
      { id: 'about', label: 'À propos' },
      { id: 'skills', label: 'Compétences' },
      { id: 'projects', label: 'Projets' },
      { id: 'contact', label: 'Contact' }
    ]

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }

    const scrollToSection = (sectionId, closeMobileMenu = false) => {
      const element = document.getElementById(sectionId)
      if (element) {
        const headerHeight = 80 
        const elementPosition = element.offsetTop - headerHeight
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
      
      if (closeMobileMenu) {
        mobileMenuOpen.value = false
      }
    }

    // Détecte la section active pendant le scroll
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      })).filter(section => section.element)

      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element.offsetTop <= scrollPosition) {
          activeSection.value = section.id
          break
        }
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      handleScroll() // Appel initial
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      name,
      title,
      navItems,
      mobileMenuOpen,
      activeSection,
      toggleMobileMenu,
      scrollToSection
    }
  }
}
</script>