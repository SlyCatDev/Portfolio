<template>
  <section id="contact" class="py-20 bg-surface">
    <div class="container mx-auto px-4">
      <!-- Titre de section -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-primary mb-4 fade-in-up">
          Contactez-moi
        </h2>
        <div class="w-24 h-1 bg-primary-600 mx-auto rounded mt-6 fade-in-up" style="animation-delay: 0.3s"></div>
      </div>

      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <!-- Section d'informations -->
          <div class="fade-in-up" style="animation-delay: 0.4s">
            <div class="bg-surface-secondary p-8 rounded-2xl shadow-lg h-full">
              <h3 class="text-2xl font-bold text-primary mb-6">
                Parlons de votre projet
              </h3>
              
              <div class="space-y-6">
                <p class="text-secondary leading-relaxed">
                  Que vous ayez besoin d'une application web moderne, d'un site vitrine ou d'une solution sur mesure, 
                  je suis là pour transformer vos idées.
                </p>

                <!-- Services -->
                <div class="space-y-4">
                  <h4 class="font-semibold text-primary">Ce que je peux vous apporter :</h4>
                  <div class="grid grid-cols-1 gap-3">
                    <div v-for="service in services" :key="service.name" class="flex items-start">
                      <div class="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span class="font-medium text-primary">{{ service.name }}</span>
                        <p class="text-sm text-secondary mt-1">{{ service.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Processus -->
                <div class="bg-surface p-6 rounded-lg border border-theme">
                  <h4 class="font-semibold text-primary mb-4">Mon approche :</h4>
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div v-for="(step, index) in processSteps" :key="step.title" class="text-center">
                      <div class="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-3">
                        {{ index + 1 }}
                      </div>
                      <h5 class="font-medium text-primary text-sm mb-1">{{ step.title }}</h5>
                      <p class="text-xs text-secondary">{{ step.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section contact -->
          <div class="fade-in-up" style="animation-delay: 0.5s">
            <div class="bg-surface-secondary p-8 rounded-2xl shadow-lg h-full">
              <h3 class="text-2xl font-bold text-primary mb-6">
                Prenons contact
              </h3>

              <!-- Méthodes de contact -->
              <div class="space-y-4 mb-8">
                <a 
                  :href="contactMethods.email.link"
                  class="flex items-center p-4 bg-surface rounded-xl hover:shadow-md transition-all duration-300 group"
                >
                  <div class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div class="ml-4 flex-1">
                    <h4 class="font-semibold text-primary">{{ contactMethods.email.title }}</h4>
                    <p class="text-secondary text-sm">{{ contactMethods.email.description }}</p>
                    <p class="text-primary-600 text-sm font-medium mt-1">{{ contactMethods.email.value }}</p>
                  </div>
                  <svg class="w-5 h-5 text-secondary group-hover:text-primary-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                <a 
                  :href="contactMethods.linkedin.link"
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="flex items-center p-4 bg-surface rounded-xl hover:shadow-md transition-all duration-300 group"
                >
                  <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div class="ml-4 flex-1">
                    <h4 class="font-semibold text-primary">{{ contactMethods.linkedin.title }}</h4>
                    <p class="text-secondary text-sm">{{ contactMethods.linkedin.description }}</p>
                    <p class="text-blue-600 text-sm font-medium mt-1">{{ contactMethods.linkedin.value }}</p>
                  </div>
                  <svg class="w-5 h-5 text-secondary group-hover:text-primary-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <!-- Statistiques/Infos -->
              <!-- <div class="bg-surface p-6 rounded-lg border border-theme">
                <h4 class="font-semibold text-primary mb-4 text-center">Pourquoi me choisir ?</h4>
                <div class="grid grid-cols-2 gap-4">
                  <div class="text-center">
                    <div class="text-2xl font-bold text-primary-600 mb-1">100%</div>
                    <div class="text-sm text-secondary">Projets livrés</div>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl font-bold text-primary-600 mb-1">24h</div>
                    <div class="text-sm text-secondary">Délai de réponse</div>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl font-bold text-primary-600 mb-1">3+</div>
                    <div class="text-sm text-secondary">Années d'exp.</div>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl font-bold text-primary-600 mb-1">∞</div>
                    <div class="text-sm text-secondary">Passion</div>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center mt-16 fade-in-up" style="animation-delay: 0.8s">
          <div class="bg-surface-secondary p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
            <h3 class="text-2xl font-bold text-primary mb-4">
              Prêt à démarrer votre projet ?
            </h3>
            <p class="text-secondary mb-6">
              N'hésitez pas à me contacter pour discuter de vos besoins. Je réponds généralement sous 24h.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                :href="contactMethods.email.link"
                class="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
              >
                Envoyer un email
              </a>
              <a 
                :href="contactMethods.linkedin.link"
                target="_blank" 
                rel="noopener noreferrer"
                class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
              >
                Connectons sur LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'ContactSection',
  setup() {
    const services = [
      {
        name: "Applications Web",
        description: "Développement d'applications modernes et performantes"
      },
      {
        name: "Sites Vitrine",
        description: "Créations de sites responsifs et optimisés pour le SEO"
      },
      {
        name: "Solutions CMS",
        description: "Développement WordPress"
      },
      {
        name: "Conseils Techniques",
        description: "Audit de code, optimisation de performances et architecture"
      }
    ]

    const processSteps = [
      {
        title: "Analyse",
        description: "Compréhension de vos besoins et objectifs"
      },
      {
        title: "Développement",
        description: "Création de votre solution sur mesure"
      },
      {
        title: "Livraison",
        description: "Tests, optimisation et mise en production"
      }
    ]

    const contactMethods = {
      email: {
        title: "Email professionnel",
        description: "Pour toute demande de projet ou question",
        value: "sylvain.raveneau1@gmail.com",
        link: "mailto:sylvain.raveneau1@gmail.com"
      },
      linkedin: {
        title: "LinkedIn",
        description: "Connectons-nous professionnellement",
        value: "Mon profil LinkedIn",
        link: "https://www.linkedin.com/in/sylvain-raveneau/"
      }
    }

    return {
      services,
      processSteps,
      contactMethods
    }
  }
}
</script>

<style scoped>
</style>