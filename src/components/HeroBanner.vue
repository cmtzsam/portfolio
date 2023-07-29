<script>
import Flicking from "@egjs/vue3-flicking";
import { Parallax } from "@egjs/flicking-plugins";
const plugins = [new Parallax('img', 2)];
export default {
  components: {
    Flicking,
  },

  data() {
    return {
      plugins,
      options: {
        panelsPerView: 1,
        align: "center",
        bounce: "5%",
        circular: false,
        bound: true,
        renderOnlyVisible: false,
        duration: 1000,
        useFractionalSize: true,
        interruptable: false
      },
    }
  }
}
</script>
<template>
  <section class="HeroBanner" id="HeroBanner">
    <div class="o-container">
      <div class="HeroBanner--intro">
        <div class="HeroBanner--text">
          <h1>Carlos A. <span>Mtz. Samaniego</span> </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perferendis non, ullam molestias
            obcaecati deleniti quos sapiente laudantium! Hic ut quas aperiam enim, consequuntur laborum odit pariatur
            minus maiores!
            <br>
            <router-link to="/about"> > <span>Descargar Curriculm</span> </router-link>
          </p>
        </div>

        <div class="HeroBanner--carousel">

          <Flicking :options="options" :plugins="plugins" id="carrusel">
            <div class="panel"><img
                src="https://naver.github.io/egjs-flicking/assets/images/bg03-1e78fa11dc7996060e3577af814c7e4d.jpg"></div>
            <div class="panel"><img
                src="https://placehold.co/600x400"></div>
                <div class="panel"><img
                src="https://naver.github.io/egjs-flicking/assets/images/bg03-1e78fa11dc7996060e3577af814c7e4d.jpg"></div>
          </Flicking>

        </div>

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

#carrusel .panel {
    margin-right: 0px;
    position: relative;
  }
  
  #carrusel .panel img {
    pointer-events: none;
    left: 50%;
    position: relative;
  }
  
  /* #carrusel .panel:nth-child(1) {
    z-index: 4;
  }
  
  #carrusel .panel:nth-child(2) {
    z-index: 3;
  } */
</style>