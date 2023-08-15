<script setup >
// import ArrowRight from './svg/ArrowRight.vue';

import ArrowRight from './svg/arrowright.vue'

const skills = [
  {
    image: '../src/assets/images/skill-img.jpg',
    titulo: 'Desarrollo web en Marketing digital',
    description: 'Diseño y codificación web para experiencias digitales de impacto. ',
    linkTo: 'about',
    footerImage: 'https://placehold.co/40x40'
  },
  {
    image: '../src/assets/images/skill-img.jpg',
    titulo: 'Desarrollo web en Ecommerce',
    description: 'Diseño y codificación web para experiencias digitales de impacto. ',
    linkTo: 'about',
    footerImage: 'https://placehold.co/40x40'
  },
  {
    image: '../src/assets/images/skill-img.jpg',
    titulo: 'Desarrollo web para Email Marketing',
    description: 'Diseño y codificación web para experiencias digitales de impacto. ',
    linkTo: 'about',
    footerImage: 'https://placehold.co/40x40'
  }
];
</script>
<script>
export default {
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

    cardInactive(card){
      const currentCard = card.currentTarget;
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
  <section class="Skills">
    <div class="o-container">
      <h2 class="text-center">Brindo soluciones en</h2>
      <div class="Skills--cards-container">
        <div class="o-grid-row row-center">
          <!-- For Skills -->
          <div v-for="(skill, index) in skills" :key="index" class="col size-xs-12 size-sm-6 size-4">

            <div 
              class="Skills--card" 
              @touchstart="cardActive"
              @mouseenter="cardActive"
              @mouseleave="cardInactive"
            >

              <img :src="skill.image" :alt="`Skill ${index + 1}`">

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
                <router-link v-if="skill.linkTo" :to="skill.linkTo" class="link">
                  Continuar leyendo
                  <ArrowRight />
                </router-link>
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