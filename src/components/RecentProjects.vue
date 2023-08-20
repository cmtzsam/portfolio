<script setup>
const projects = [
  {
    tag: 'Marketing Digital 1',
    logo: "../src/assets/images/hs-logo.png",
    title: "Crypto website development for DeFi 1",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quis beatae unde illum ipsum voluptas voluptatum veniam facilis iste, ut quo magni illo culpa. Explicabo cum earum commodi quo excepturi!",
    position: "Desarrollador Front-End",
    tools: ["HubSpot", "HTML5", "JavaScript"],
    imageUrl: "https://placehold.co/500x400",
    theme: 'green'
  },
  {
    tag: 'Ecommerce 2',
    logo: "../src/assets/images/hs-logo.png",
    title: "Crypto website development for DeFi 2",
    description: "The Time Traveller (for so it will be convenient to speak of him) was expounding a recondite matter to us.",
    position: "Desarrollador Front-End",
    tools: ["HubSpot", "HTML5", "JavaScript"],
    imageUrl: "https://placehold.co/500x400",
    theme: 'yellow'
  },
  {
    tag: 'Email Marketing 3',
    logo: "../src/assets/images/hs-logo.png",
    title: "Crypto website development for DeFi 3",
    description: "The Time Traveller (for so it will be convenient to speak of him) was expounding a recondite matter to us.",
    position: "Desarrollador Front-End",
    tools: ["HubSpot", "HTML5", "JavaScript"],
    imageUrl: "https://placehold.co/500x400",
    theme: 'purple'
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
  mounted() {

    // Plugins for Flicking
    this.plugins.push(
      new Arrow(),
      // new Fade()
    );


    this.$refs.flicking.on('moveStart', (e) => {
      const MAIN_SECTION = document.querySelector('#RecentProjects');
      let current_Panel = e.currentTarget.currentPanel;
      let current_Project;
      let current_Theme;
      let custom_Class ;

      MAIN_SECTION.classList.contains('theme-green') && MAIN_SECTION.classList.remove('theme-green')
      MAIN_SECTION.classList.contains('theme-yellow') && MAIN_SECTION.classList.remove('theme-yellow')
      MAIN_SECTION.classList.contains('theme-purple') && MAIN_SECTION.classList.remove('theme-purple')

      switch (e.direction) {
          case 'NEXT':
            current_Project = e.currentTarget.currentPanel.next().element.querySelector('.RecentProjects--project');
            current_Theme = current_Project.querySelector('span.theme').textContent;
            custom_Class = `theme-${current_Theme}`;
            MAIN_SECTION.classList.add(custom_Class);
            break;
          case 'PREV':
            current_Project = e.currentTarget.currentPanel.prev().element.querySelector('.RecentProjects--project');
            current_Theme = current_Project.querySelector('span.theme').textContent;
            custom_Class = `theme-${current_Theme}`;
            MAIN_SECTION.classList.add(custom_Class);      
          default:
            break;
        };


    });




    // animations
    let mm = gsap.matchMedia();
    // For desktop up to 960
    mm.add("(min-width: 960px)", () => {

      // var and const
      let category_h5_current;
      let category_h5_previous;
      let title_h3_current;
      let title_h3_previous;
      let description_current;
      let description_previous;
      let project_details_current;
      let project_details_previous;
      let project_pic_current;
      let project_pic_previous;

      // Disabled input, just buttons
      // adjust for just disabled in desktop
      // need add ref="flicking" on template      
      this.$refs.flicking.disableInput();
      this.$refs.flicking.duration = 2000;

      // Cuando empieza a cambiar
      this.$refs.flicking.on('moveStart', (e) => {

        switch (e.direction) {
          case 'NEXT':
            category_h5_previous = e.currentTarget.getPanel((e.currentTarget.index + 1)).element.querySelector('h5');
            title_h3_previous = e.currentTarget.getPanel((e.currentTarget.index + 1)).element.querySelector('h3');
            description_previous = e.currentTarget.getPanel((e.currentTarget.index + 1)).element.querySelector('.RecentProjects--project-about p');
            project_details_previous = e.currentTarget.getPanel((e.currentTarget.index + 1)).element.querySelectorAll('.RecentProjects--project-details');
            project_pic_previous = e.currentTarget.getPanel((e.currentTarget.index + 1)).element.querySelectorAll('.RecentProjects--project-pic');
            break;
          case 'PREV':
            category_h5_previous = e.currentTarget.getPanel((e.currentTarget.index - 1)).element.querySelector('h5');
            title_h3_previous = e.currentTarget.getPanel((e.currentTarget.index - 1)).element.querySelector('h3');
            description_previous = e.currentTarget.getPanel((e.currentTarget.index - 1)).element.querySelector('.RecentProjects--project-about p');
            project_details_previous = e.currentTarget.getPanel((e.currentTarget.index - 1)).element.querySelectorAll('.RecentProjects--project-details');
            project_pic_previous = e.currentTarget.getPanel((e.currentTarget.index - 1)).element.querySelectorAll('.RecentProjects--project-pic'); break;
          default:
            break;
        };

        // Animation for h5
        category_h5_current = e.currentTarget.getPanel((e.currentTarget.index)).element.querySelector('h5');
        gsap.fromTo(category_h5_current, { y: 0, opacity: 1 }, { y: -100, opacity: 0, duration: 1.05 });
        gsap.fromTo(category_h5_previous, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.05 });
        // Animation for h3
        title_h3_current = e.currentTarget.getPanel((e.currentTarget.index)).element.querySelector('h3');
        gsap.fromTo(title_h3_current, { y: 0, opacity: 1 }, { y: -115, opacity: 0, duration: 1.25 });
        gsap.fromTo(title_h3_previous, { y: -115, opacity: 0 }, { y: 0, opacity: 1, duration: 1.25 });
        // Project desc
        description_current = e.currentTarget.getPanel((e.currentTarget.index)).element.querySelector('.RecentProjects--project-about p');
        gsap.fromTo(description_current, { y: 0, opacity: 1 }, { y: -120, opacity: 0, duration: 1.5 });
        gsap.fromTo(description_previous, { y: -120, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5 });
        // Project details
        project_details_current = e.currentTarget.getPanel((e.currentTarget.index)).element.querySelectorAll('.RecentProjects--project-details');
        gsap.fromTo(project_details_current, { y: 0, opacity: 1 }, { y: 100, opacity: 0, duration: 1.5 });
        gsap.fromTo(project_details_previous, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5 });
        // Project picture
        project_pic_current = e.currentTarget.getPanel((e.currentTarget.index)).element.querySelector('.RecentProjects--project-pic');
        gsap.fromTo(project_pic_current, { opacity: 1 }, { opacity: 0, duration: 1.1 });
        gsap.fromTo(project_pic_previous, { opacity: 0 }, { opacity: 1, duration: 1.1 });
      });
    });


  }

}
</script>
<template>
  <section class="RecentProjects theme-color" id="RecentProjects">
    <!-- <h2 class="text-center">Proyectos Recientes</h2> -->
    <div class="o-container">
      <div class="o-grid-row">

        <!-- <div class="flechas">
          <p @click="prevPanel" style="color: white;">Antes</p>
          <p @click="nextPanel" style="color: white;">Siguiente</p>
        </div> -->

        <Flicking ref="flicking" :options="options" :plugins="plugins" id="carrusel2">
          <template #viewport>
            <div class="arrows-container">
              <span class="arrowfli flicking-arrow-prev is-circle"></span>
              <span @click="startAnim" class="arrowfli flicking-arrow-next is-circle"></span>
            </div>
          </template>
          <div v-for="(project, index) in projects" :key="index" class="panel col size-12">
            <div class="RecentProjects--project">
              <div class="RecentProjects--project-data">
                <h5>{{ project.tag }}</h5>
                <h3>{{ project.title }}</h3>
                <span class="theme" style="display: none!important;">{{ project.theme }}</span>
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
                  {{ project.description }}
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