<script setup>
import BannerHeroDots from "./svg/herobanner-dots.vue";
import ArrowRight from "./svg/ArrowRight.vue";
import LoadScreen from "./LoadScreen.vue"
</script>

<script>
import Flicking from "@egjs/vue3-flicking";
import { Pagination, AutoPlay } from "@egjs/flicking-plugins";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    Flicking,
    gsap,
    ScrollTrigger,
    LoadScreen
  },

  data() {
    return {
      plugins: [],
      options: {
        panelsPerView: 1,
        align: "center",
        bounce: "0",
        bound: false,
        renderOnlyVisible: false,
        duration: 1000,
        useFractionalSize: false,
        interruptable: false,
        moveType: "strict",
        circular: true,
      },
      isLoading: true,
      // blink text
            
    }
  },
  mounted() {
    // Add Pagination plugin to the plugins array
    this.plugins.push(
      new AutoPlay({ duration: 3000, direction: "NEXT", stopOnHover: false }),
      new Pagination({ type: "scroll", renderBullet: this.renderBullet })
    );

    document.querySelector('body').style.overflow = 'hidden';

    // animations
    let mm = gsap.matchMedia();
    const text_to_left = document.querySelectorAll('.HeroBanner h1 span.toleft');
    const text_to_right = document.querySelectorAll('.HeroBanner h1 span.toright');
    const carousel_el = document.querySelector('.HeroBanner--carousel');
    const text_desc_p = document.querySelector('.HeroBanner--text p');
    const text_desc_arrow = document.querySelector('.HeroBanner--text .arrow-down');
    
    let animateTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".HeroBanner",
        scrub: true,
        start: "top center",
        toggleActions: "play none none reverse",
      }
    });

    // For dekstop
    mm.add("(min-width: 960px)", () => {
      gsap.fromTo( text_to_left, { opacity: 0 }, { opacity: 1, duration: .9 } )
      gsap.fromTo( text_to_right, { opacity: 0 }, { opacity: 1, duration: .9 } )
      gsap.fromTo( carousel_el, { x: 20 }, { x: 0, opacity: 1, duration: 1.1 } )
      gsap.fromTo( text_desc_p, { x: -20, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 1.1 } )
      gsap.fromTo( text_desc_arrow, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 } )

      animateTL.to(text_to_left, {
        x: -100,
        scrollTrigger: {
          start: '0 0',
          end: '150 10',
          trigger: '.HeroBanner',
          scrub: 1
        },
      });
      animateTL.to(text_to_right, {
        x: 100,
        scrollTrigger: {
          start: '0 0',
          end: '150 10',
          trigger: '.HeroBanner',
          scrub: 1
        },
      });
      animateTL.to([text_desc_p,text_desc_arrow], {
        y: -15,
        scrollTrigger: {
          start: '0 0',
          end: '150 10',
          trigger: '.HeroBanner',
          scrub: 1
        },
      });

    });

    // For mobile
    mm.add("(max-width: 960px)", () => {
      gsap.to(text_to_left, {
        x: -100,
        scrollTrigger: {
          start: '0 0',
          trigger: '.HeroBanner',
          scrub: 1
        },
      });
      gsap.to(text_to_right, {
        x: 50,
        scrollTrigger: {
          start: '0 0',
          trigger: '.HeroBanner',
          scrub: 1
        },
      });      
      gsap.to(text_desc_p, {
        y: -75,
        opacity: 0,
        scrollTrigger: {
          start: '0 0',
          trigger: '.HeroBanner',
          scrub: 1
        },
      });      
    });

    // Remove Loading Screen
    setTimeout(() => {
      this.isLoading = false;
      document.querySelector('body').style.overflow = 'visible';
    }, 1000);    

  },
  methods: {
    // Custom rendering function for the pagination bullets
    renderBullet: function (index, defaultClassName) {
      return `<span class="line-dot ${defaultClassName}-custom"></span>`;
    },
    scrollToBottom(){
      // console.log(this.$refs['herobanner'].nextElementSibling);
      this.$refs['herobanner'].nextElementSibling.scrollIntoView({behavior: "smooth"})
    }      
  },
}
</script>

<template>
  <LoadScreen v-if="isLoading" />
  <section class="HeroBanner theme-dark" id="HeroBanner" ref="herobanner">
    <div class="o-container">
      <h1 class="my-element">
        <span class="toleft">Carlos M.</span>
        <span class="toright">Samaniego</span>
      </h1>
    </div>

    <div class="HeroBanner--intro">
      <div class="o-container">

        <div class="o-grid-row ">

          <div class="col size-sm-12 size-6">
            <div class="HeroBanner--text">
              <p>
                Soy <span>desarrollador web</span> con más de 8 años de experiencia
                en la creación y mantenimiento de sitios web, landing pages y soluciones web. 
              </p>
              <span @click="scrollToBottom" class="arrow-down">
                <ArrowRight  />
              </span>
              <!-- <router-link to="/about"> > <span>Curriculum Vitae</span> </router-link> -->
            </div>

          </div>
          <div class="col size-sm-12 size-6">
            <div class="HeroBanner--carousel">

              <!-- No borrar -->
              <BannerHeroDots />

              <Flicking :options="options" :plugins="plugins" id="carrusel">
                <div class="panel"><img src="https://placehold.co/600x379"></div>
                <div class="panel"><img src="https://placehold.co/600x379"></div>
                <div class="panel"><img src="https://placehold.co/600x379"></div>

                <template #viewport>
                  <div class="flicking-pagination"></div>
                </template>
              </Flicking>

            </div>
          </div>

        </div>
      
        <!-- <Statistics /> -->

      </div>
    </div>
  </section>
  <!-- <section class="Hero--decoration">
    <div class="o-container">
      <img src="../assets/images/gotas.png" alt="Decoration" srcset="../assets/images/gotas.png" >
    </div>
  </section> -->
</template>

<style lang="sass">
@import "@/assets/sass/components/HeroBanner.sass"
</style>
<style lang="css">
  
@import url('../../node_modules/@egjs/vue3-flicking/dist/flicking-inline.css');
@import url('../../node_modules/@egjs/flicking-plugins/dist/flicking-plugins.css');

@media (min-width: 1280px) {
  #carrusel .panel {
    margin-right: 0px;
    position: relative;
    z-index: 2;
  }

  #carrusel .panel:last-child {
    z-index: 1;
  }

  #carrusel .panel img {
    pointer-events: none;
    /* left: 50%; */
    position: relative;
    width: 100%;
  }
}
</style>