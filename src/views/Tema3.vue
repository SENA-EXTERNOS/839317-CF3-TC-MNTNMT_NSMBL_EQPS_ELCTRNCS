<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Pruebas y mediciones

    .bloque-texto-g.bgr-cajon.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/f1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4.fblanco
        p Las pruebas y las mediciones cumplen un rol muy importante dentro del diagnóstico de los elementos eléctricos y electrónicos. Estos valores indican si una pieza o componente de un área afectada, o seleccionada para la intervención, tiene los parámetros adecuados. No obstante, antes de realizar cualquier procedimiento, es necesario evaluar y estudiar las condiciones del entorno laboral, buscando posibles riesgos, percances o accidentes que se puedan prevenir. 

    p.mt-5 Las condiciones de trabajo conforman todo el entorno que rodea a un trabajador; dentro de estas condiciones se incluyen: iluminación, temperatura, compañeros, presión, etc. Todas estas variables pueden afectar el rendimiento, la salud y la seguridad de un empleado y, por lo tanto, resulta esencial contar con un adecuado ambiente laboral. Con el posible problema identificado, se emprende la verificación de la hipótesis inicial (si fue correcta o se deben contemplar otras consideraciones). 

    .row.mt-5
      h3 Pruebas

    .row.justify-content-center.align-items-center.mb-5.traslape1
      .col-lg-6.tarjeta.bg-c-l.fgris1
        .p-4
          p.b-0 Las pruebas realizadas a un dispositivo electrónico, suministran toda la información necesaria para identificar qué componente o componentes no se encuentran bajo las condiciones adecuadas para el correcto funcionamiento de un equipo electrónico. 

          p.b-0 El punto clave de las pruebas de diagnóstico es la medición de elementos, cuyo resultado favorece la verificación del estado en el cual se encuentra el objeto intervenido. Con esta información, se conoce el tipo de variable física que se quiere monitorear. 

      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/t3/f2.svg', alt='imagen relacionada')

    .bg1

      p A continuación, se presentan las mediciones más comunes.

      AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta")
        .row.justify-content-around.align-items-center(titulo="Medición de resistencias")
          .col-md-7.mb-4.mb-md-0
            p Indica las propiedades que tiene la región o elemento medido; los resultados fuera de rangos normales dan indicios de las posibles afectaciones que presenta un equipo como, por ejemplo, unas medidas muy elevadas de un componente pueden indicar corrosión o afectaciones por excesos de temperatura. También, gracias a los resultados, se pueden detectar cortocircuitos o circuitos abiertos. La medición de resistencias se debe hacer por medio de un óhmetro o un multímetro.

            p
              b Nota: 
              | antes de realizar cualquier medición de resistencia es necesario desconectar la alimentación del circuito para evitar daños en el equipo a medir, la herramienta de medición y el usuario.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t3/f3.png', alt='imagen relacionada')
        .row.justify-content-around.align-items-center(titulo="Respuesta a la frecuencia")
          .col-md-7.mb-4.mb-md-0
            p La respuesta a la frecuencia de un equipo electrónico ayuda, en las etapas de diseño, a conocer el comportamiento de un dispositivo frente a una señal de entrada conocida (señal de impulso), la cual apoya en la predicción y análisis de los sistemas de control, a implementar en el equipo.

            p Este tipo de medición también ayuda a los profesionales a describir sistemas complejos, gracias a la función de transferencia, sin la necesidad de conocer todos los aspectos asociados al bloque o estructura estudiada, dando una noción general de la aplicación de un aparato electrónico y ayudando a un profesional a comprender los aspectos generales del mismo.

          .col-md-4
            figure
              img(src='@/assets/curso/temas/t3/f4.png', alt='imagen relacionada')
        .row.justify-content-around.align-items-center(titulo="Inspección térmica")
          .col-md-7.mb-4.mb-md-0
            p La inspección térmica busca, a partir de los resultados de cámaras térmicas o infrarrojas, monitorear la temperatura interna de un equipo electrónico en busca de anomalías. En conjunto con la inspección visual, la inspección térmica ayuda al profesional encargado del área de mantenimiento, a centralizar o localizar la falla de un equipo. Adicionalmente, aporta una noción de cuál o cuáles componentes del dispositivo están bajo temperaturas críticas y, muy probablemente, necesiten mantenimientos más regulares.

          .col-md-4
            figure
              img(src='@/assets/curso/temas/t3/f5.png', alt='imagen relacionada')
        .row.justify-content-around.align-items-center(titulo="Análisis de protecciones")
          .col-md-7.mb-4.mb-md-0
            p Las protecciones térmicas tienen como función, resguardar la integridad de los equipos frente a las sobrecargas y temperaturas altas. Por lo tanto, se debe verificar el estado de cada una de las protecciones presentes en el equipo (o equipos). Para esto, se deben probar cada una de las protecciones, en escenarios controlados para verificar su accionar.

          .col-md-4
            figure
              img(src='@/assets/curso/temas/t3/f6.png', alt='imagen relacionada')
        .row.justify-content-around.align-items-center(titulo="Puestas a tierra")
          .col-md-7.mb-4.mb-md-0
            p La verificación de una correcta puesta a tierra es crítica dentro de la instalación de un equipo o a la hora de realizar un diseño electrónico. Esta parte fundamental de un circuito electrónico es la responsable de guiar las corrientes de un dispositivo hacia una ruta segura, evitando, de esta manera, las tensiones de paso y de contacto que causan descargas eléctricas peligrosas para los usuarios. 

            p Este es el principal motivo por el cual un profesional debe asegurar la existencia de una puesta a tierra, en los dispositivos, y su correcta instalación. 

          .col-md-4
            figure
              img(src='@/assets/curso/temas/t3/f7.png', alt='imagen relacionada')
        .row.justify-content-around.align-items-center(titulo="Pruebas de voltaje")
          .col-md-7.mb-4.mb-md-0
            p Muestran el comportamiento de un dispositivo frente a la excitación de una fuente de energía. Los resultados inconsistentes, en la medición de voltaje, ayudarán al profesional encargado a localizar regiones o elementos que no se encuentren dentro de los rangos habituales y, por ende, se deben revisar de manera más detallada.

            p Para una medición de voltaje adecuada, es necesario el uso de un multímetro o de un voltímetro, conectados entre los extremos del punto, componente o sección, que se quiere medir; en ocasiones, es necesario la adición de resistencias, para ampliar el rango de medida del aparato empleado durante el procedimiento.

          .col-md-4
            figure
              img(src='@/assets/curso/temas/t3/f8.png', alt='imagen relacionada')
        .row.justify-content-around.align-items-center(titulo="Pruebas de corriente")
          .col-md-7.mb-4.mb-md-0
            p Las pruebas de corriente en un equipo electrónico, son importantes gracias a su aporte en la verificación del estado de un dispositivo o elemento. Los valores anómalos en los resultados de medición de corriente, pueden indicar fallas en el funcionamiento del sector, área, elemento, o bloque estudiado.

            p Para las pruebas y/o mediciones de corriente, es necesario el uso de un amperímetro o multímetro, el cual se debe conectar en serie con el circuito en donde se encuentra la corriente que se quiere medir.

            p #[b Nota:] la medición se debe hacer con herramientas adecuadas, el equipo energizado para evitar daños mayores en el equipo y accidentes de todos los agentes que intervienen en el proceso.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t3/f9.png', alt='imagen relacionada')

    .row
      h3 Protocolos

    .row.justify-content-center.align-items-center.mb-5.traslape2
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/t3/f10.svg', alt='imagen relacionada')
      .col-lg-6.tarjeta.bg-c-l.fgris1
        .p-4
          p Una vez se ha identificado el tipo de prueba que se va a realizar, se debe considerar un conjunto de recomendaciones en procura de garantizar que el procedimiento que se llevará a cabo, se realizará de la manera más adecuada y cumpliendo con los protocolos establecidos.

    .row.mt-5
      p A continuación, se presenta el protocolo apropiado para realizar una prueba:
    
    .bg2
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-secundario.bg-c-b.p-4(style="height:370px")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t3/img1.svg' alt='icono relacionado')
          p Organizar u ordenar el área de trabajo.
        .tarjeta.color-secundario.bg-c-b.p-4(style="height:370px")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t3/img2.svg' alt='icono relacionado')
          p Seleccionar herramientas y equipos adecuados para cada uno de los procedimientos.
        .tarjeta.color-secundario.bg-c-b.p-4(style="height:370px")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t3/img3.svg' alt='icono relacionado')
          p Seguir los criterios y normas técnicas de cada uno de los fabricantes.
        .tarjeta.color-secundario.bg-c-b.p-4(style="height:370px")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t3/img4.svg' alt='icono relacionado')
          p Corroborar si las variables físicas asociadas al equipo electrónico están bajo los estándares de calidad requeridos.
        .tarjeta.color-secundario.bg-c-b.p-4(style="height:370px")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t3/img5.svg' alt='icono relacionado')
          p Un dispositivo no funciona de igual manera frente a CC o CA, se debe identificar de forma correcta que tipo de corriente se va a medir (Miguel, A. P. S. (2016).).

    .row.mt-5
      h3 Unidades de medida

    .row.justify-content-center.align-items-center.mb-5.traslape1
      .col-lg-6.tarjeta.bg-c-l.fgris1
        .p-4
          p.b-0 Con los protocolos de prueba listos, se debe identificar qué tipo de variable se va a medir para seleccionar, de forma correcta, el tipo de herramienta y equipo electrónico. Además, este tipo de información ayuda a que el profesional encargado del área de mantenimiento, pueda tomar la decisión más adecuada, de acuerdo con el proceso seleccionado. Dentro de las unidades más comunes, se tienen:
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/t3/f16.svg', alt='imagen relacionada')


    .bg3
      .row.justify-content-center.align-items-center.mb-5.traslape1
        .col-lg-6.tarjeta.bg-c-l.fgris1
          .p-4
            p.b-0 Con las unidades de medida identificadas, para cada uno de los procesos de las pruebas establecidas, se deben asociar las variables físicas propias de cada uno de los procesos; esto con el fin de garantizar el método adecuado para la medición de cada una de las variables. Las variables más comunes son:

        .col-lg-4(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/f17.svg', alt='imagen relacionada')

    .row.mt-5
      p Un factor adicional para tener en cuenta dentro de las pruebas, es el rango en el cual la variable o variables a medir, deben encontrarse. También se debe verificar el rango máximo y mínimo, que son capaces de soportar las herramientas o equipos de medición. Con esto, se garantizan resultados precisos y resguardo de la integridad de los dispositivos y operarios.

    .row.mt-5
      h3 Interpretación

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

    .row.mt-5
      h3 Funcionamiento y puesta en marcha

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p Al igual que los elementos electrónicos, #[b los equipos tienen algunos parámetros o rangos que se deben asegurar para garantizar el correcto funcionamiento de los dispositivos]. Estos parámetros incluyen rangos operativos que sí o sí se deben asegurar para la puesta en marcha del dispositivo. Algunas de las más comunes son: #[b tensión, corriente y frecuencia]. Adicionalmente, se debe corroborar que los rangos de medición o los rangos para los que fue diseñado el equipo electrónico se cumplan dentro de las instalaciones donde está ubicado; lo anterior, busca #[b mantener la integridad del aparato electrónico y de las instalaciones eléctricas]. Toda esta información se encuentra depositada en el manual de usuario o ficha técnica del equipo electrónico.

        p Realizadas las intervenciones que garantizan el correcto funcionamiento de los equipos, habiendo aplicado las prácticas adecuadas para el manejo de los dispositivos y habiendo hecho las instalaciones idóneas para la ubicación del dispositivo, se deben probar los equipos bajo las condiciones de uso y diseño. 

        p De esta manera, se podrá observar el comportamiento del equipo y verificar si su respuesta es la correcta. Al finalizar las pruebas de la puesta en marcha del dispositivo, el profesional encargado tomará decisiones sobre si el equipo es apto o no, de acuerdo con los resultados.

      .col-lg-5
        figure
          img(src='@/assets/curso/temas/t3/f21.png', alt='imagen relacionada')

  
    .bg1
      .row.mt-5
        h3 Protocolo se seguridad

        p Un apartado muy importante que el profesional debe tener en cuenta y seguir en todas las intervenciones a realizar, son los protocolos de seguridad y salud en el trabajo, los cuales buscan reducir los accidentes en cada uno de los procesos.

        p A continuación, se presentan las recomendaciones que deben ser tenidas en cuenta en la implementación del protocolo de seguridad:

    .row.justify-content-center.mb-5
      .col-lg-11.position-relative
        .avatar
          figure
            img(src="@/assets/curso/temas/t3/f22.png", alt="alt").img250
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-9
              p.text-card Para la prueba de los equipos electrónicos estas normas son de suma importancia ya que evitan lesiones en los operarios y técnicos de mantenimiento.

        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center  
            .col-9
              p.text-card Dentro de las mediciones, se debe tener claridad de cómo y en qué condiciones realizar este proceso sin comprometer la integridad del equipo y del profesional como, por ejemplo, la medición de resistencias, capacitancias e inductancias, se deben realizar sin tener el equipo electrónico conectado al suministro eléctrico y esperando algunos minutos mientras se descargan cada uno de los acumuladores de energía del sistema. Este simple acto reduce, en gran medida, las descargas eléctricas y, por ende, los accidentes.

        .crd.crd--avatarHorizontal2.py-4
          .row.align-items-center
            
            .col-9
              p.text-card  Este tipo de recomendaciones o normas se encuentran disponibles en el manual de usuario u hoja de datos del dispositivo electrónico, es por esto que se debe tener a la mano cada uno de los documentos asociados al equipo, pieza o elemento a intervenir.

        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            
            .col-9
              p.text-card  Además de tener en cuenta las recomendaciones para resguardar la seguridad del o los profesionales, también es importante identificar los riesgos laborales. Cualquier actividad física o emocional puede derivar en daños, los cuales deben prevenirse y estudiarse para evitar, en lo posible, su producción.


        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            
            .col-9
              p.text-card  Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.

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
