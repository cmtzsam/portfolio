<template>
  <section class="Statistics" id="Statistics">
    <div class="o-grid-row" ref="infoDiv">
      <div class="col size-xs-4 size-4">
        <!-- Pasar un array -->
        <div class="Statistics--info">
          <h2 v-if="showCounter">
            <vue3-autocounter ref='counter' :startAmount='0' :endAmount='22' :duration='3' prefix='+' suffix=''
              separator='' decimalSeparator='.' :decimals='0' :autoinit='true' />
          </h2>
          <p>Lorem, ipsum dolor.</p>
        </div>
      </div>
      <div class="col size-xs-4 size-4">
        <div class="Statistics--info">
          <h2 v-if="showCounter">
            <vue3-autocounter ref='counter' :startAmount='0' :endAmount='100' :duration='3' prefix='+' suffix=''
              separator='' decimalSeparator='.' :decimals='0' :autoinit='true' />
          </h2>
          <p>Lorem, ipsum dolor.</p>
        </div>
      </div>
      <div class="col size-xs-4 size-4">
        <div class="Statistics--info">
          <h2 v-if="showCounter">
            <vue3-autocounter ref='counter' :startAmount='0' :endAmount='7' :duration='3' prefix='+' suffix=''
              separator='' decimalSeparator='.' :decimals='0' :autoinit='true' />
          </h2>
          <p>Lorem, ipsum dolor.</p>
        </div>
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
