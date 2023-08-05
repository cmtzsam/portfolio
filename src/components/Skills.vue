<script setup >
  const skills = [
    {
      image: '../src/assets/images/skill-img.jpg',
      titulo: 'Desarrollo web',
      description: 'Diseño y codificación web para experiencias digitales impactantes.',
      footerImage: 'https://placehold.co/40x40'
    },
    {
      image: '../src/assets/images/skill1.png',
      titulo: 'Lorem, ipsum dolor.',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium cupiditate optio',
      footerImage: 'https://placehold.co/40x40'
    },
    {
      image: '../src/assets/images/skill1.png',
      titulo: 'Lorem, ipsum dolor.',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium cupiditate optio',
      footerImage: 'https://placehold.co/40x40'
    }
  ];
</script>
<template>
  <section class="Skills">
    <div class="o-container">
      <h2 class="text-center">Mi conocimiento y habilidades</h2>
      <div class="Skills--cards-container">
        <div class="o-grid-row">
        <!-- For Skills -->
        <div v-for="(skill, index) in skills" :key="index" class="col size-xs-12 size-sm-6 size-4">
          <div class="Skills--card">
            <div class="Skills--card-sideText">
                <h3>{{ skill.titulo }}</h3>
                <span>Ver más</span>
            </div>
            <div class="Skills--card-body">
              <img :src="skill.image" :alt="`Skill ${index + 1}`">
            </div>
            <!-- <div class="Skills--card-footer">
              <img :src="skill.footerImage" alt="Footer">
              <h3>{{ skill.footerText }}</h3>          
            </div> -->
          </div>
        </div>
        <!-- End for skills -->
      </div>
      </div>
      <router-link to="/about" class="o-btn md-btn btn-outline"><span>></span> Ver todas las habilidades</router-link>
    </div>
  </section>
</template>
<style lang="sass">
@import "@/assets/sass/components/Skills.sass"
</style>