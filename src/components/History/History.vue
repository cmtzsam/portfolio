<script>

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    gsap,
    ScrollTrigger,
  },
  data() {
    return {

    }
  },
  mounted() {
    // animations
    let mm = gsap.matchMedia();
    const triggerEl = document.querySelectorAll('.HistorySection--line');
    const introEl = document.querySelectorAll('.HistorySection--intro');
    const tableEl = document.querySelectorAll('.HistorySection--table');
    // console.log(tableEl)
    // For dekstop
    mm.add("(min-width: 1140px)", () => {

      gsap.set( tableEl, ({ opacity: 0, y: "-45%" }) );

      tableEl.forEach( table => {
        console.log( table.parentNode)
        gsap.to( table, {
          y: 0,
          opacity: 1,
          // ease: "ease",
          scrollTrigger: {
            // markers: true,
            start: "-55% bottom",
            end: "0% top",
            trigger: table.parentElement,
            scrub: true,
          },        
        });
      });

      gsap.set( introEl, ({ opacity: 0, y: "45%" }) );
      introEl.forEach( intro => {
        console.log( intro.parentNode)
        gsap.to( intro, {
          y: "15%",
          opacity: 1,
          // ease: "ease",
          scrollTrigger: {
            // markers: true,
            start: "-25% bottom",
            end: "-10% top",
            trigger: intro.parentElement,
            scrub: true,
          },        
        });
      });

    });
  },
  methods: {
  }

};

</script>
<template>
  <section class="HistorySection theme-dark" id="HistorySection">

    <div class="o-container">

      <div class="HistorySection--line theme-jobs">
        <div class="HistorySection--intro">
          <h4>Experiencia Profesional</h4>
          <!-- <p>
            Lorem consequat reprehenderit ipsum nulla qui pariatur tempor officia ad. Excepteur excepteur pariatur ad
            laborum labore reprehenderit. Do eiusmod sit pariatur nisi. Quis non dolor amet magna eu adipisicing est ex.
          </p> -->
          <!-- <img src="https://placehold.co/250x300" alt="CC"> -->
        </div>

        <div class="HistorySection--table">
          <div class="HistorySection--work">
            <div class="HistorySection--work-company">
              <h2>Universidad Tecmilenio</h2>
              <h3>Desarrollador Web</h3>
            </div>
            <div class="HistorySection--work-desc">
              <!-- <p>
                Mis responsabilidades como desarrollador web incluyen la implementación, actualización y mantenimiento de formularios, la construcción y mantenimiento del sitio web institucional, y el monitoreo, revisión y corrección de leads para la sincronización entre la plataforma de HubSpot y Salesforce. También doy soporte y mantenimiento a distintos micrositios de la universidad.
              </p> -->
              <h5>Dic. 2021 - Actual</h5>
            </div>
          </div>
          <div class="HistorySection--work">
            <div class="HistorySection--work-company">
              <h2>Ecomsur</h2>
              <h3>Desarrollador Front End</h3>
            </div>
            <div class="HistorySection--work-desc">
              <!-- <p>
                Mis principales actividades se centraban en el desarrollo de soluciones web para solventar necesidades especificas de los clientes. Adicionalmente, también apoyaba con soporte y mantenimiento a sitios de comercio electrónico, con actividades como: <br><br>
                - Actualización de productos <br>
                - Integraciones <br>
                - Construcción de correos electrónicos                
              </p> -->
              <h5>Jun. 2021 - Dic. 2021</h5>
            </div>
          </div>
          <div class="HistorySection--work">
            <div class="HistorySection--work-company">
              <h2>Consultores Web</h2>
              <h3>Desarrollador Front End</h3>
            </div>
            <div class="HistorySection--work-desc">
              <!-- <p>
                Fui responsable de una variedad de tareas, incluyendo la construcción y mantenimiento de sitios web, la construcción de plantillas para correos electrónicos, la coordinación del equipo de desarrollo y el diseño web en Photoshop. En este rol, pude desarrollar y aplicar mis habilidades en el desarrollo web, el diseño gráfico y la gestión de equipos.
              </p> -->
              <h5>Mar. 2015 - Jun. 2021 </h5>
            </div>
          </div>
        </div>

      </div>

      <div class="HistorySection--line theme-school">
        <div class="HistorySection--intro ">
          <h4>Educacion</h4>

        </div>

        <div class="HistorySection--table">
          <div class="HistorySection--work">
            <div class="HistorySection--work-company">
              <h2>UANL - Facultad de Ingenieria Mecanica y Electrica</h2>
              <h3>Ing. en Admin. de Sistemas</h3>
            </div>
            <div class="HistorySection--work-desc">
              <h5>Jun. 2015 - Jun. 2021</h5>
            </div>
          </div>
          <div class="HistorySection--work">
            <div class="HistorySection--work-company">
              <h2>UANL - Escuela Industrial y Preparatoria Tecnica "Alvaro Obregon"</h2>
              <h3>Tec. en TIC. enfocado en Progr. Web</h3>
            </div>
            <div class="HistorySection--work-desc">
              <h5>Dic. 2021 - Dic. 2021</h5>
            </div>
          </div>
        </div>

      </div>

      <div class="HistorySection--line theme-courses">
        <div class="HistorySection--intro ">
          <h4>Cursos y Certificaciones</h4>

        </div>

        <div class="HistorySection--table">
          <div class="HistorySection--work">
            <div class="HistorySection--work-company">
              <h2>UANL - Facultad de Ingenieria Mecanica y Electrica</h2>
              <h3>Desarrollo sobre Android</h3>
            </div>
            <div class="HistorySection--work-desc">
              <h5>Ago. - Nov. 2018</h5>
            </div>
          </div>
          <div class="HistorySection--work">
            <div class="HistorySection--work-company">
              <h2>Udemy</h2>
              <h3>Desarrollo con Gatsby</h3>
            </div>
            <div class="HistorySection--work-desc">
              <h5>Dic. 2021</h5>
            </div>
          </div>
        </div>

      </div>


    </div>

  </section>
</template>
<style lang="sass">
  @import "./History.sass"
</style>