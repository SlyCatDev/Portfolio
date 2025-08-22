<template>
  <section id="hero" class="min-h-screen flex items-center bg-surface">
    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <!-- Photo profil -->
        <div class="lg:col-span-4 flex justify-center lg:justify-start">
          <div class="relative">
            <img 
              :src="profileImage" 
              :alt="`Photo de ${name}`"
              class="w-80 h-100 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 fade-in-up"
              :class="{ 'animate-pulse bg-surface-secondary': !imageLoaded }"
              @load="imageLoaded = true"
            />
            <!-- Décoration -->
            <div class="absolute -z-10 top-4 left-4 w-80 h-80 bg-primary-500/20 rounded-2xl"></div>
          </div>
        </div>

        <!-- Texte de présentation -->
        <div class="lg:col-span-8 text-center lg:text-left">
          <div class="fade-in-up" style="animation-delay: 0.2s">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              <span class="block text-secondary text-xl md:text-2xl font-normal mb-2">
                Bonjour, je suis
              </span>
              <span 
                ref="typewriterRef"
                class="text-primary-600 typewriter-cursor"
              >
                {{ displayedName }}
              </span>
            </h1>
          </div>

          <div class="fade-in-up" style="animation-delay: 0.4s">
            <p class="text-xl md:text-2xl text-secondary mb-2">
              <strong class="text-primary-600">{{ jobTitle }}</strong>
            </p>
            <p class="text-lg text-secondary mb-8 max-w-2xl">
              {{ description }}
            </p>
          </div>

          <!-- Boutons d'action -->
          <div class="fade-in-up flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" style="animation-delay: 0.6s">
            <a 
              :href="cvUrl" 
              download 
              class="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Télécharger mon CV
            </a>
            
            <button 
              @click="scrollToContact"
              class="inline-flex items-center px-8 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-600 hover:text-white transform hover:scale-105 transition-all duration-200"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contactez-moi
            </button>
          </div>

          <!-- Réseaux sociaux -->
          <div class="fade-in-up flex justify-center lg:justify-start space-x-6 mt-8" style="animation-delay: 0.8s">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-secondary hover:text-primary-600 transform hover:scale-110 transition-all duration-200"
              :title="social.name"
            >
              <component :is="social.icon" class="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'HeroSection',
  setup() {
    const typewriterRef = ref(null)
    const displayedName = ref('')
    const imageLoaded = ref(false)

    const name = 'Sylvain Raveneau'
    const jobTitle = 'Développeur Web FullStack'
    const description = 'Passionné par l\'informatique et le web, je crée des expériences utilisateur modernes et performantes.'
    const profileImage = '/img/profile.jpg'
    const cvUrl = '/assets/CV_Raveneau_Sylvain.pdf'

    // Liens sociaux
    const socialLinks = [
      {
        name: 'GitHub',
        url: 'https://github.com/SlyCatDev',
        icon: 'GitHubIcon'
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/sylvain-raveneau/',
        icon: 'LinkedInIcon'
      }
    ]

    // Effet typewriter
    const typewriterEffect = () => {
      const text = name
      let index = 0
      
      const type = () => {
        if (index < text.length) {
          displayedName.value += text.charAt(index)
          index++
          setTimeout(type, 100)
        }
      }
      
      type()
    }

    const scrollToContact = () => {
      const element = document.getElementById('contact')
      if (element) {
        const headerHeight = 80
        const elementPosition = element.offsetTop - headerHeight
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    }

    onMounted(() => {
      setTimeout(typewriterEffect, 800)
    })

    return {
      typewriterRef,
      displayedName,
      imageLoaded,
      name,
      jobTitle,
      description,
      profileImage,
      cvUrl,
      socialLinks,
      scrollToContact
    }
  }
}
</script>

<style scoped>
.typewriter-cursor::after {
  content: '|';
  color: #3b82f6;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Animation personnalisée pour les éléments */
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease-out forwards;
}
</style>