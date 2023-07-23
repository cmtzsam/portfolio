<script setup>
</script>
<template>
  
  <section class="HeroBanner" id="HeroBanner">
    <div class="o-container">
      <div class="HeroBanner--intro">
        <div class="HeroBanner--text">
          <h1>Carlos A<i>.</i> <span>Mtz<i>.</i> Samaniego</span> </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perferendis non, ullam molestias obcaecati deleniti quos sapiente laudantium! Hic ut quas aperiam enim, consequuntur laborum odit pariatur minus maiores! 
            <br>
            <router-link to="/about">Ver mas</router-link>
          </p>
        </div>

        <div class="HeroBanner--carousel">
          <img src="https://placehold.co/550x400" alt="Carrusel" class="img-full-responsive">
        </div>

      </div>
    </div>
  </section>

</template>
<style lang="sass">
@import "@/assets/sass/components/HeroBanner.sass"
</style>