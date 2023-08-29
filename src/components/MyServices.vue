<script>

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export default {
  components: {
    gsap,
    ScrollTrigger
  },
  mounted() {
    // animations
    let mm = gsap.matchMedia();
    let textTitle = '.MyServices--info.titles';
    let textInformation = '.MyServices--info.information';
    let triggetTarget = document.querySelector('.MyServices').previousElementSibling;
    console.dir(triggetTarget);
    mm.add("(min-width: 960px)", () => {
      gsap.set(textTitle, { x: -100, opacity: 0 });
      gsap.to(textTitle, {
        opacity: 1,
        x: 0,        
        scrollTrigger: {
          trigger: triggetTarget,
          start: "top 0",
          // pin: true,
          // markers: true,
          scrub: 1
        },
      });
      gsap.set(textInformation, { x: 100, opacity: 0 });
      gsap.to(textInformation, {
        opacity: 1,
        x: 0,        
        scrollTrigger: {
          trigger: triggetTarget,
          start: "top 0",
          // pin: true,
          // markers: true,
          scrub: 1
        },
      });
    });
    mm.add("(max-width: 960px)", () => {
      gsap.set(textTitle, { y: 100, opacity: 0 });
      gsap.to(textTitle, {
        opacity: 1,
        y: -15,        
        scrollTrigger: {
          trigger: triggetTarget,
          start: "0 0",
          end: "25% 0",
          // pin: true,r
          // markers: true,
          scrub: 1
        },
      });
      gsap.set(textInformation, { y: 100, opacity: 0 });
      gsap.to(textInformation, {
        opacity: 1,
        y: 0,        
        scrollTrigger: {
          trigger: triggetTarget,
          start: "0 0",
          end: "25% 0",
          // markers: true,
          scrub: 1
        },
      });
    });
  },
}


</script>
<template>
  <section class="MyServices theme-dark" id="MyServices" ref="bottom">
    <div class="o-container">

      <div class="MyServices--grid">
        <div class="o-grid-row">
          <div class="col size-xs-12 size-sm-12 size-6">
            <div class="MyServices--info titles">
              <h4>Un poco de mi trayectoria</h4>
              <h2>He trabajado con una amplia gama de organizaciones, desde pequeñas empresas hasta grandes corporaciones.</h2>
            </div>
            <!-- <img src="https://placehold.co/500x350" alt="MyServices Img" class="img-full-responsive"> -->
          </div>
          <div class="col size-xs-12 size-sm-12 size-6">

            <div class="MyServices--info information">
              <p>Me considero un apasionado por la programación, lo que me ha llevado a implementar soluciones web eficaces y desarrollar sitios web atractivos y funcionales que ayudan a mis clientes a alcanzar sus objetivos. He trabajado en distintos sectores, como:</p>
              <ul>
                <li>
                  <span></span>
                  <p>Educativo</p>
                </li>
                <li>
                  <span></span>
                  <p>Industrial</p>
                </li>
                <li>
                  <span></span>
                  <p>Inmobiliario</p>
                </li>
                <li>
                  <span></span>
                  <p>Financiero</p>
                </li>
                <li>
                  <span></span>
                  <p>Alimenticio</p>
                </li>
                <li>
                  <span></span>
                  <p>Software</p>
                </li>
              </ul>
              <!-- <router-link to="/about" class="link">Ver más</router-link> -->
            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>
<style lang="sass">
@import "@/assets/sass/components/MyServices.sass"
</style>