<script>

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    gsap,
    ScrollTrigger,
  },
  data() {
    return {

    }
  },
  mounted() {
    // animations
    let mm = gsap.matchMedia();
    const triggerEl = document.querySelectorAll('.HistorySection--line');
    const introEl = document.querySelectorAll('.HistorySection--intro');
    const tableEl = document.querySelectorAll('.HistorySection--table');
    // console.log(tableEl)
    // For dekstop
    mm.add("(min-width: 1140px)", () => {

      gsap.set( tableEl, ({ opacity: 0, y: "-45%" }) );

      tableEl.forEach( table => {
        console.log( table.parentNode)
        gsap.to( table, {
          y: 0,
          opacity: 1,
          // ease: "ease",
          scrollTrigger: {
            // markers: true,
            start: "-55% bottom",
            end: "0% top",
            trigger: table.parentElement,
            scrub: true,
          },        
        });
      });

      gsap.set( introEl, ({ opacity: 0, y: "45%" }) );
      introEl.forEach( intro => {
        console.log( intro.parentNode)
        gsap.to( intro, {
          y: "15%",
          opacity: 1,
          // ease: "ease",
          scrollTrigger: {
            // markers: true,
            start: "-25% bottom",
            end: "-10% top",
            trigger: intro.parentElement,
            scrub: true,
          },        
        });
      });

    });
  },
  methods: {
    hello(e){
      console.log(e.trigger);
    },
  }

};

</script>
<template>
  <section class="HistorySection theme-dark" id="HistorySection">

    <div class="o-container">

      <div class="HistorySection--line theme-jobs">
        <div class="HistorySection--intro">
          <h4>Experiencia Profesional</h4>
          <p>
            Lorem consequat reprehenderit ipsum nulla qui pariatur tempor officia ad. Excepteur excepteur pariatur ad
            laborum labore reprehenderit. Do eiusmod sit pariatur nisi. Quis non dolor amet magna eu adipisicing est ex.
          </p>
          <!-- <img src="https://placehold.co/250x300" alt="CC"> -->
        </div>

        <div class="HistorySection--table">
          <div class="HistorySection--work">
            <div class="HistorySection--work-company">
              <h2>Universidad Tecmilenio</h2>
              <h3>Desarrollador Web</h3>
            </div>
            <div class="HistorySection--work-desc">
              <p>
                Lorem consequat reprehenderit ipsum nulla qui pariatur tempor officia ad. Excepteur excepteur pariatur
                ad laborum labore reprehenderit. Do eiusmod sit pariatur nisi. Quis non dolor amet magna eu adipisicing
                est ex.
              </p>
              <h5>Dic. 2021 - Actual</h5>
            </div>
          </div>
          <div class="HistorySection--work">
            <div class="HistorySection--work-company">
              <h2>Universidad Tecmilenio</h2>
              <h3>Desarrollador Web</h3>
            </div>
            <div class="HistorySection--work-desc">
              <p>
                Lorem consequat reprehenderit ipsum nulla qui pariatur tempor officia ad. Excepteur excepteur pariatur
                ad laborum labore reprehenderit. Do eiusmod sit pariatur nisi. Quis non dolor amet magna eu adipisicing
                est ex.
              </p>
              <h5>Dic. 2021 - Dic. 2021</h5>
            </div>
          </div>
          <div class="HistorySection--work">
            <div class="HistorySection--work-company">
              <h2>Universidad Tecmilenio</h2>
              <h3>Desarrollador Web</h3>
            </div>
            <div class="HistorySection--work-desc">
              <p>
                Lorem consequat reprehenderit ipsum nulla qui pariatur tempor officia ad. Excepteur excepteur pariatur
                ad laborum labore reprehenderit. Do eiusmod sit pariatur nisi. Quis non dolor amet magna eu adipisicing
                est ex.
              </p>
              <h5>Ene - Feb 2020 </h5>
            </div>
          </div>
        </div>

      </div>

      <div class="HistorySection--line theme-school">
        <div class="HistorySection--intro ">
          <h4>Preparacion Profesional</h4>
          <!-- <p>
            Lorem consequat reprehenderit ipsum nulla qui pariatur tempor officia ad. Excepteur excepteur pariatur ad laborum labore reprehenderit. Do eiusmod sit pariatur nisi. Quis non dolor amet magna eu adipisicing est ex.
          </p> -->
          <!-- <img src="https://placehold.co/250x300" alt="CC"> -->
        </div>

        <div class="HistorySection--table">
          <div class="HistorySection--work">
            <div class="HistorySection--work-company">
              <h2>Universidad Tecmilenio</h2>
              <h3>Desarrollador Web</h3>
            </div>
            <div class="HistorySection--work-desc">
              <p>
                Lorem consequat reprehenderit ipsum nulla qui pariatur tempor officia ad. Excepteur excepteur pariatur
                ad laborum labore reprehenderit. Do eiusmod sit pariatur nisi. Quis non dolor amet magna eu adipisicing
                est ex.
              </p>
              <h5>Dic. 2021 - Actual</h5>
            </div>
          </div>
          <div class="HistorySection--work">
            <div class="HistorySection--work-company">
              <h2>Universidad Tecmilenio</h2>
              <h3>Desarrollador Web</h3>
            </div>
            <div class="HistorySection--work-desc">
              <p>
                Lorem consequat reprehenderit ipsum nulla qui pariatur tempor officia ad. Excepteur excepteur pariatur
                ad laborum labore reprehenderit. Do eiusmod sit pariatur nisi. Quis non dolor amet magna eu adipisicing
                est ex.
              </p>
              <h5>Dic. 2021 - Dic. 2021</h5>
            </div>
          </div>
        </div>

      </div>

      <div class="HistorySection--line theme-courses">
        <div class="HistorySection--intro ">
          <h4>Preparacion Profesional</h4>
          <!-- <p>
            Lorem consequat reprehenderit ipsum nulla qui pariatur tempor officia ad. Excepteur excepteur pariatur ad laborum labore reprehenderit. Do eiusmod sit pariatur nisi. Quis non dolor amet magna eu adipisicing est ex.
          </p> -->
          <!-- <img src="https://placehold.co/250x300" alt="CC"> -->
        </div>

        <div class="HistorySection--table">
          <div class="HistorySection--work">
            <div class="HistorySection--work-company">
              <h2>Universidad Tecmilenio</h2>
              <h3>Desarrollador Web</h3>
            </div>
            <div class="HistorySection--work-desc">
              <p>
                Lorem consequat reprehenderit ipsum nulla qui pariatur tempor officia ad. Excepteur excepteur pariatur
                ad laborum labore reprehenderit. Do eiusmod sit pariatur nisi. Quis non dolor amet magna eu adipisicing
                est ex.
              </p>
              <h5>Dic. 2021 - Actual</h5>
            </div>
          </div>
          <div class="HistorySection--work">
            <div class="HistorySection--work-company">
              <h2>Universidad Tecmilenio</h2>
              <h3>Desarrollador Web</h3>
            </div>
            <div class="HistorySection--work-desc">
              <p>
                Lorem consequat reprehenderit ipsum nulla qui pariatur tempor officia ad. Excepteur excepteur pariatur
                ad laborum labore reprehenderit. Do eiusmod sit pariatur nisi. Quis non dolor amet magna eu adipisicing
                est ex.
              </p>
              <h5>Dic. 2021 - Dic. 2021</h5>
            </div>
          </div>
        </div>

      </div>


    </div>

  </section>
</template>
<style lang="sass">
  @import "./History.sass"
</style>