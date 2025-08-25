<template>
  <section id="skills" class="py-20 bg-surface">
    <div class="container mx-auto px-4">
      <!-- Titre de section --> 
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-primary mb-4 fade-in-up">
          Mes Compétences
        </h2>
        <div class="w-24 h-1 bg-primary-600 mx-auto rounded mt-6 fade-in-up" style="animation-delay: 0.3s"></div>
      </div>

      <!-- Catégories de compétences -->
      <div class="space-y-16">
        <div v-for="(category, categoryIndex) in skillCategories" :key="category.name">
          <div class="fade-in-up" :style="{ animationDelay: `${0.4 + categoryIndex * 0.1}s` }">
            <!-- Titre de catégorie -->
            <div class="text-center mb-8">
              <h3 class="text-2xl md:text-3xl font-bold text-primary mb-2">
                {{ category.name }}
              </h3>
              <p class="text-secondary">{{ category.description }}</p>
            </div>

            <!-- Grille des compétences -->
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              <div
                v-for="(skill, skillIndex) in category.skills"
                :key="skill.name"
                class="skill-card group cursor-pointer fade-in-up"
                :style="{ animationDelay: `${0.5 + categoryIndex * 0.1 + skillIndex * 0.05}s` }"
                @click="selectSkill(skill)"
                :class="{ selected: selectedSkill?.name === skill.name }"
              >
                <div
                  class="bg-surface-secondary p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
                >
                  <!-- Icône -->
                  <div class="flex justify-center mb-4">
                    <div
                      class="w-16 h-16 rounded-lg flex items-center justify-center text-3xl"
                      :style="{ backgroundColor: skill.color + '20', color: skill.color }"
                    >
                      {{ skill.icon }}
                    </div>
                  </div>

                  <!-- Nom de la compétence -->
                  <h4 class="text-lg font-semibold text-center text-primary mb-2">
                    {{ skill.name }}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal/Panel de détail de compétence -->
      <Transition name="modal">
        <div
          v-if="selectedSkill"
          class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          @click="selectedSkill = null"
        >
          <div
            class="bg-surface max-w-2xl w-full rounded-2xl shadow-2xl transform transition-all duration-300"
            @click.stop
          >
            <div class="p-8">
              <!-- Header -->
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center">
                  <div
                    class="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mr-4"
                    :style="{
                      backgroundColor: selectedSkill.color + '20',
                      color: selectedSkill.color,
                    }"
                  >
                    {{ selectedSkill.icon }}
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-primary">{{ selectedSkill.name }}</h3>
                  </div>
                </div>
                <button
                  @click="selectedSkill = null"
                  class="text-secondary hover:text-primary transition-colors p-2"
                >
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <!-- Contenu -->
              <div class="space-y-6">
                <div>
                  <h4 class="font-semibold text-primary mb-2">Description</h4>
                  <p class="text-secondary">{{ selectedSkill.description }}</p>
                </div>

                <div v-if="selectedSkill.experience">
                  <h4 class="font-semibold text-primary mb-2">Expérience</h4>
                  <p class="text-secondary">{{ selectedSkill.experience }}</p>
                </div>

                <div v-if="selectedSkill.projects && selectedSkill.projects.length > 0">
                  <h4 class="font-semibold text-primary mb-2">Utilisé dans</h4>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="project in selectedSkill.projects"
                      :key="project"
                      class="px-3 py-1 bg-surface-secondary text-primary rounded-full text-sm"
                    >
                      {{ project }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'SkillsSection',
  setup() {
    const selectedSkill = ref(null)

    // Configuration des compétences par catégorie
    const skillCategories = [
      {
        name: 'Frontend',
        description: "Technologies pour l'interface utilisateur",
        skills: [
          {
            name: 'Vue.js',
            icon: '⚡',
            color: '#4FC08D',
            description:
              'Framework JavaScript progressif pour créer des interfaces utilisateur interactives.',
            experience: 'Vue 3, Options et Composition API, Pinia, Vuetify',
            projects: ['PWA - Projet FCV (fiche chantier virtuel)', 'Portfolio', "Projet d'étude"],
          },
          {
            name: 'JavaScript',
            icon: '🟨',
            color: '#F7DF1E',
            level: 80,
            description: 'Langage de programmation pour le développement web moderne.',
            experience: 'Maîtrise ES6+, async/await, modules, POO',
            projects: ['Tous mes projets'],
          },
          {
            name: 'CSS3',
            icon: '🎨',
            color: '#1572B6',
            level: 90,
            description: 'Langage de style pour la mise en forme et les animations.',
            experience: 'CSS Grid, Flexbox, animations, responsive design',
            projects: ['Tous mes projets'],
          },
          {
            name: 'Tailwind CSS',
            icon: '🎯',
            color: '#06B6D4',
            level: 95,
            description: 'Framework CSS utility-first pour un développement rapide.',
            experience: 'Utilisation intensive avec configuration personnalisée',
            projects: ['Portfolio', 'PWA', 'Dashboard'],
          },
        ],
      },
      {
        name: 'Backend',
        description: 'Technologies côté serveur',
        skills: [
          {
            name: 'Node.js',
            icon: '🟢',
            color: '#339933',
            level: 80,
            description: 'Runtime JavaScript côté serveur pour des applications scalables.',
            experience: "Développement d'APIs REST, middleware, authentification",
            projects: ['API PWA', 'Server Express'],
          },
          {
            name: 'Express.js',
            icon: '⚫',
            color: '#000000',
            level: 85,
            description: 'Framework web minimaliste et flexible pour Node.js.',
            experience: "Routing, middleware, gestion d'erreurs, authentification JWT",
            projects: ['API REST', 'Backend PWA'],
          },
          {
            name: 'PostgreSQL',
            icon: '🐘',
            color: '#336791',
            level: 75,
            description: 'Base de données relationnelle avancée et open source.',
            experience: 'Requêtes complexes, relations, performances, migrations',
            projects: ['PWA', 'Dashboard admin'],
          },
          {
            name: 'REST API',
            icon: '🔗',
            color: '#FF6B6B',
            level: 85,
            description: 'Architecture pour créer des services web stateless.',
            experience: "Design d'APIs, documentation, versioning, tests",
            projects: ['API PWA', 'Services web'],
          },
        ],
      },
      {
        name: 'CMS & Tools',
        description: 'Systèmes de gestion de contenu et outils',
        skills: [
          {
            name: 'WordPress',
            icon: '📝',
            color: '#21759B',
            level: 80,
            description: 'CMS populaire pour créer des sites web personnalisés.',
            experience: 'Thèmes custom, hooks, custom post types, optimisation',
            projects: ['Culture Biome - Thème WordPress custom - https://culturebiome.fr/'],
          },
          {
            name: 'Git',
            icon: '📦',
            color: '#F05032',
            level: 85,
            description: 'Système de contrôle de version distribué.',
            experience: 'Workflow Git, branches, merge, résolution de conflits',
            projects: ['Tous mes projets'],
          },
          {
            name: 'Vite',
            icon: '⚡',
            color: '#646CFF',
            level: 80,
            description: 'Build tool moderne et rapide pour les projets frontend.',
            experience: 'Configuration, plugins, optimisation de build',
            projects: ['Portfolio Vue.js', 'PWA'],
          },
          {
            name: 'Figma',
            icon: '🎨',
            color: '#F24E1E',
            level: 75,
            description: 'Outil de design UI/UX collaboratif.',
            experience: 'Prototypage, design system, collaboration en temps réel',
            projects: ["Design de l'interface utilisateur"],
          },
        ],
      },
    ]

    const selectSkill = (skill) => {
      selectedSkill.value = skill
    }

    return {
      skillCategories,
      selectedSkill,
      selectSkill,
    }
  },
}
</script>

<style scoped>
.skill-card {
  transition: all 0.3s ease;
}

/* Animation modal */
.modal-enter-active, .modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* Responsive pour mobile */
@media (max-width: 640px) {
  .skill-card {
    transform: none !important;
  }

  .skill-card:hover {
    transform: translateY(-4px) !important;
  }
}
</style>
