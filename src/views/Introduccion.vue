<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-5
      .col-lg-7
        p Apreciado aprendiz, bienvenido a este componente formativo, donde afianzará conceptos y habilidades, relacionados con el diagnóstico de equipos electrónicos y la caracterización de los mismos, la localización de fallas, los protocolos de pruebas y la gestión de equipos electrónicos; todos son saberes esenciales que favorecen la reducción de costos operativos y prolongan la vida útil de los equipos, manteniendo y potencializando la productividad de la organización.

        p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
      
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/if1.png', alt='procesador')

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
