<script setup>
</script>
<template>
  <header class="HeaderMainMenu">
    <div class="o-container">
      <nav class="HeaderMainMenu--nav">
        <a class="HeaderMainMenu--logo" href="#!">
          <img src="../assets/images/logo-codificarlos-white.png" alt="Codificarlos" class="img-full-responsive">
          <!-- <img src="https://placehold.co/220x40" alt="Codificarlos" class="img-full-responsive"> -->
        </a>
        <div class="HeaderMainMenu--openmenu">
          <span class="top-bar"></span><span class="middle-bar"></span><span
            class="bottom-bar"></span><span class="cross-bar"></span>
        </div>
        <div class="HeaderMainMenu--menu">
          <ul class="HeaderMainMenu--menulist">
            <li class="HeaderMainMenu--link">
              <router-link to="/">Inicio</router-link>
            </li>
            <li>
              <span style="opacity: .25;">Soon</span>
            </li>
            <!-- <li class="HeaderMainMenu--link">
              <router-link to="/about">About</router-link>
            </li> -->
          </ul>

          <div class="HeaderMainMenu--menuactions">

            <div> Search </div>
            <div> Favorites </div>
            <!-- <router-link to="/about" class="contact">Contacto</router-link> -->
            <a href="mailto:codificarlos.contacto@gmail.com" class="contact">Contacto</a>

          </div>

        </div>
      </nav>
    </div>
  </header>
</template>
<style lang="sass">
@import "@/assets/sass/layout/_header.sass"
</style>