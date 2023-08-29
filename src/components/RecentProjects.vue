<script setup>
const projects = [
  {
    tag: 'Marketing Digital',
    logo: "../src/assets/images/hs-logo.png",
    title: "Waterford - Integracion del proyecto a Laravel",
    description: "Se migro de tecnología HTML hacía Laravel (PHP)",
    position: "Desarrollador Front-End",
    tools: ["HTML", "JavaScript", "Laravel", "PHP"],
    imageUrl: "https://placehold.co/500x400",
    theme: 'green'
  },
  // {
  //   tag: 'Marketing Digital',
  //   logo: "../src/assets/images/hs-logo.png",
  //   title: "Fantasma Films - Desarrollo en HTML e integracion con Wordpress",
  //   description: "Se desarrollo el sitio web en base a un prototipo proporcionado por el cliente. Al finalizar la codificación el sitio se integro con Wordpress.",
  //   position: "Desarrollador Front-End",
  //   tools: ["HTML", "CSS", "JavaScript", "Wordpress", "PHP"],
  //   imageUrl: "https://placehold.co/500x400",
  //   theme: 'green'
  // },
  // {
  //   tag: 'Ecommerce 2',
  //   logo: "../src/assets/images/hs-logo.png",
  //   title: "Crypto website development for DeFi 2",
  //   description: "The Time Traveller (for so it will be convenient to speak of him) was expounding a recondite matter to us.",
  //   position: "Desarrollador Front-End",
  //   tools: ["HubSpot", "HTML5", "JavaScript"],
  //   imageUrl: "https://placehold.co/500x400",
  //   theme: 'yellow'
  // },
  // {
  //   tag: 'Email Marketing 3',
  //   logo: "../src/assets/images/hs-logo.png",
  //   title: "Crypto website development for DeFi 3",
  //   description: "The Time Traveller (for so it will be convenient to speak of him) was expounding a recondite matter to us.",
  //   position: "Desarrollador Front-End",
  //   tools: ["HubSpot", "HTML5", "JavaScript"],
  //   imageUrl: "https://placehold.co/500x400",
  //   theme: 'purple'
  // },
  // Agrega más objetos de proyectos aquí...
];
</script>
<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import Flicking from "@egjs/vue3-flicking";
import { Arrow } from "@egjs/flicking-plugins";
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

    const MAIN_SECTION = document.querySelector('#RecentProjects');
    // animations
    let mm = gsap.matchMedia();
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

    // Plugins for Flicking
    this.plugins.push(
      // new Arrow(),
      // new Fade()
    );


    this.$refs.flicking.on('willChange', (e) => {
      let current_Project;
      let current_Theme;
      let custom_Class;

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


    let animateTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".RecentProjects",
        scrub: true,
        start: "top center",
        toggleActions: "play none none reverse",
      }
    });


    // Animation for h5
    category_h5_current = document.querySelector('.RecentProjects--project-data h5');
    title_h3_current = document.querySelector('.RecentProjects--project-data h3');
    description_current = document.querySelector('.RecentProjects--project-about p');
    project_details_current = document.querySelectorAll('.RecentProjects--project-details');
    project_pic_current = document.querySelector('.RecentProjects--project-pic img');

    gsap.set(category_h5_current, { opacity: 0, y: 95 });
    animateTL.to(category_h5_current, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: MAIN_SECTION.previousElementSibling,
        start: "20% 0",
        end: "70% 10%",
        scrub: 1
      }
    });

    gsap.set(title_h3_current, { opacity: 0, y: 120 });
    animateTL.to(title_h3_current, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: MAIN_SECTION.previousElementSibling,
        start: "20% 0",
        end: "70% 10%",
        scrub: 1
      }
    });
    // Project desc

    gsap.set(description_current, { opacity: 0, y: 160 });
    animateTL.to(description_current, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: MAIN_SECTION.previousElementSibling,
        start: "20% 0",
        end: "70% 10%",
        scrub: 1
      }
    });
    // Project details

    gsap.set(project_details_current, { opacity: 0, y: 200 });
    animateTL.to(project_details_current, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: MAIN_SECTION.previousElementSibling,
        start: "20% 0",
        end: "70% 10%",
        scrub: 1
      }
    });
    // Project picture
    gsap.set(project_pic_current, { y: 200 });
    animateTL.to(project_pic_current, {
      y: 0,
      scrollTrigger: {
        trigger: MAIN_SECTION.previousElementSibling,
        start: "20% 0",
        end: "70% 10%",
        scrub: 1
      }
    });


    // For desktop up to 960
    mm.add("(min-width: 960px)", () => {

      // Disabled input, just buttons
      // adjust for just disabled in desktop
      // need add ref="flicking" on template      
      this.$refs.flicking.disableInput();
      this.$refs.flicking.duration = 750;


      // Cuando empieza a cambiar
      this.$refs.flicking.on('moveStart', (e) => {

        switch (e.direction) {
          case 'NEXT':
            category_h5_previous = e.currentTarget.getPanel((e.currentTarget.index + 1)).element.querySelector('h5');
            title_h3_previous = e.currentTarget.getPanel((e.currentTarget.index + 1)).element.querySelector('h3');
            description_previous = e.currentTarget.getPanel((e.currentTarget.index + 1)).element.querySelector('.RecentProjects--project-about p');
            project_details_previous = e.currentTarget.getPanel((e.currentTarget.index + 1)).element.querySelectorAll('.RecentProjects--project-details');
            project_pic_previous = e.currentTarget.getPanel((e.currentTarget.index + 1)).element.querySelectorAll('.RecentProjects--project-pic img');
            break;
          case 'PREV':
            category_h5_previous = e.currentTarget.getPanel((e.currentTarget.index - 1)).element.querySelector('h5');
            title_h3_previous = e.currentTarget.getPanel((e.currentTarget.index - 1)).element.querySelector('h3');
            description_previous = e.currentTarget.getPanel((e.currentTarget.index - 1)).element.querySelector('.RecentProjects--project-about p');
            project_details_previous = e.currentTarget.getPanel((e.currentTarget.index - 1)).element.querySelectorAll('.RecentProjects--project-details');
            project_pic_previous = e.currentTarget.getPanel((e.currentTarget.index - 1)).element.querySelectorAll('.RecentProjects--project-pic img'); break;
          default:
            break;
        };

        // Animation for h5
        category_h5_current = e.currentTarget.getPanel((e.currentTarget.index)).element.querySelector('h5');
        gsap.set(category_h5_current, { opacity: 0 });
        gsap.fromTo(category_h5_previous, { y: 95, opacity: 0 }, { y: 0, opacity: 1, duration: .850 });
        // Animation for h3
        title_h3_current = e.currentTarget.getPanel((e.currentTarget.index)).element.querySelector('h3');
        gsap.set(title_h3_current, { opacity: 0 });
        gsap.fromTo(title_h3_previous, { y: 85, opacity: 0 }, { y: 0, opacity: 1, duration: .950 });
        // Project desc
        description_current = e.currentTarget.getPanel((e.currentTarget.index)).element.querySelector('.RecentProjects--project-about p');
        gsap.set(description_current, { opacity: 0 });
        gsap.fromTo(description_previous, { y: 65, opacity: 0 }, { y: 0, opacity: 1, duration: 1.05 });
        // Project details
        project_details_current = e.currentTarget.getPanel((e.currentTarget.index)).element.querySelectorAll('.RecentProjects--project-details');
        gsap.set(project_details_current, { opacity: 0 });
        gsap.fromTo(project_details_previous, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.15 });
        // Project picture
        project_pic_current = e.currentTarget.getPanel((e.currentTarget.index)).element.querySelector('.RecentProjects--project-pic img');
        // gsap.set(project_pic_current, { opacity: 0 });
        gsap.fromTo(project_pic_previous, { y: 200 }, { opacity: 1, y: 0, duration: .650 });
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
          <!-- <template #viewport>
            <div class="arrows-container">
              <span class="arrowfli flicking-arrow-prev is-circle"></span>
              <span @click="startAnim" class="arrowfli flicking-arrow-next is-circle"></span>
            </div>
          </template> -->
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
                  <!-- <a href="#!">Continuar leyendo...</a> -->
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