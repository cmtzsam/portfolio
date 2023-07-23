<script setup>
  // import { ref } from 'vue'
  // const show = ref(true)
  import HeroBanner from '../components/HeroBanner.vue';
  import Statistics from '../components/Statistics.vue';
  import Skills from '../components/Skills.vue'
  import MyServices from '../components/MyServices.vue'
  import RecentProjects from '../components/RecentProjects.vue'
</script>
<template >

  <main >
    <HeroBanner />
    <Statistics />
    <Skills />
    <MyServices />
    <RecentProjects />
  </main>
</template>

<style >
/* .v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
} */
</style>
