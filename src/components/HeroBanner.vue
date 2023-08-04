<script setup>
import Statistics from "./Statistics.vue";
</script>
<script>
import Flicking from "@egjs/vue3-flicking";
import { Pagination } from "@egjs/flicking-plugins";
export default {
  components: {
    Flicking
  },

  data() {
    return {
      plugins: [],
      options: {
        panelsPerView: 1,
        align: "center",
        bounce: "0",
        bound: true,
        renderOnlyVisible: false,
        duration: 1000,
        useFractionalSize: false,
        interruptable: false,
        moveType: "strict",
        circular: false,
      },
    }
  },
  mounted() {
    // Add Pagination plugin to the plugins array
    this.plugins.push(
      new Pagination({ type: "scroll", renderBullet: this.renderBullet })
    );
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
  <section class="HeroBanner" id="HeroBanner">

    <div class="o-container">
      <h1>Carlos A.<span>M. Samaniego</span> </h1>
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
                <br>
                <!-- <router-link to="/about"> > <span>Curriculum Vitae</span> </router-link> -->
              </p>
            </div>

          </div>
          <div class="col size-sm-12 size-6">
            <div class="HeroBanner--carousel">

              <!-- No borrar -->
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="200" viewBox="0 0 200 200"
                preserveAspectRatio="xMinYMin meet">
                <defs>
                  <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="2" fill="#4a148c" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dots)" />
              </svg>

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

        <Statistics />

      </div>
    </div>

  </section>
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