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
      const triggerEl = document.querySelector('#HistorySection');
      const boxes = document.querySelectorAll(".HistorySection--work");
      const intro = document.querySelectorAll(".HistorySection--intro");
      const pic = document.querySelectorAll(".HistorySection--intro img");
      // For dekstop
      mm.add("(min-width: 600px)", () => {

        boxes.forEach(box => {
          gsap.set(box, { y: 0, x: 50, opacity: 0 });
          gsap.to(box, {
            y: 0,
            x: 0,
            opacity: 1,
            scrollTrigger: {
              markers: true,
              // trigger: triggerEl.previousElementSibling,
              trigger: box,
              start: '-150% 0%',
              end: '-135% 0%',
              scrub: false
            }
          })
        });
        intro.forEach(el => {
          console.log(el)
          gsap.set(el, { y: 0, x: -50, opacity: 0 });
          gsap.to(el, {
            y: 0,
            x: 0,
            opacity: 1,
            scrollTrigger: {
              // markers: true,
              trigger: el,
              start: '-100% 0',
              end: '0% 10%',
              scrub: false
            }
          })
        });
        pic.forEach(img => {
          console.log(img)
          gsap.set(img, { y: '-60%', x: 50, opacity: 0 });
          gsap.to(img, {
            y: '0%',
            opacity: 1,
            scrollTrigger: {
              // markers: true,
              trigger: img.previousElementSibling,
              scrub: true
            }
          })
        });


      });
    },
    methods: {

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
            Lorem consequat reprehenderit ipsum nulla qui pariatur tempor officia ad. Excepteur excepteur pariatur ad laborum labore reprehenderit. Do eiusmod sit pariatur nisi. Quis non dolor amet magna eu adipisicing est ex.
          </p>
          <img src="https://placehold.co/250x300" alt="CC">
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