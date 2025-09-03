<template>
  <section id="about" class="py-20 bg-surface-secondary">
    <div class="container mx-auto px-4">
      <!-- Titre de section -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-primary mb-4 fade-in-up">À propos de moi</h2>
        <div
          class="w-24 h-1 bg-primary-600 mx-auto rounded fade-in-up"
          style="animation-delay: 0.2s"
        ></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Texte de présentation -->
        <div class="fade-in-up" style="animation-delay: 0.3s">
          <h3 class="text-2xl md:text-3xl font-semibold text-primary mb-6">
            {{ aboutTitle }}
          </h3>

          <div class="space-y-4 text-secondary text-lg leading-relaxed">
            <p v-for="(paragraph, index) in aboutText" :key="index">
              {{ paragraph }}
            </p>
          </div>

          <!-- Informations personnelles -->
          <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div v-for="info in personalInfo" :key="info.label" class="flex items-center">
              <span class="font-semibold text-primary-600 w-26">{{ info.label }}:</span>
              <span class="text-secondary">{{ info.value }}</span>
            </div>
          </div>
        </div>

        <!-- Statistiques et compétences clés -->
        <div class="fade-in-up" style="animation-delay: 0.5s">
          <!-- Statistiques -->
          <div class="grid grid-cols-2 gap-6 mb-8">
            <div v-for="stat in stats" :key="stat.label" class="text-center">
              <div
                class="bg-surface p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div class="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {{ stat.value }}
                </div>
                <div class="text-secondary font-medium">
                  {{ stat.label }}
                </div>
              </div>
            </div>
          </div>

          <!-- Compétences principales -->
          <div class="bg-surface p-6 rounded-xl shadow-lg">
            <h4 class="text-xl font-semibold text-primary mb-4">Domaines d'expertise</h4>
            <div class="space-y-3">
              <div v-for="skill in mainSkills" :key="skill.name">
                <div class="flex items-center mb-1">
                  <span class="text-secondary font-medium">{{ skill.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Timeline/Parcours -->
      <div class="mt-20 fade-in-up" style="animation-delay: 0.7s">
        <h3 class="text-3xl font-bold text-center text-primary mb-12">Mon parcours</h3>
        <div class="max-w-4xl mx-auto">
          <div class="relative">
            <div v-for="(item, index) in timeline" :key="index" class="mb-8">
              <div class="bg-surface p-6 rounded-lg shadow-lg">
                <div class="text-primary-600 font-semibold text-sm mb-1">{{ item.period }}</div>
                <h4 class="text-xl font-bold text-primary mb-2">{{ item.title }}</h4>
                <ul class="list-disc list-inside space-y-2 text-secondary">
                  <li v-for="(desc, i) in item.description" :key="i">{{ desc }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  setup() {
    const aboutTitle =
      "Développeur passionné par l'humain et l'envie de créer des solutions tournées vers l'avenir"

    const aboutText = [
      "Fraîchement diplômé et spécialisé en conception/développement d’applications web (front-end et back-end), je maîtrise divers frameworks et méthodologies agiles.",
      "Mon parcours, marqué par une alternance et des projets en agence, m’a permis d’acquérir une expérience concrète, de la conception au déploiement, en passant par le design et la gestion de projet.",
      "Passionné par les défis et la résolution de problèmes, je cultive aussi mes compétences en musculation (10 ans de pratique en salle), en escape games (plus de 30 réalisés), en jeux vidéo action-aventure, et j’aime explorer de nouvelles cultures à travers le voyage. Ces expériences renforcent ma persévérance, mon esprit d’équipe et ma capacité à m’adapter à des environnements variés.",
    ]

    const personalInfo = [
      { label: 'Âge', value: '27 ans' },
      { label: 'Localisation', value: 'Angers, France' },
      { label: 'Formation', value: "Concepteur développeur d'applications" },
      { label: 'Langues', value: 'Français, Anglais' },
    ]

    const stats = [
      { value: '2+', label: "Années d'expérience" },
      { value: '5+', label: 'Projets réalisés' },
      { value: '5+', label: 'Technologies maîtrisées' },
      { value: '100%', label: 'Passions' },
    ]

    const mainSkills = [
      { name: 'Vue.js / React' },
      { name: 'Tailwind CSS / Bootstrap' },
      { name: 'Node.js / Express' },
      { name: 'PostgreSQL / MySQL' },
      { name: 'Git' },
    ]

    const timeline = [
      {
        period: '2024 - 2025',
        title: "Formation Concepteur Développeur d'Applications",
        description: [
          "Réalisation d'un projet concret sur 9 mois en alternance",
          "Développement d'applications web modernes avec Vue.js, Node.js et PostgreSQL",
          'Mise en pratique des méthodologies agiles',
          'Gestion de projet de la conception au déploiement',
        ],
      },
      {
        period: '2018 - 2024',
        title: 'Reconversion et bilan de compétences',
        description: [
          "Expérience enrichissante dans différents secteurs d'activité",
          'Développement de compétences transversales en communication',
          'Amélioration des compétences en gestion de la relation client',
          'Période de réflexion aboutissant au retour vers le développement web',
        ],
      },
      {
        period: '2016 - 2018',
        title: "DEUST Webmaster et métiers de l'internet",
        description: [
          'Formation aux fondamentaux du développement web (front-end, back-end)',
          'Apprentissage des bases de données et du webdesign',
          'Formation à la conduite de projets digitaux',
          "Stage en agence de communication avec réalisation d'un projet concret",
        ],
      },
    ]

    return {
      aboutTitle,
      aboutText,
      personalInfo,
      stats,
      mainSkills,
      timeline,
    }
  },
}
</script>
