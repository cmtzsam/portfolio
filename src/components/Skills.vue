<script setup >
import ArrowRight from './svg/arrowright.vue'
</script>
<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      skills: [
        {
          image: "../src/assets/images/skill-img.jpg",
          titulo: 'Desarrollo web para Marketing digital',
          description: 'Desarrollo de landings page, sitios web e integración de plataformas.',
          linkTo: 'about',
          footerImage: 'https://placehold.co/40x40'
        },
        {
          image: '../src/assets/images/skill-img.jpg',
          titulo: 'Desarrollo web para Ecommerce',
          description: 'Carga de productos, ajustes de contenido, soluciones a la medida y desarrollo de plantillas.',
          linkTo: 'about',
          footerImage: 'https://placehold.co/40x40'
        },
        {
          image: '../src/assets/images/skill-img.jpg',
          titulo: 'Desarrollo web para Email Marketing',
          description: 'Construccion de plantillas en código HTML para correos electrónicos.',
          linkTo: 'about',
          footerImage: 'https://placehold.co/40x40'
        }
      ]
    }
  },
  components: {
    gsap,
    ScrollTrigger,
  },
  mounted() {
    
    const skill_el = document.querySelectorAll(".Skills--card");

    let animateTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".HeroBanner",
        scrub: true,
        start: "top center",
        toggleActions: "play none none reverse",
      }
    });

    // animations
    let mm = gsap.matchMedia();
    // For dekstop
    mm.add("(min-width: 960px)", () => {
      animateTL.to(skill_el, {
        y: -70,
        scrollTrigger: {
          // markers: true,
          start: '50% 5%',
          end: '100% 10%',
          trigger: document.querySelector('.Skills').previousElementSibling,
          scrub: true
        },
      });    
    });
    // mm.add("(max-width: 960px)", () => {
      // Array.from( skill_el ).forEach( (skill, index = 1) => {
        // gsap.set( skill, { opacity: 0, x: "100" + (index * 10) + "%" } )
        // gsap.set( skill, { opacity: 0, x: "100%" } )
        // animateTL.to(skill, {
        //   x: 0,
        //   opacity: 1,
        //   scrollTrigger: {
        //     start: '-50% 0',
        //     end: '-20% 0',
        //     trigger: skill,
        //     scrub: true,
        //   },
        // });    
      // });
    // });
  },
  methods: {
    cardActive(card) {
      const currentCard = card.currentTarget;
      // Remove the class `card-active` from all of the other cards.
      const otherCards = document.querySelectorAll('.Skills--card');
      for (const otherCard of otherCards) {
        otherCard.classList.remove('card-active');
      }
      // Check if the class `card-active` is already applied to the current card.
      if (!currentCard.classList.contains('card-active')) {
        // Add the class `card-active` to the current card.
        currentCard.classList.add('card-active');
      }
    },

    cardInactive(card) {
      // const currentCard = card.currentTarget;
      // Remove the class `card-active` from all of the other cards.
      const otherCards = document.querySelectorAll('.Skills--card');
      for (const otherCard of otherCards) {
        otherCard.classList.remove('card-active');
      }
    }    

  }
};
</script>
<template>
  <section class="Skills theme-dark">
    <div class="o-container">
      <h2 class="text-center">Brindo soluciones en</h2>
      <div class="Skills--cards-container">
        <div class="o-grid-row row-center">
          <!-- For Skills -->
          <div v-for="(skill, index) in skills" :key="index" class="col size-xs-12 size-sm-6 size-4">

            <div class="Skills--card" @touchstart="cardActive" @mouseenter="cardActive" @mouseleave="cardInactive">

              <img :src="skill.image" :alt="skill.titulo" />
              <div class="Skills--card-desc">
                <div class="Skills--card-title">
                  {{ skill.titulo }}
                </div>
                <div class="Skills--card-more">
                  Ver más
                </div>
              </div>
              <div class="Skills--card-body">
                <span>
                  {{ skill.description }}
                </span>
                <!-- <router-link v-if="skill.linkTo" :to="skill.linkTo" class="link">
                  Continuar leyendo
                  <ArrowRight />
                </router-link> -->
              </div>

              <!-- <div class="Skills--card-body">
              </div>

              <div class="Skills--card-sideText ">
                <h3>{{ skill.titulo }}</h3>
                <span>Ver más</span>
              </div> -->

            </div>

          </div>
          <!-- End for skills -->
        </div>
      </div>
      <!-- <router-link to="/about" class="o-btn md-btn btn-outline"><span>></span> Ver todas las habilidades</router-link> -->
    </div>
  </section>
</template>
<style lang="sass">
@import "@/assets/sass/components/Skills.sass"
</style>