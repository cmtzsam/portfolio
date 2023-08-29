<script setup>
// import { ref } from 'vue'
// const show = ref(true)
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import HeroBanner from '../components/HeroBanner.vue';
import Statistics from '../components/Statistics.vue';
import Skills from '../components/Skills.vue'
import MyServices from '../components/MyServices.vue'
import RecentProjects from '../components/RecentProjects.vue'
import Contact from '../components/Contact.vue'
import History from '../components/History/History.vue'
</script>
<template >

  <main>
    <Header />
    <HeroBanner />
    <MyServices />
    <Skills />
    <Statistics />
    <RecentProjects />
    <History /> 
    <Contact />
    <Footer />
    
  </main>
</template>

<style ></style>
