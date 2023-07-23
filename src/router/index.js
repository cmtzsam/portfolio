import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'About'
      }
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: 'Homepage'
      }
    }
  ]
})


// Guardia de navegación para actualizar el título de la página
router.beforeEach((to, from, next) => {
  const pageTitle = to.meta.title || 'Mi Aplicación'; // Título predeterminado si no se define uno específico
  document.title = pageTitle;
  next();
});

export default router
