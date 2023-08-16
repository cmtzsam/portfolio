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
    mm.add("(min-width: 600px)", () => {
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
  },
}


</script>
<template>
  <section class="MyServices theme-dark" id="MyServices">
    <div class="o-container">

      <div class="MyServices--grid">
        <div class="o-grid-row">
          <div class="col size-xs-12 size-6">
            <div class="MyServices--info titles">
              <h4>About me</h4>
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
            </div>
            <!-- <img src="https://placehold.co/500x350" alt="MyServices Img" class="img-full-responsive"> -->
          </div>
          <div class="col size-xs-12 size-6">

            <div class="MyServices--info information">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, ea quae minima temporibus officiis quas
                ut commodi autem pariatur nihil. Corrupti est quidem odio mollitia?</p>
              <ul>
                <li>
                  <span></span>
                  <p>Lorem, ipsum dolor.</p>
                </li>
                <li>
                  <span></span>
                  <p>Lorem, ipsum dolor.</p>
                </li>
                <li>
                  <span></span>
                  <p>Lorem, ipsum dolor.</p>
                </li>
                <li>
                  <span></span>
                  <p>Lorem, ipsum dolor.</p>
                </li>
                <li>
                  <span></span>
                  <p>Lorem, ipsum dolor.</p>
                </li>
                <li>
                  <span></span>
                  <p>Lorem, ipsum dolor.</p>
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