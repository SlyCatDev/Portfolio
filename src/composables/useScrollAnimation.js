import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const animatedElements = ref([])

  const observeElements = () => {
    const elements = document.querySelectorAll('.fade-in-up')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running'
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      },
    )
    // fade-in-up
    elements.forEach((element) => {
      element.style.animationPlayState = 'paused'
      observer.observe(element)
    })

    return observer
  }

  onMounted(() => {
    setTimeout(() => {
      const observer = observeElements()
      animatedElements.value.push(observer)
    }, 100)
  })

  onUnmounted(() => {
    animatedElements.value.forEach((observer) => {
      observer.disconnect()
    })
  })

  return {
    observeElements,
  }
}
