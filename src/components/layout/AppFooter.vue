<template>
  <footer class="bg-surface-secondary border-t border-theme">
    <div class="container mx-auto px-4 py-12">
      
      <!-- Contenu principal du footer -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        
        <!-- Branding et description -->
        <div class="space-y-4">
          <h3 class="text-xl font-bold text-primary">{{ name }}</h3>
          <p class="text-secondary text-sm leading-relaxed">
            Développeur passionné créant des solutions web modernes et performantes. 
            Spécialisé en Vue.js, Node.js et technologies front-end.
          </p>
          <div class="flex space-x-4">
            <a 
              href="https://github.com/SlyCatDev" 
              target="_blank" 
              rel="noopener noreferrer"
              class="p-2 rounded-lg bg-surface hover:bg-gray-800 hover:text-white transition-all duration-200 group"
              title="GitHub"
            >
              <svg class="w-5 h-5 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/sylvain-raveneau/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="p-2 rounded-lg bg-surface hover:bg-blue-600 hover:text-white transition-all duration-200 group"
              title="LinkedIn"
            >
              <svg class="w-5 h-5 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            <a 
              href="mailto:sylvain.raveneau1@gmail.com"
              class="p-2 rounded-lg bg-surface hover:bg-primary-600 hover:text-white transition-all duration-200 group"
              title="Email"
            >
              <svg class="w-5 h-5 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Navigation rapide -->
        <div class="space-y-4">
          <h4 class="text-lg font-semibold text-primary">Navigation</h4>
          <ul class="space-y-2">
            <li v-for="item in navItems" :key="item.id">
              <a 
                :href="`#${item.id}`"
                @click="scrollToSection(item.id)"
                class="text-secondary hover:text-primary-600 transition-colors duration-200 text-sm"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Technologies et contact -->
        <div class="space-y-4">
          <!-- <h4 class="text-lg font-semibold text-primary">Technologies</h4>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tech in technologies" 
              :key="tech.name"
              class="px-3 py-1 text-xs font-medium rounded-lg bg-surface text-secondary border border-theme"
            >
              {{ tech.name }}
            </span>
          </div> -->
          
          <div class="pt-4">
            <p class="text-sm text-secondary mb-2">Disponible pour de nouveaux projets</p>
            <a 
              href="mailto:sylvain.raveneau1@gmail.com"
              class="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              Contactez-moi
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Séparateur -->
      <div class="border-t border-theme pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          <!-- Copyright -->
          <div class="text-sm text-secondary">
            © {{ currentYear }} {{ name }}. Tous droits réservés.
          </div>

          <!-- Informations supplémentaires -->
          <div class="flex items-center space-x-6 text-sm text-secondary">
            <span class="hidden sm:inline">Fait avec ❤️ et Vue.js</span>
            <a 
              href="https://github.com/SlyCatDev/Portfolio" 
              target="_blank" 
              rel="noopener noreferrer"
              class="hover:text-primary-600 transition-colors inline-flex items-center"
            >
              <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Code source
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bouton retour en haut -->
    <button 
      @click="scrollToTop"
      class="fixed bottom-6 right-6 p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 z-40"
      :class="{ 'opacity-0 pointer-events-none': !showScrollTop }"
      title="Retour en haut"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  </footer>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'AppFooter',
  setup() {
    const showScrollTop = ref(false)
    const currentYear = new Date().getFullYear()
    const name = 'SR'

    const navItems = [
      { id: 'hero', label: 'Accueil' },
      { id: 'about', label: 'À propos' },
      { id: 'skills', label: 'Compétences' },
      { id: 'projects', label: 'Projets' },
      { id: 'contact', label: 'Contact' }
    ]

    const technologies = [
      { name: 'Vue.js' },
      { name: 'TailwindCSS' },
      { name: 'Node.js' },
      { name: 'PostgreSQL' },
      { name: 'Figma' },
      { name: 'GitLab' }
    ]

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        const headerHeight = 80
        const elementPosition = element.offsetTop - headerHeight
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    const handleScroll = () => {
      showScrollTop.value = window.scrollY > 300
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      name,
      currentYear,
      navItems,
      technologies,
      showScrollTop,
      scrollToSection,
      scrollToTop
    }
  }
}
</script>

<style scoped>
/* Animations pour le bouton scroll to top */
button {
  transition: opacity 0.3s ease, transform 0.2s ease;
}
</style>