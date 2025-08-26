<template>
  <div class="project-card group cursor-pointer fade-in-up">
    <div class="bg-surface-secondary rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden">
      <!-- Image du projet -->
      <div class="relative overflow-hidden">
        <img 
          :src="project.image" 
          :alt="project.title"
          class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <!-- Overlay avec boutons d'action -->
        <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <a 
            v-if="project.demoUrl"
            :href="project.demoUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
            @click.stop
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span>Demo</span>
          </a>
          
          <a 
            v-if="project.githubUrl"
            :href="project.githubUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            class="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
            @click.stop
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>Code</span>
          </a>
        </div>

        <!-- Badge de statut -->
        <div class="absolute top-4 left-4">
          <span 
            class="px-3 py-1 rounded-full text-xs font-medium"
            :class="statusClasses[project.status]"
          >
            {{ statusLabels[project.status] }}
          </span>
        </div>
      </div>

      <!-- Contenu de la carte -->
      <div class="p-6">
        <!-- Titre et catégorie -->
        <div class="mb-4">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-base font-bold text-primary group-hover:text-primary-600 transition-colors duration-300">
              {{ project.title }}
            </h3>
            <span class="text-xs text-secondary bg-surface px-2 py-1 rounded-full">
              {{ project.category }}
            </span>
          </div>
          <p class="text-secondary text-sm leading-relaxed">
            {{ project.description }}
          </p>
        </div>

        <!-- Technologies utilisées -->
        <div class="mb-4">
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tech in project.technologies" 
              :key="tech.name"
              class="px-2 py-1 text-xs font-medium rounded-md"
              :style="{ 
                backgroundColor: tech.color + '20', 
                color: tech.color 
              }"
            >
              {{ tech.name }}
            </span>
          </div>
        </div>

        <!-- Métriques du projet -->
        <div class="flex items-center justify-between text-sm text-secondary">
          <div class="flex items-center space-x-4">
            <span class="flex items-center">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ project.duration }}
            </span>
            <span v-if="project.teamSize" class="flex items-center">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
              {{ project.teamSize }}
            </span>
          </div>
          <button 
            @click="$emit('openDetail', project)"
            class="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
          >
            Voir plus →
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  emits: ['openDetail'],
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  setup() {
    const statusClasses = {
      completed: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
      inProgress: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
      planned: 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'
    }

    const statusLabels = {
      completed: 'Terminé',
      inProgress: 'En cours',
      planned: 'Prévu'
    }

    return {
      statusClasses,
      statusLabels
    }
  }
}
</script>