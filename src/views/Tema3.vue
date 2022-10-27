<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Pruebas y mediciones

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/f1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4.fblanco
        p Las pruebas y las mediciones cumplen un rol muy importante dentro del diagnóstico de los elementos eléctricos y electrónicos. Estos valores indican si una pieza o componente de una área afectada o seleccionada para la intervención se encuentran en los parámetros adecuados. No obstante, antes de realizar cualquier procedimiento es necesario evaluar y estudiar las condiciones del entorno laboral buscando posibles riesgos, percances o accidentes que se puedan prevenir. Según García et al (2016), las condiciones de trabajo son todo el entorno que rodea a un trabajador, dentro de las cuales se mencionan, iluminación, temperatura, compañeros, presión, etc. Todas estas variables pueden afectar el rendimiento, la salud y la seguridad de un empleado, es por esto por lo que resulta esencial un adecuado ambiente laboral. Con el posible problema identificado, gracias a los criterios de la pasada sección, es necesario emprender las acciones para verificar si la hipótesis inicial fue correcta o se debe considerar otras consideraciones. 
        p.mb-0 Con el fin de cumplir estos parámetros se presenta los siguientes temas.

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Pruebas

    .row.justify-content-center.align-items-center.mb-5.traslape1
      .col-lg-6.tarjeta.bg-c-l.fgris1
        .p-4
          p.b-0 Las pruebas realizadas a un dispositivo electrónico son las responsables de suministrar toda la información necesaria para identificar qué componente o componentes no están bajo las condiciones adecuadas para el correcto funcionamiento de un equipo electrónico. El apartado esencial dentro de las pruebas de diagnóstico de un aparato electrónico son la medición de elementos, esto debido a que los resultados de este procedimiento ayudan al profesional a verificar el estado en el cual se encuentra el objeto en el cual se está realizando la intervención, dado lo anterior, es necesario conocer el tipo de variable física que se quiere monitorear. 
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/t3/f2.svg', alt='imagen relacionada')

    .bg1
      p A continuación, se presentan las mediciones más comunes.

      AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta")
        .row.justify-content-around.align-items-center(titulo="Medición de resistencias")
          .col-md-7.mb-4.mb-md-0
            p La medición de resistencia de un componente o sección de un circuito es importante, ya que indica las propiedades que tiene la región o elemento medido; resultados fuera de rangos normales dan indicios de las posibles afectaciones que presenta un equipo, por ejemplo, medidas muy elevadas de un componente pueden indicar corrosión o afectaciones por excesos de temperatura. También, gracias a los resultados se pueden detectar cortocircuitos o circuitos abiertos. La medición de resistencias se debe hacer por medio de un óhmetro o un multímetro.
            p
              b Nota: 
              | antes de realizar cualquier medición de resistencia es necesario desconectar la alimentación del circuito para evitar daños en el equipo a medir, la herramienta de medición y el usuario.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t3/f3.png', alt='imagen relacionada')
        .row.justify-content-around.align-items-center(titulo="Respuesta a la frecuencia")
          .col-md-7.mb-4.mb-md-0
            p La respuesta a la frecuencia de un equipo electrónico ayuda en las etapas de diseño a conocer el comportamiento de un dispositivo frente a una señal de entrada conocida, señal de impulso, la cual apoya en la predicción y análisis de los sistemas de control a implementar en el equipo. Este tipo de medición también ayuda a los profesionales a describir sistemas complejos gracias a la función de transferencia sin la necesidad de conocer todos los aspectos asociados al bloque o estructura estudiada, dando una noción general de la aplicación de un aparato electrónico y ayudando a un profesional a comprender los aspectos generales del mismo.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t3/f4.png', alt='imagen relacionada')
        .row.justify-content-around.align-items-center(titulo="Inspección térmica")
          .col-md-7.mb-4.mb-md-0
            p La inspección térmica busca a partir de los resultados de cámaras térmicas o infrarrojas a monitorear la temperatura interna de un equipo electrónico en busca de anomalías. En conjunto con la inspección visual, la inspección térmica ayuda al profesional encargado del área de mantenimiento a centralizar o localizar la falla de un equipo. Adicionalmente, da una noción de cuál o cuáles componentes del dispositivo están bajo temperaturas críticas y muy probablemente necesiten mantenimientos más regulares.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t3/f5.png', alt='imagen relacionada')
        .row.justify-content-around.align-items-center(titulo="Análisis de protecciones")
          .col-md-7.mb-4.mb-md-0
            p Las protecciones térmicas tienen como función el resguardar la integridad de los equipos frente a las sobrecargas y temperaturas altas. Es por este motivo por el cual se debe verificar el estado de cada una de las protecciones presentes en el o los equipos electrónicos. Para ello se deben probar cada una de las protecciones en escenarios controlados para verificar su accionar.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t3/f6.png', alt='imagen relacionada')
        .row.justify-content-around.align-items-center(titulo="Puestas a tierra")
          .col-md-7.mb-4.mb-md-0
            p La verificación de una correcta puesta a tierra es crítica dentro de la instalación de un equipo o a la hora de realizar un diseño electrónico. Esta parte fundamental de un circuito electrónico es la responsable de guiar las corrientes de un dispositivo hacia una ruta segura evitando así, las tensiones de paso y de contacto que causan descargas eléctricas peligrosas en los usuarios. Es este el principal motivo por el cual un profesional debe asegurar la existencia de una puesta a tierra en los dispositivos y de su correcta instalación. 
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t3/f7.png', alt='imagen relacionada')
        .row.justify-content-around.align-items-center(titulo="Pruebas de voltaje")
          .col-md-7.mb-4.mb-md-0
            p Las pruebas de voltaje son las responsables de mostrar el comportamiento de un dispositivo frente a la excitación de una fuente de energía. Resultados en la medición de voltaje inconsistentes ayudarán al profesional encargado a localizar regiones o elementos que no se encuentren dentro de los rangos habituales y, por ende, se deban revisar de manera más detallada.
            p Con el fin de realizar una correcta medición de voltaje para un adecuado proceso es necesario el uso de un multímetro o de un voltímetro conectado entre los extremos del lugar, componente o sección que se quiere medir; en ocasiones es necesario la adición de resistencias para ampliar el rango de medida del aparato empleado para el procedimiento. (Miguel, A. P. S. 2016)
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t3/f8.png', alt='imagen relacionada')
        .row.justify-content-around.align-items-center(titulo="Pruebas de corriente")
          .col-md-7.mb-4.mb-md-0
            p Las pruebas de corriente en un equipo electrónico son importantes gracias a su aporte a la hora de verificar el estado de un dispositivo o elemento. Los valores anómalos en los resultados de medición pueden indicar fallas en el funcionamiento del sector, área, elemento o bloque estudiado.
            p Para las pruebas y/o mediciones de corriente es necesario el uso de la herramienta llamada amperímetro o multímetro, el cual se debe conectar en serie con el circuito en donde se encuentra la corriente que se quiere medir. (Miguel, A. P. S. 2016)
            p 
              b Nota: 
              | es de suma importancia realizar las mediciones con las herramientas adecuadas, el equipo energizado y siguiendo la recomendación anterior con el fin de evitar en lo posible daños en el equipo y accidentes en todos los agentes que intervienen en el proceso.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t3/f9.png', alt='imagen relacionada')

    Separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Protocolos

    .row.justify-content-center.align-items-center.mb-5.traslape2
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/t3/f10.svg', alt='imagen relacionada')
      .col-lg-6.tarjeta.bg-c-l.fgris1
        .p-4
          p Una vez se ha identificado el tipo de prueba que se va a realizar, se debe considerar un conjunto de recomendaciones en procura de garantizar que el procedimiento que se llevará a cabo se hará de manera adecuada cumpliendo con los protocolos establecidos.
          p.b-0 A continuación, se presenta el protocolo para tener en cuenta a la hora de realizar una prueba.

    .bg2
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-secundario.bg-c-b.p-4(style="height:370px")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t3/f11.png' alt='icono relacionado')
          p Organizar u ordenar el área de trabajo.
        .tarjeta.color-secundario.bg-c-b.p-4(style="height:370px")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t3/f12.png' alt='icono relacionado')
          p Seleccionar herramientas y equipos adecuados para cada uno de los procedimientos.
        .tarjeta.color-secundario.bg-c-b.p-4(style="height:370px")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t3/f13.png' alt='icono relacionado')
          p Seguir los criterios y normas técnicas de cada uno de los fabricantes.
        .tarjeta.color-secundario.bg-c-b.p-4(style="height:370px")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t3/f14.png' alt='icono relacionado')
          p Corroborar si las variables físicas asociadas al equipo electrónico están bajo los estándares de calidad requeridos.
        .tarjeta.color-secundario.bg-c-b.p-4(style="height:370px")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t3/f15.png' alt='icono relacionado')
          p Un dispositivo no funciona de igual manera frente a CC o CA, se debe identificar de forma correcta que tipo de corriente se va a medir (Miguel, A. P. S. (2016).).

    Separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3 Unidades de medida

    .row.justify-content-center.align-items-center.mb-5.traslape1
      .col-lg-6.tarjeta.bg-c-l.fgris1
        .p-4
          p.b-0 Con los protocolos de prueba listos para cada una de las pruebas a realizar al equipo o pieza electrónica se debe identificar qué tipo de variable se va a medir para seleccionar de forma correcta el tipo de herramienta y equipo electrónico. Además, este tipo de información ayuda a que el profesional encargado del área de mantenimiento pueda tomar la decisión más adecuada de acuerdo con el proceso seleccionado. Dentro de las más comunes se tienen:
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/t3/f16.svg', alt='imagen relacionada')

    Separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.4 Variables y rangos

    .bg3
      .row.justify-content-center.align-items-center.mb-5.traslape1
        .col-lg-6.tarjeta.bg-c-l.fgris1
          .p-4
            p.b-0 Con las unidades de medida identificadas para cada uno de los procesos de las pruebas establecidas, se debe asociar las variables físicas propias de cada uno de los procesos, esto con el fin de garantizar el método adecuado para la medición de cada una de las variables. Las variables más comunes son:
        .col-lg-4(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/f17.svg', alt='imagen relacionada')

        .col-lg-10.mt-4.tarjeta.p-4.bg-c-l.fgris1
          p.mb-0 Un factor adicional para tener en cuenta dentro de las pruebas es el rango en el cual la variable o variables a medir deben encontrarse. También se debe verificar el rango máximo y mínimo que son capaces de soportar las herramientas o equipos de medición para garantizar resultados precisos y resguardar la integridad de los dispositivos y operarios, más precisamente: “El campo de medida de un aparato de medida nos indica los valores entre los cuales el aparato mide con exactitud. Antes de realizar una medida habrá que prever con aproximación el orden de magnitud de la medida y con ello seleccionar el aparato más adecuado” (Miguel, A. P. S. (2016), p. 138).

    Separador

    #t_3_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.5 Interpretación

    p Como en cualquier proceso, la interpretación de resultados es fundamental para determinar las causas, elaborar un diagnóstico y realizar el procedimiento adecuado. 
    p A continuación, se presentan la importancia de la interpretación de resultados en equipos electrónicos.  

    .row.justify-content-center.mb-5
      .col-md-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/f18.svg' alt='AvatarTop')
          .tarjeta.fcac25.w-100
            .text-white.p-4
              h4.cst.text-center Parámetros o rangos
              p.cst.text-center La interpretación de resultados dentro del proceso de pruebas electrónicas es crucial para recopilar todos los factores que provocaron la inoperatividad del equipo electrónico.
      .col-md-4(data-aos="fade-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/f19.svg' alt='AvatarTop')
          .tarjeta.fcac25.w-100
            .text-white.p-4
              h4.cst.text-center Presentación y descripción de los fallos
              p.cst.text-center También es crucial para la presentación y descripción de los fallos con sus respectivas soluciones, esto ayuda a futuros profesionales a utilizar estos procedimientos como guías en futuras intervenciones del equipo electrónico.
      .col-md-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/f20.svg' alt='AvatarTop')
          .tarjeta.fcac25.w-100
            .text-white.p-4
              h4.cst.text-center Informes técnicos
              p.cst.text-center Por último, la interpretación de resultados en informes técnicos es fundamental en la toma de decisiones de una empresa, esto debido a que elimina actividades, prácticas o instalaciones que estén provocando fallos en los equipos electrónicos.

    Separador

    #t_3_6.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.6 Funcionamiento

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p Al igual que los elementos electrónicos, 
          b los equipos tienen algunos parámetros o rangos que se deben asegurar para garantizar el correcto funcionamiento de los dispositivos. 
          | Estos parámetros incluyen rangos operativos que sí o sí se deben asegurar para la puesta en marcha del dispositivo. Algunas de las más comunes son: 
          b tensión, corriente y frecuencia
          | . Adicionalmente, se debe corroborar que los rangos de medición o los rangos para los que fue diseñado el equipo electrónico se cumplan dentro de las instalaciones donde está ubicado; lo anterior, busca 
          b mantener la integridad del aparato electrónico y de las instalaciones eléctricas
          | . Toda esta información se encuentra depositada en el manual de usuario o ficha técnica del equipo electrónico.
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/t3/f21.png', alt='imagen relacionada')

    Separador

    #t_3_7.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.7 Puesta en marcha 

    p Una vez se han realizado todas las intervenciones necesarias para garantizar el correcto funcionamiento de los equipos electrónicos, las adecuadas prácticas para el manejo de los dispositivos y las instalaciones idóneas para la ubicación del dispositivo se deben, probar los equipos bajo las condiciones de uso y diseño, esto para observar el comportamiento del equipo y verificar si su respuesta es la adecuada. Al finalizar las pruebas de la puesta en marcha del dispositivo, el profesional encargado tomará la decisión de acuerdo con los resultados si el equipo es apto o no.

    Separador

    .bg1
      #t_3_8.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.8 Protocolo de seguridad 

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          p Un apartado muy importante que el profesional debe tener en cuenta y seguir en todas las intervenciones a realizar son los protocolos de seguridad y salud en el trabajo los cuales buscan reducir los accidentes en cada uno de los procesos.
          p A continuación, se presentan las recomendaciones que deber ser tenidas en cuenta a la hora de implementar el protocolo de seguridad. 

          SlyderF.mb-5(columnas="col-lg-6 col-xl-6")
            .tarjeta.bg-c-b.p-4(style="background-color: #7E89BE; height:340px")
              p.text-small Para la prueba de los equipos electrónicos estas normas son de suma importancia ya que evitan lesiones en los operarios y técnicos de mantenimiento.
            .tarjeta.bg-c-b.p-4(style="background-color: #7E89BE; height:340px")
              p.text-small Dentro de las mediciones se debe tener claridad de cómo y en qué condiciones realizar este proceso sin comprometer la integridad del equipo y del profesional, por ejemplo, la medición de resistencias, capacitancias e inductancias se deben realizar sin tener el equipo electrónico conectado al suministro eléctrico y esperando algunos minutos mientras se descargan cada uno de los acumuladores de energía del sistema, este simple acto reduce en gran medida las descargas eléctricas y por ende los accidentes.
            .tarjeta.bg-c-b.p-4(style="background-color: #7E89BE; height:340px")
              p.text-small Este tipo de recomendaciones o normas se encuentran disponibles en el manual de usuario u hoja de datos del dispositivo electrónico, es por esto que se debe tener a la mano cada uno de los documentos asociados al equipo, pieza o elemento a intervenir.
            .tarjeta.bg-c-b.p-4(style="background-color: #7E89BE; height:340px")
              p.text-small Además de tener en cuenta las recomendaciones para resguardar la seguridad del o los profesionales también es importante identificar los riesgos laborales, según García et al (2016) cualquier actividad física o emocional puede derivar en daños, los cuales deben prevenirse y estudiarse para evitar en lo posible su producción.
            .tarjeta.bg-c-b.p-4(style="background-color: #7E89BE; height:340px")
              p.text-small Dado que los elementos o sustancias que componen un dispositivo resultan ser peligrosos es necesario seguir las recomendaciones del fabricante para tratar de la mejor manera este tipo de sustancias tratando, de evitar los accidentes. Por este motivo se invita a seguir las indicaciones del fabricante para evitar en todo momento los sucesos inesperados.
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/t3/f22.png', alt='imagen relacionada')

</template>

<script>
export default {
  name: 'Tema3',
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
