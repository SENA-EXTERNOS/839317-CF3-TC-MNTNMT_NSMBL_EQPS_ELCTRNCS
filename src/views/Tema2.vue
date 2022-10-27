<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Fallas

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/f1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4.fblanco
        p.mb-0 Las fallas en los equipos electrónicos son sucesos espontáneos que provocan funcionamientos inadecuados en los componentes internos de un dispositivo, ocasionando con esto averías o daños en los equipos. Debido a esto, el profesional encargado del área de mantenimiento debe ser capaz de identificar las posibles fallas, el origen, los posibles procedimientos y la interpretación de la documentación dispuesta por el fabricante para dar inicio con las intervenciones adecuadas para la solución, reparación o calibración de cada uno de los aparatos electrónicos. Esto en pro de reducir los tiempos de inactividad de un equipo y, en consecuencia, la disminución en los costos operativos de una organización permitiendo, además, la generación de productos óptimos para los clientes o usuarios finales. Una vez identificado qué tipo de aparato electrónico se va a intervenir y dada la importancia en la detección de las fallas y la prevención de estas, es necesario proceder con todos los procesos indispensables para hacer frente a las fallas de un equipo.

    p Conocer la definición de las principales variables y principios en los circuitos electrónicos es de suma importancia para la caracterización de las piezas o elementos a intervenir. 

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 3. 
      br
      p.mb-0: em Procesos a realizar en el momento de identificación de una falla

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/t2/f2.svg', alt='Infografía interactiva')
      .tarjeta.fcsclaro.p-4.bg-c-l(x="13%" y="10%" tooltip="Codificación" numero="1")
        .h5.mb-2 1. Codificación
        p La codificación de fallas es fundamental a la hora de localizar la o las averías relacionadas al mal funcionamiento de un equipo electrónico. Estos códigos se caracterizan por ser una combinación alfanumérica que brinda una ruta a seguir para localizar el sector, pieza o circuito que se encuentra en malas condiciones, es labor del profesional verificar, corregir o reemplazar los componentes necesarios para salir del percance. Es importante mencionar que cada fabricante, a pesar de las normas internacionales, tiene diferentes interpretaciones para un mismo código, es por esto por lo que se debe seguir el manual del fabricante o la hoja de datos de los componentes.
      .tarjeta.fcpclaro.p-4.bg-c-l(x="29.4%" y="91%" tooltip="2. Relación causa efecto" numero="2")
        .h5.mb-2 2. Relación causa efecto
        p Es importante, además de tener una noción del sector o pieza afectada, saber las causas que llevaron a fallar dicho componente, esto para evitar que el elemento se siga desgastando. La relación causa efecto ayuda entonces a detectar aquellos malos procedimientos, errores de instalación o defectos de fabricación que generan desgastes o averías a zonas parciales o completas de un equipo electrónico. Obligando así, a realizar estas correcciones antes de cualquier otro procedimiento.
      .tarjeta.fcsclaro.p-4.bg-c-l(x="45.5%" y="9%" tooltip="3. Localización" numero="3")
        .h5.mb-2 3. Localización
        p Una vez realizado el procedimiento para dar con el sector afectado y realizadas las correcciones relacionadas a las causas que llevaron a producir el incidente, se debe entonces identificar el punto crítico de la avería. Esto implica que, una vez localizado el sector afectado se debe identificar las piezas específicas dentro del área comprometida que estén fallando, para ello se debe localizar los bloques funcionales y sectorizar apartados importantes dentro de los mismos para generar hoja de ruta en los procesos de diagnóstico.
      .tarjeta.fcpclaro.p-4.bg-c-l(x="64%" y="91%" tooltip="4. Procedimientos de diagnóstico" numero="4")
        .h5.mb-2 4. Procedimientos de diagnóstico
        p Con el fin de identificar las piezas o elementos afectados dentro del sector comprometido, se debe realizar en conjunto con herramientas especializadas la medición de las variables asociadas a cada uno de los componentes para verificar la respuesta de estos y validar su funcionamiento.
      .tarjeta.fcsclaro.p-4.bg-c-l(x="82.6%" y="10%" tooltip="5. Instructivos o diagramas" numero="5")
        .h5.mb-2 5. Instructivos o diagramas
        p Todo procedimiento para realizar en cada área afectada o bloque funcional debe hacerse siguiendo los instructivos o diagramas suministrados por el fabricante, esto ayudará al profesional a conocer qué tipo de elemento y características tiene el componente que se va a inspeccionar o a reemplazar. Otro apartado importante de los instructivos de un equipo electrónico, son la información relacionada con la composición de cada uno de estos aparatos electrónicos, información importante para determinar qué tipo de pruebas o procedimientos se deben realizar sin comprometer la integridad de los equipos y agentes responsables de la manipulación de cada dispositivo.

</template>

<script>
export default {
  name: 'Tema2',
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
