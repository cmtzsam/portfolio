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
    // const triggerEl = document.querySelector('.HistorySection--line');
    // const boxes = document.querySelectorAll(".HistorySection--work");
    // const intro = document.querySelectorAll(".HistorySection--intro");
    // const pic = document.querySelectorAll(".HistorySection--intro img");
    const triggerEl = document.querySelectorAll('.HistorySection--line');
    const introEl = document.querySelectorAll('.HistorySection--intro');
    const tableEl = document.querySelectorAll('.HistorySection--table');
    // console.log(tableEl)
    // For dekstop
    mm.add("(min-width: 600px)", () => {

      gsap.set( tableEl, ({ opacity: 0, y: "-30%" }) );

      tableEl.forEach( table => {
        console.log( table.parentNode)
        gsap.to( table, {
          y: 0,
          opacity: 1,
          // ease: "ease",
          scrollTrigger: {
            // markers: true,
            start: "-55% bottom",
            end: "-15% top",
            trigger: table.parentElement,
            scrub: true,
          },        
        });
      });

      gsap.set( introEl, ({ opacity: 0, y: "30%" }) );
      introEl.forEach( intro => {
        console.log( intro.parentNode)
        gsap.to( intro, {
          y: "5%",
          opacity: 1,
          // ease: "ease",
          scrollTrigger: {
            markers: true,
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

      <div class="HistorySection--line">
        <div class="HistorySection--intro">
          <h2>Experiencia Profesional</h2>
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
              <h4>Dic. 2021 - Actual</h4>
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
              <h4>Dic. 2021 - Dic. 2021</h4>
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
              <h4>Ene - Feb 2020 </h4>
            </div>
          </div>
        </div>



      </div>

      <div class="HistorySection--line">
        <div class="HistorySection--intro">
          <h2>Preparacion Profesional</h2>
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
              <h4>Dic. 2021 - Actual</h4>
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
              <h4>Dic. 2021 - Dic. 2021</h4>
            </div>
          </div>
        </div>



      </div>

      <!-- <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br> -->

    </div>

  </section>
</template>
<style lang="sass">
  @import "./History.sass"
</style>