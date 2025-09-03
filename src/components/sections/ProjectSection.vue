<template>
  <section id="projects" class="py-20 bg-surface-secondary">
    <div class="container mx-auto px-4">
      <!-- Titre de section -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-primary mb-4 fade-in-up">Mes Projets</h2>
        <div
          class="w-24 h-1 bg-primary-600 mx-auto rounded mt-6 fade-in-up"
          style="animation-delay: 0.3s"
        ></div>
      </div>

      <!-- Filtres -->
      <!-- <div class="flex flex-wrap justify-center gap-4 mb-12 fade-in-up" style="animation-delay: 0.4s">
        <button
          v-for="filter in filters"
          :key="filter.value"
          @click="activeFilter = filter.value"
          class="px-6 py-3 rounded-lg font-medium transition-all duration-300"
          :class="[
            activeFilter === filter.value
              ? 'bg-primary-600 text-white shadow-lg'
              : 'bg-surface text-secondary hover:bg-primary-600 hover:text-white'
          ]"
        >
          {{ filter.label }}
          <span class="ml-2 text-sm opacity-75">({{ getProjectCount(filter.value) }})</span>
        </button>
      </div> -->

      <!-- Grille des projets -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          :project="project"
          :style="{ animationDelay: `${0.5 + index * 0.1}s` }"
          @open-detail="openProjectDetail"
        />
      </div>

      <!-- Message si aucun projet -->
      <div v-if="filteredProjects.length === 0" class="text-center py-12">
        <div class="text-6xl mb-4">🔍</div>
        <h3 class="text-xl font-semibold text-primary mb-2">Aucun projet trouvé</h3>
        <p class="text-secondary">Aucun projet ne correspond au filtre sélectionné.</p>
      </div>

      <!-- Call to action -->
      <div class="text-center mt-16 fade-in-up" style="animation-delay: 0.8s">
        <div class="bg-surface p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
          <h3 class="text-2xl font-bold text-primary mb-4">Intéressé par mon travail ?</h3>
          <button
            @click="scrollToContact"
            class="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
          >
            Discutons de votre projet
          </button>
        </div>
      </div>
    </div>

    <!-- Modal de détail du projet -->
    <Transition name="modal">
      <div
        v-if="selectedProject"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto"
        @click="selectedProject = null"
      >
        <div
          class="bg-surface max-w-4xl w-full rounded-2xl shadow-2xl transform transition-all duration-300 my-8"
          @click.stop
        >
          <div class="p-8">
            <!-- Header du modal -->
            <div class="flex items-start justify-between mb-6">
              <div class="flex-1">
                <h3 class="text-3xl font-bold text-primary mb-2">{{ selectedProject.title }}</h3>
                <p class="text-secondary text-lg">{{ selectedProject.description }}</p>
              </div>
              <button
                @click="selectedProject = null"
                class="ml-4 text-secondary hover:text-primary transition-colors p-2"
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

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <!-- Image du projet -->
              <div>
                <img
                  :src="selectedProject.image"
                  :alt="selectedProject.title"
                  class="w-full max-w-80 rounded-lg shadow-lg"
                />

                <!-- Actions -->
                <div class="flex space-x-4 mt-4">
                  <a
                    v-if="selectedProject.demoUrl"
                    :href="selectedProject.demoUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center px-4 py-3 rounded-lg font-medium transition-colors duration-200"
                  >
                    Voir la démo
                  </a>
                  <a
                    v-if="selectedProject.githubUrl"
                    :href="selectedProject.githubUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 bg-gray-800 hover:bg-gray-900 text-white text-center px-4 py-3 rounded-lg font-medium transition-colors duration-200"
                  >
                    Voir le code
                  </a>
                </div>
              </div>

              <!-- Détails du projet -->
              <div class="space-y-6">
                <!-- Technologies -->
                <div>
                  <h4 class="font-semibold text-primary mb-3">Technologies utilisées</h4>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tech in selectedProject.technologies"
                      :key="tech.name"
                      class="px-3 py-1 text-sm font-medium rounded-lg"
                      :style="{
                        backgroundColor: tech.color + '20',
                        color: tech.color,
                      }"
                    >
                      {{ tech.name }}
                    </span>
                  </div>
                </div>

                <!-- Fonctionnalités -->
                <div v-if="selectedProject.features">
                  <h4 class="font-semibold text-primary mb-3">Fonctionnalités principales</h4>
                  <ul class="space-y-2">
                    <li
                      v-for="feature in selectedProject.features"
                      :key="feature"
                      class="flex items-start"
                    >
                      <svg
                        class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span class="text-secondary">{{ feature }}</span>
                    </li>
                  </ul>
                </div>

                <!-- Défis et solutions -->
                <div v-if="selectedProject.challenges">
                  <h4 class="font-semibold text-primary mb-3">Défis relevés</h4>
                  <p class="text-secondary">{{ selectedProject.challenges }}</p>
                </div>

                <!-- Informations projet -->
                <div class="bg-surface-secondary p-4 rounded-lg">
                  <div class="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span class="font-medium text-primary">Durée:</span>
                      <span class="text-secondary ml-2">{{ selectedProject.duration }}</span>
                    </div>
                    <div>
                      <span class="font-medium text-primary">Statut:</span>
                      <span class="text-secondary ml-2">{{
                        statusLabels[selectedProject.status]
                      }}</span>
                    </div>
                    <div v-if="selectedProject.teamSize">
                      <span class="font-medium text-primary">Équipe:</span>
                      <span class="text-secondary ml-2">{{ selectedProject.teamSize }}</span>
                    </div>
                    <div>
                      <span class="font-medium text-primary">Type:</span>
                      <span class="text-secondary ml-2">{{ selectedProject.category }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script>
import { ref, computed } from 'vue'
import ProjectCard from '../ui/ProjectCard.vue'
import pwaImage from '@/assets/img/projects/pwa-project.png'
import tripflowImage from '@/assets/img/projects/tripflow-project.jpg'
import boxesImage from '@/assets/img/projects/boxes-project.png'

export default {
  name: 'ProjectsSection',
  components: {
    ProjectCard,
  },
  setup() {
    const activeFilter = ref('all')
    const selectedProject = ref(null)

    // Configuration des projets
    const projects = [
      {
        id: 1,
        title: 'Application de gestion de chantiers (FCV)',
        description:
          'Application web progressive avec Vue.js, Node.js et PostgreSQL pour la gestion de chantiers',
        category: 'Web App',
        status: 'inProgress',
        image: pwaImage,
        // demoUrl: "https://demo-pwa.example.com",
        // githubUrl: "https://github.com/username/pwa-project",
        duration: '9 mois',
        teamSize: 'En équipe (2 développeurs)',
        technologies: [
          { name: 'Vue.js', color: '#4FC08D' },
          { name: 'Node.js', color: '#339933' },
          { name: 'PostgreSQL', color: '#336791' },
          { name: 'Express.js', color: '#000000' },
          { name: 'JWT', color: '#000000' },
        ],
        features: [
          'Interface responsive et moderne',
          'Authentification JWT sécurisée',
          'Framework maison',
          'Base de données optimisée',
          'Mode hors-ligne (PWA)',
          'Tests unitaires avec Vitest',
        ],
        challenges:
          "Mise en place d'une architecture scalable avec gestion des états complexes et optimisation des performances pour une expérience utilisateur fluide.",
      },
      {
        id: 2,
        title: 'TripFlow',
        description:
          "Application mobile de planification et d'organisation de voyages développée avec React Native et Expo",
        category: 'Mobile App',
        status: 'completed',
        image: tripflowImage,
        githubUrl: 'https://github.com/SlyCatDev/tripflow',
        duration: '2 mois',
        teamSize: 'Solo',
        technologies: [
          { name: 'React Native', color: '#61DAFB' },
          { name: 'Expo', color: '#000020' },
          { name: 'Firebase', color: '#FFCA28' },
          { name: 'JavaScript', color: '#F7DF1E' },
          { name: 'React Navigation', color: '#6B52AE' },
        ],
        features: [
          'Authentification utilisateur sécurisée',
          'Création et gestion des voyages',
          'Organisation des activités par jour',
          'Gestion des budgets et dépenses',
          'Partage de voyages entre amis',
          'Mode hors-ligne avec synchronisation',
        ],
        challenges:
          "Développement d'une application mobile intuitive avec gestion de l'état complexe, synchronisation des données hors-ligne et optimisation des performances pour une expérience utilisateur fluide.",
      },
      {
        id: 3,
        title: 'Application de location de boxes de stockage',
        description:
          'Application web développée avec Laravel permettant aux propriétaires de gérer la mise en location de leurs boxes de stockage (suivi des locataires, contrats, paiements et factures).',
        category: 'Web App',
        status: 'completed',
        image: boxesImage,
        githubUrl: 'https://github.com/SlyCatDev/appli-location-box',
        duration: '2 mois',
        teamSize: 'Solo',
        technologies: [
          { name: 'Laravel', color: '#FF2D20' },
          { name: 'Tailwind CSS', color: '#06B6D4' },
          { name: 'MySQL', color: '#4479A1' },
          { name: 'Vite', color: '#646CFF' },
          { name: 'GitHub CI/CD', color: '#F7DF1E' },
        ],
        features: [
          'Authentification sécurisée pour les propriétaires',
          'Gestion des boxes (création, modification, disponibilité)',
          'Suivi des locataires et des contrats de location',
          'Suivi des paiements et génération automatique de factures',
          'Tableau de bord avec indicateurs clés',
          'Interface responsive et ergonomique',
        ],
        challenges:
          'Mettre en place une architecture robuste pour gérer plusieurs entités (boxes, propriétaires, locataires, contrats, paiements) tout en garantissant la sécurité des données et la simplicité d’utilisation.',
      },
    ]

    // const filters = [
    //   { label: 'Tous', value: 'all' },
    //   { label: 'Web App', value: 'Web App' },
    //   { label: 'CMS', value: 'CMS' },
    //   { label: 'Portfolio', value: 'Portfolio' }
    // ]

    const statusLabels = {
      completed: 'Terminé',
      inProgress: 'En cours',
      planned: 'Prévu',
    }

    // Projets filtrés
    const filteredProjects = computed(() => {
      if (activeFilter.value === 'all') {
        return projects
      }
      return projects.filter((project) => project.category === activeFilter.value)
    })

    // Compteur de projets par catégorie
    const getProjectCount = (filterValue) => {
      if (filterValue === 'all') {
        return projects.length
      }
      return projects.filter((project) => project.category === filterValue).length
    }

    const openProjectDetail = (project) => {
      selectedProject.value = project
    }

    const scrollToContact = () => {
      const element = document.getElementById('contact')
      if (element) {
        const headerHeight = 80
        const elementPosition = element.offsetTop - headerHeight

        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth',
        })
      }
    }

    return {
      projects,
      // filters,
      statusLabels,
      activeFilter,
      selectedProject,
      filteredProjects,
      getProjectCount,
      openProjectDetail,
      scrollToContact,
    }
  },
}
</script>

<style scoped>
/* Animation modal */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
