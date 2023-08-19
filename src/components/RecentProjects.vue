<script setup>
  const projects = [
    {
      tag: 'Marketing Digital',
      logo: "../src/assets/images/hs-logo.png",
      title: "Crypto website development for DeFi X",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quis beatae unde illum ipsum voluptas voluptatum veniam facilis iste, ut quo magni illo culpa. Explicabo cum earum commodi quo excepturi!",
      position: "Desarrollador Front-End",
      tools: ["HubSpot", "HTML5", "JavaScript"],
      imageUrl: "https://placehold.co/500x400"
    },
    {
      tag: 'Ecommerce',
      logo: "../src/assets/images/hs-logo.png",
      title: "Crypto website development for DeFi X",
      description: "The Time Traveller (for so it will be convenient to speak of him) was expounding a recondite matter to us.",
      position: "Desarrollador Front-End",
      tools: ["HubSpot", "HTML5", "JavaScript"],
      imageUrl: "https://placehold.co/500x400"
    },
    {
      tag: 'Email Marketing',
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
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);

  import Flicking from "@egjs/vue3-flicking";
  import { Fade, Arrow } from "@egjs/flicking-plugins";
  import "@egjs/flicking-plugins/dist/arrow.css";

  export default {
    components: {
      Flicking,
      gsap,
      ScrollTrigger,
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
          circular: false
        },
      }
    },
    methods: {

      addEfecttIn() {
        // gsap.set('.RecentProjects--project-data', { x: 20 });
        // gsap.to('.RecentProjects--project-data', {
        //   x: 0,
        //   opacity: 1,
        //   ease: "none",
        //   duration: 1,
        // });
        // gsap.set('.RecentProjects--project-pic', { x: -20 });
        // gsap.to('.RecentProjects--project-pic', {
        //   x: 0,
        //   opacity: 1,
        //   ease: "none",
        //   duration: 1,
        // });
      }

    },
    mounted() {

      this.plugins.push(
        // new Arrow(),
        new Fade()
      );

      // Deshabilitar drag on flicking carousel
      // need add ref="flicking" on template
      this.$refs.flicking.on('holdStart', (e) => {
        // e.stop();
      });


      // animations
      let mm = gsap.matchMedia();
      // let animateEl = document.querySelectorAll('.RecentProjects--project-data');
      // let triggerEl = animateEl;
      // For dekstop
      mm.add("(min-width: 600px)", () => {
        // gsap.set('.RecentProjects--project-data', { x: 20, opacity: 0 });
        // gsap.to(animateEl, {
        //   x: 0,
        //   opacity: 1,
        //   ease: "none",
        //   duration: 1,
        //   scrollTrigger: {
        //     // markers: true,
        //     start: "top 0%",
        //     end: "50% 50%",
        //     trigger: triggerEl.previousElementSibling,
        //     scrub: false,
        //   },
        // });
        // gsap.set('.RecentProjects--project-pic', { x: -20, opacity: 0 });
        // gsap.to('.RecentProjects--project-pic', {
        //   x: 0,
        //   opacity: 1,
        //   ease: "none",
        //   duration: 1,
        //   scrollTrigger: {
        //     // markers: true,
        //     start: "top 0%",
        //     end: "50% 50%",
        //     trigger: triggerEl.previousElementSibling,
        //     scrub: false,
        //   },
        // });
      });


    }

  }
</script>
<template>
  <section class="RecentProjects theme-color" id="RecentProjects">
    <!-- <h2 class="text-center">Proyectos Recientes</h2> -->
    <div class="o-container">
      <div class="o-grid-row">
        <Flicking ref="flicking" :options="options" :plugins="plugins" id="carrusel2" >
      <!-- <template #viewport>
        <div class="arrows-container">
          <span class="arrowfli flicking-arrow-prev is-circle"></span>
          <span @click="addEfecttIn" class="arrowfli flicking-arrow-next is-circle"></span>
        </div>
      </template> -->
      <div v-for="(project, index) in projects" :key="index" class="panel col size-12">
        <div class="RecentProjects--project">
          <div class="RecentProjects--project-data">
            <h5>{{ project.tag }}</h5>
            <h3>{{ project.title }}</h3>
            <div class="RecentProjects--project-details">
              <h4>Puesto</h4>
              <p><span>></span> {{ project.position }}</p>
            </div>
          </div>
          <div class="RecentProjects--project-pic">
            <img :src="project.imageUrl" alt="Carrusel" class="img-full-responsive">
          </div>
          <div class="RecentProjects--project-about">
            <p>
              {{  project.description  }}
              <a href="#!">Continuar leyendo...</a>
            </p>
            <div class="RecentProjects--project-details">
              <h4>Herramientas / Tecnologias</h4>
              <span v-for="(tool, i) in project.tools" :key="i" class="badge">
                {{ tool }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Flicking>        
      </div>
    </div>


    <!-- <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br> -->


  </section>
</template>
<style lang="sass">
  @import "@/assets/sass/components/RecentProjects.sass"
</style>