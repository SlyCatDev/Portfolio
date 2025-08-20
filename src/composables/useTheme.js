import { ref, watch, onMounted } from 'vue'

// État réactif du thème, partagé dans toute l'app
const isDark = ref(false)

export function useTheme() {
  
  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  // Fonction pour appliquer le thème au DOM
  const applyTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  // Fonction pour initialiser le thème au chargement
  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark.value = savedTheme === 'dark' || (!savedTheme && prefersDark)
    applyTheme()
  }

  watch(isDark, applyTheme)

  onMounted(initTheme)

  return {
    isDark,
    toggleTheme
  }
}