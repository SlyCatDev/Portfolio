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
              <span class="font-semibold text-primary-600 w-24">{{ info.label }}:</span>
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
      "Lors de mon parcours, j'ai été formée pendant deux ans aux fondamentaux du développement web (front-end et back-end), à la gestion de bases de données, au webdesign, ainsi qu'à la conduite de projets digitaux.",
      "Mon stage de fin de formation au sein d'une agence de communication m'a permis de mettre en pratique ces compétences sur un projet concret, de la conception au développement. Cette première immersion a confirmé mon intérêt pour le métier, et m'a permis de valider mon premier diplôme dans le domaine",
      "Par la suite, mon parcours professionnel m'a conduit à explorer d'autres secteurs. Mais avec le recul et une démarche de bilan de compétences, il est apparu que ma place était dans le développement web : un domaine en phase avec mes appétences, mes compétences, mes centres d'intérêt et mon envie de construire des solutions concrètes.",
      "C'est pourquoi j'ai décidé de reprendre ma formation en 2024 pour obtenir le titre professionnel de Concepteur Développeur d'Applications.",
      "Durant mon alternance, j'ai eu l'opportunité d'être affecté pendant neuf mois à la réalisation d'un projet, de sa conception à son déploiement. Cette expérience a été un vrai tremplin : elle m'a permis de consolider mes compétences techniques, de redécouvrir les réalités du métier sur le terrain, et d'aborder le développement web avec une vision plus globale et plus mature en milieu professionnel.",
    ]

    const personalInfo = [
      { label: 'Âge', value: '27 ans' },
      { label: 'Localisation', value: 'Angers, France' },
      { label: 'Formation', value: "Concepteur développeur d'applications" },
      { label: 'Langues', value: 'Français, Anglais (TOEIC 605pts)' },
    ]

    const stats = [
      { value: '2+', label: "Années d'expérience" },
      { value: '5+', label: 'Projets réalisés' },
      { value: '5+', label: 'Technologies maîtrisées' },
      { value: '100%', label: 'Passions' },
    ]

    const mainSkills = [
      { name: 'Vue.js' },
      { name: 'Tailwind CSS / Bootstrap' },
      { name: 'API REST' },
      { name: 'Node.js / Express' },
      { name: 'PostgreSQL / MySQL' },
      { name: 'Sequelize' },
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
