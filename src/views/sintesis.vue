<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-sexto.color-acento-botones(data-aos='fade-right')
      h5 Mantenimiento y ensamble de equipos electrónicos
      span Síntesis: Diagnóstico de equipos electrónicos

    p La información suministrada por este componente formativo es esencial a la hora de la identificación de fallas, pruebas, solución y diseño de los planes de mantenimiento, por lo tanto, se presenta a continuación un mapa conceptual con la información más relevante con el fin de afianzar los conocimientos adquiridos en esta unidad temática.

    .row.justify-content-center
      .col-lg-12.mb-5
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 4.
          span Diagnóstico de equipos electrónicos
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
