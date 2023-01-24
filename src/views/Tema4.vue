<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Gestión de mantenimiento

    .row.justify-content-center
      .col-lg-8
        .bloque-texto-g.bgr-cajon.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/t4/f1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.fblanco
            p La gestión de mantenimiento busca, dentro de una organización, establecer todos los parámetros necesarios para la identificación del adecuado procedimiento a realizar, las características de este y su planificación. 
        
    p Para comprender este concepto, le presentamos el siguiente video donde podrá identificar los elementos más representativos del mismo:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.mt-5
      h3 Características de la gestión de mantenimiento

    .row.justify-content-center.align-items-center.mb-5.traslape1
      .col-lg-6.tarjeta.bg-c-l.fgris1
        .p-4
          p.mb-0 La principal característica del mantenimiento, dentro de los procesos industriales y productivos, es su planificación y la periodicidad con la que ocurre cada uno de los procesos o intervenciones. Así mismo, es crucial la precisión en los tiempos en los que se ejecuta cada una de las intervenciones; por eso se busca, con cada acción, mantener la productividad y la durabilidad de los equipos minimizando, de esta manera, los tiempos de inactividad, los imprevistos y los accidentes.

      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/t4/f2.svg', alt='imagen relacionada')

    .row.mt-5
      h3 Planes

    p Es responsabilidad del profesional encargado del área, agendar cada uno de los procedimientos, de acuerdo con las características de uso del equipo y su nivel de importancia dentro del proceso productivo o industrial. 

    p Estos son los aspectos claves, que deberá tener en cuenta el técnico encargado, para realizar un correcto plan de mantenimiento:

    .col-md-11.mx-auto.mb-5
      ImagenInfografica.color-acento-botones.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/t4/f3.svg', alt='Texto que describa la imagen')
        .tarjeta.color-secundario.p-3.bg-c-b(x="5%" y="40%" numero="1")
          .h5.mb-2 Frecuencia
          p La frecuencia con la que se interviene un equipo, depende de la cantidad de horas de funcionamiento y del nivel de importancia que este representa dentro de la organización como, por ejemplo, realizar mantenimientos fuera de las horas productivas de un equipo ayuda a mantener la productividad de una empresa. 

          p Adicionalmente, se deben considerar situaciones críticas como, por ejemplo, el rozamiento de las piezas. Aspectos como la refrigeración o la lubricación, promueven tiempos de intervención más frecuentes.

        .tarjeta.color-secundario.p-3.bg-c-b(x="93%" y="16%" numero="2")
          .h5.mb-2 Especialidad
          p La especialidad busca asignar el profesional adecuado para realizar el mantenimiento a cada uno de los equipos presentes en la organización. Con esto se garantiza que el dispositivo no sufra afectaciones por malos procedimientos.

        .tarjeta.color-secundario.p-3.bg-c-b(x="66%" y="90%" numero="3")
          .h5.mb-2 Durabilidad
          p Agendar los tiempos en los cuales un equipo está fuera de uso, es crucial para que los encargados del área productiva de una empresa puedan, con el tiempo justo, realizar acciones frente a estas intervenciones. Como profesional, la durabilidad de un equipo electrónico resulta ser crítica, dada la importancia que tienen algunos dispositivos dentro de al área productiva de una organización.

        .tarjeta.color-secundario.p-3.bg-c-b(x="10%" y="14%" numero="4")
          .h5.mb-2 Permisos
          p En ocasiones, las intervenciones a dispositivos electrónicos requieren de la gestión de permisos, dado el alto riesgo de accidentalidad y de la importancia que posee cada aparato dentro de la organización. Resulta importante que, dentro del plan de mantenimiento, se contemple si la intervención requiere de algún permiso especial.

    .row.mt-5
      h3 Costos y presupuestos

    .row.justify-content-center.align-items-center.mb-5.traslape1
      .col-lg-6.tarjeta.bg-c-l.fgris1
        .p-4
          p.mb-0 Con el propósito de garantizar el cumplimiento del plan de mantenimiento se debe tener en cuenta el costo estimado de cada una de las intervenciones a realizar en el periodo designado. Esto, en conjunto con el presupuesto asignado al área de mantenimiento, dará una noción de cuántos recursos se pueden asignar a cada uno de los procesos; con esta información disponible, el profesional encargado del área de mantenimiento, podrá modificar el calendario o las acciones del plan, si así lo considera necesario, para garantizar el cumplimiento total o parcial de las intervenciones agendadas sin comprometer, en lo posible, la productividad de la empresa.

      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/t4/f4.svg', alt='imagen relacionada')

    .row.mt-5
      h3 Repuestos, piezas y documentos

    p Los repuestos y piezas son fundamentales a la hora de realizar el mantenimiento de equipos electrónicos, son este tipo de elementos los que garantizan que un dispositivo continúe en funcionamiento. 

    p A continuación, se presentan algunos aspectos que deben ser considerados en este procedimiento.

    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row.justify-content-center.align-items-center(titulo="")
        .col-md-6.mb-4.mb-md-0
          h4 Identificación 
          p El profesional debe ser capaz de identificar las piezas correctas que necesita un equipo electrónico, para evitar de esta manera un derroche del presupuesto asignado.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/t4/f5.svg', alt='imagen relacionada')
      .row.justify-content-center.align-items-center(titulo="")
        .col-md-6.mb-4.mb-md-0
          h4 Disponibilidad
          p Además, debe tener un listado de proveedores que aseguren la disponibilidad de las piezas o repuestos y genere una comparación de precios en busca de minimizar los costos.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/t4/f6.svg', alt='imagen relacionada')
      .row.justify-content-center.align-items-center(titulo="")
        .col-md-6.mb-4.mb-md-0
          h4 Documentación
          p Finalmente, generar documentación sobre las intervenciones realizadas es importante para el área de mantenimiento ya que proporciona estadísticas de cuáles piezas o repuestos son los más frecuentes dentro de cada procedimiento aumentando de esta manera la precisión en la estimación de los costos, la disponibilidad de estas y en conjunto la reducción del tiempo en el área de mantenimiento de un equipo electrónico.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/t4/f7.svg', alt='imagen relacionada')

    .cajon.color-primario.p-4
      p.mb-0 ha finalizado el estudio de este componente formativo a través del cual ha aprendido sobre el diagnóstico de equipos electrónicos. Ahora lo invitamos a estudiar la síntesis, donde podrá recordar de forma general los saberes que se han desarrollado, a realizar la actividad de aprendizaje donde podrá colocar a prueba lo aprendido, consultar el material complementario que le servirá como refuerzo y profundización y estudiar el glosario. 

</template>

<script>
export default {
  name: 'Tema4',
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
