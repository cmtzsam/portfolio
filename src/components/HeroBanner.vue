<script setup>
import BannerHeroDots from "./svg/herobanner-dots.vue";
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
      isLoading: true
    }
  },
  mounted() {
    // Add Pagination plugin to the plugins array
    this.plugins.push(
      new AutoPlay({ duration: 3000, direction: "NEXT", stopOnHover: false }),
      new Pagination({ type: "scroll", renderBullet: this.renderBullet })
    );

    // animations
    let mm = gsap.matchMedia();
    // For dekstop
    mm.add("(min-width: 600px)", () => {
      // gsap.set('.HeroBanner--text', { y: 100 });
      gsap.to(".HeroBanner--text", {
        y: 60,
        ease: "none",
        scrollTrigger: {
          start: "top 0",
          trigger: "#HeroBanner",
          scrub: 1,
        },
      });
      gsap.to(".my-element .toright", {
        x: 200,
        ease: "none",
        scrollTrigger: {
          trigger: ".my-element .toright",
          scrub: 1,
        },
      });
      gsap.to(".my-element .toleft", {
        x: -100,
        ease: "none",
        scrollTrigger: {
          trigger: ".my-element .toleft",
          scrub: 1
        },
      });
    });

    // For mobile
    mm.add("(max-width: 600px)", () => {
      gsap.to(".my-element .toright", {
        x: 40,
        ease: "none",
        scrollTrigger: {
          trigger: ".my-element .toright",
          scrub: true
        },
      });
      gsap.to(".my-element .toleft", {
        x: -40,
        ease: "none",
        scrollTrigger: {
          trigger: ".my-element .toleft",
          scrub: true
        },
      });
    });

    // Remove Loading Screen
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);    

  },
  methods: {
    // Custom rendering function for the pagination bullets
    renderBullet: function (index, defaultClassName) {
      return `<span class="line-dot ${defaultClassName}-custom"></span>`;
    },
  },
}
</script>

<template>
  <LoadScreen v-if="isLoading" />
  <section class="HeroBanner" id="HeroBanner">
    <div class="o-container">
      <h1 class="my-element">
        <span class="toleft">Carlos A. M.</span>
        <span class="toright">Samaniego</span>
      </h1>
    </div>

    <div class="HeroBanner--intro">
      <div class="o-container">

        <div class="o-grid-row ">

          <div class="col size-sm-12 size-6">
            <div class="HeroBanner--text">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perferendis non, ullam molestias
                obcaecati deleniti quos sapiente laudantium! Hic ut quas aperiam enim, consequuntur laborum odit pariatur
                minus maiores!
              </p>
              <router-link to="/about"> > <span>Curriculum Vitae</span> </router-link>
            </div>

          </div>
          <div class="col size-sm-12 size-6">
            <div class="HeroBanner--carousel">

              <!-- No borrar -->
              <BannerHeroDots />

              <Flicking :options="options" :plugins="plugins" id="carrusel">
                <div class="panel"><img
                    src="https://naver.github.io/egjs-flicking/assets/images/bg03-1e78fa11dc7996060e3577af814c7e4d.jpg">
                </div>
                <div class="panel"><img src="https://placehold.co/600x379"></div>
                <div class="panel"><img
                    src="https://naver.github.io/egjs-flicking/assets/images/bg03-1e78fa11dc7996060e3577af814c7e4d.jpg">
                </div>

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