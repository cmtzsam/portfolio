<template>
  <section class="Statistics theme-dark" id="Statistics">
    <div class="o-container">

      <h2>Datos de mi trayectoria profesional</h2>

      <div class="o-grid-row" ref="infoDiv">

        <div class="col size-xs-6 size-sm-6 size-4">
          <div class="Statistics--info">
            <h3 v-if="showCounter">
              <vue3-autocounter ref='counter' :startAmount='0' :endAmount='8' :duration='1.5' prefix='+' suffix=''
                separator='' decimalSeparator='.' :decimals='0' :autoinit='true' />
            </h3>
            <p>Años de experiencia</p>
          </div>
        </div>        
        <div class="col size-xs-6 size-sm-6 size-4">
          <!-- Pasar un array -->
          <div class="Statistics--info">
            <h3 v-if="showCounter">
              <vue3-autocounter ref='counter' :startAmount='0' :endAmount='10' :duration='1.5' prefix='+' suffix=''
                separator='' decimalSeparator='.' :decimals='0' :autoinit='true' />
            </h3>
            <p>Proyectos terminados</p>
          </div>
        </div>
        <div class="col size-xs-6 size-sm-6 size-4">
          <div class="Statistics--info">
            <h3 v-if="showCounter">
              <vue3-autocounter ref='counter' :startAmount='0' :endAmount='20' :duration='1.5' prefix='+' suffix=''
                separator='' decimalSeparator='.' :decimals='0' :autoinit='true' />
            </h3>
            <p>Páginas web desarrolladas</p>
          </div>
        </div>

        <!-- <div class="col size-xs-6 size-sm-6 size-3">
          <div class="Statistics--info">
            <h3 v-if="showCounter">
              <vue3-autocounter ref='counter' :startAmount='0' :endAmount='5000' :duration='1.5' prefix='+' suffix=''
                separator='' decimalSeparator='.' :decimals='0' :autoinit='true' />
            </h3>
            <p>Líneas de código escritas:p</p>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
import Vue3autocounter from 'vue3-autocounter';

export default {
  components: {
    'vue3-autocounter': Vue3autocounter
  },
  data() {
    return {
      showCounter: false,
    };
  },
  mounted() {
    const observer = new IntersectionObserver(this.handleObserver, {
      root: null, // El valor predeterminado es el viewport
      threshold: 1, // El porcentaje del elemento visible necesario para disparar la animación (0.5 significa que al menos la mitad del elemento debe ser visible)
    });

    // Observa el elemento con la directiva ref "infoDiv"
    observer.observe(this.$refs.infoDiv);
  },
  methods: {
    handleObserver(entries) {
      // La función handleObserver se ejecuta cada vez que cambia el estado de la observación (cuando el elemento se vuelve visible o invisible)
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Si el elemento es visible (dentro del viewport), muestra el contador
          this.showCounter = true;
        }
      });
    }
  }
};
</script>

<style lang="sass">
@import "@/assets/sass/components/Statistics.sass"
</style>
