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
<script>
import Flicking from "@egjs/vue3-flicking";
import { Fade, Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";

export default {
  components: {
    Flicking
  },

  data() {
    return {
      plugins: [],
      options: {
        panelsPerView: 1,
        bounce: "25%",
        bound: true,
        interruptable: false,
        moveType: "strict",
        circular: false,
      },
    }
  },
  mounted() {
    this.plugins.push(
      new Arrow(),
      new Fade()
    );
  },
}
</script>
<template>
  <section class="RecentProjects" id="RecentProjects">
    <div class="o-container-fluid">
      <h2 class="text-center">Proyectos Recientes</h2>
      <div class="o-grid-row">
        <Flicking :options="options" :plugins="plugins" id="carrusel2">
          <template #viewport>
            <div class="arrows-container">
              <span class="arrowfli flicking-arrow-prev is-circle"></span>
              <span class="arrowfli flicking-arrow-next is-circle"></span>
            </div>
          </template>
          <div v-for="(project, index) in projects" :key="index" class="panel col size-12">
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

        </Flicking>
      </div>
    </div>
  </section>
</template>
<style lang="sass">
@import "@/assets/sass/components/RecentProjects.sass"
</style>