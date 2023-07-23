<script setup>
const projects = [
  {
    logo: "../src/assets/images/hs-logo.png",
    title: "Crypto website development for DeFi X",
    description: "The Time Traveller (for so it will be convenient to speak of him) was expounding a recondite matter to us.",
    position: "Desarrollador Front-End",
    tools: ["HubSpot", "HTML5", "JavaScript"],
    imageUrl: "https://placehold.co/500x400"
  },
  {
    logo: "../src/assets/images/hs-logo.png",
    title: "Crypto website development for DeFi X",
    description: "The Time Traveller (for so it will be convenient to speak of him) was expounding a recondite matter to us.",
    position: "Desarrollador Front-End",
    tools: ["HubSpot", "HTML5", "JavaScript"],
    imageUrl: "https://placehold.co/500x400"
  },
  {
    logo: "../src/assets/images/hs-logo.png",
    title: "Crypto website development for DeFi X",
    description: "The Time Traveller (for so it will be convenient to speak of him) was expounding a recondite matter to us.",
    position: "Desarrollador Front-End",
    tools: ["HubSpot", "HTML5", "JavaScript"],
    imageUrl: "https://placehold.co/500x400"
  },
  // Agrega más objetos de proyectos aquí...
];
</script>
<template>
  <section class="RecentProjects" id="RecentProjects">
    <div class="o-container">
      <h2 class="text-center">Proyectos Recientes</h2>
      <div class="o-grid-row">
        <div v-for="(project, index) in projects" :key="index" class="col size-12">
          <div class="RecentProjects--project">
            <div class="RecentProjects--project-data">
              <div class="RecentProjects--project-logo">
                <img :src="project.logo" alt="Logo" class="img-responsive">
              </div>
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="RecentProjects--project-details">
                <h4>Puesto</h4>
                <p><span>></span> {{ project.position }}</p>
                <h4>Herramientas / Tecnologias</h4>
                <span v-for="(tool, i) in project.tools" :key="i" class="badge">
                  {{ tool }}
                </span>
              </div>
            </div>
            <div class="RecentProjects--project-pic">
              <img :src="project.imageUrl" alt="Carrusel" class="img-full-responsive">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="sass">
@import "@/assets/sass/components/RecentProjects.sass"
</style>