<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Equipos electrónicos

    .bloque-texto-g.bgr-cajon.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/f1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.fblanco
        p.mb-0 Los equipos eléctricos y electrónicos, son dispositivos compuestos por una buena cantidad de elementos dispuestos en circuitos. La función de este tipo de aparatos es la conversión, el procesamiento o el aprovechamiento de señales eléctricas, para la realización de procesos lógicos o informáticos.

    p.mt-5 En el caso del sector eléctrico, su función es la de transportar, almacenar, transmitir o convertir energía eléctrica. Esta sección se encarga de suministrar los elementos necesarios para poder realizar la clasificación de los equipos electrónicos, presentes en el área de trabajo, la identificación e interpretación de los bloques funcionales, propios de cada uno de los dispositivos, descifrar y comprender los parámetros respectivos de cada aparato electrónico y las normas asociadas con la garantía, presente en los equipos electrónicos; todos estos son temas importantes a la hora de describir cada uno de los dispositivos eléctricos y electrónicos, presentes en una organización.

    .row.mt-5
      h3 Los equipos o dispositivos 



    .row.justify-content-center.align-items-center.mb-5.traslape1
      .col-lg-6.tarjeta.bg-c-l.fgris1
        .p-4
          p.mb-0 Antes de realizar cualquier tipo de procedimiento a un equipo electrónico, este debe ser identificado y clasificado, con el fin de elegir el procedimiento adecuado para su diagnóstico o mantenimiento. Entonces, se deben conocer sus principales características de funcionamiento, el sector en el cual el dispositivo electrónico realiza su accionar y, de acuerdo con estos criterios, agruparlos para realizar las actividades necesarias que aseguren su óptimo desempeño. 
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/t1/f2.svg', alt='imagen relacionada')  

    p A continuación, se presentan los grupos de equipos teniendo en cuenta las actividades que realizan:

    .tarjeta.slider-bg-1.p-4(data-aos="zoom-in")
      SlyderA(tipo='b')
        .row.justify-content-between.align-items-center
          .col-md-7.mb-4.mb-md-0.ms-5
            h4 Electrodomésticos

            p.text-small En este primer grupo, se encuentran todos aquellos equipos electrónicos destinados a mejorar, automatizar o agilizar tareas domésticas. Se caracterizan por su fácil uso e instalación, pensados para que una persona sin conocimientos sobre electrónica o eléctrica, pueda poner en marcha. Adicionalmente, este tipo de dispositivos son los más comunes de la lista que se va a presentar. Su uso es indispensable en casi todas las actividades que se desarrollan en la vida cotidiana de cualquier persona, dentro del hogar, siendo esta característica, su principal atributo de identificación.
 
            p.text-small En conclusión, los electrodomésticos son aparatos electrónicos presentes en los hogares, que ayudan en las tareas diarias, facilitando su ejecución.
          
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t1/f3.png', alt='imagen relacionada')
        .row.justify-content-between.align-items-center
          .col-md-7.mb-4.mb-md-0.ms-5
            h4 Informática y telecomunicaciones
            p.text-small Son dispositivos electrónicos diseñados para la comunicación y el tratamiento de la información. 

            p.text-small En primer lugar, se tienen los aparatos informáticos, cuya función es la de recibir, emitir, almacenar, procesar y transmitir la información de un usuario o empresa (Cesuma, 2022). El segundo grupo, son los equipos destinados a las telecomunicaciones, los cuales cumplen con el rol específico de transmitir la información de un lugar a otro, a través de un medio.

            p.text-small Ambos grupos, por lo general, trabajan juntos, dada su importancia en el tratamiento de la información, tanto personal como empresarial. Además, la necesidad de solucionar problemas con rapidez y enlazar fuentes distantes de manera óptima, los vuelve indispensables en las organizaciones.
            
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t1/f4.png', alt='imagen relacionada')
        .row.justify-content-between.align-items-center
          .col-md-7.mb-4.mb-md-0.ms-5
            h4 Consumo
            p.text-small Son equipos electrónicos destinados a uso cotidiano, se diferencian de los electrodomésticos en que, los de consumo, ayudan a automatizar procesos y no están hechos, solamente, para que un usuario los compre y/o use durante las actividades diarias. 

            p.text-small En vista de la dependencia de tecnología que tienen los seres humanos, en la actualidad, hay todo tipo de equipos electrónicos catalogados como de consumo como, por ejemplo, celulares, relojes inteligentes, dispositivos de vigilancia y seguimiento, aparatos automatizados para oficinas y hogar, cámaras, amplificadores, micrófonos, etc.

          .col-md-4
            figure
              img(src='@/assets/curso/temas/t1/f5.png', alt='imagen relacionada')
        .row.justify-content-between.align-items-center
          .col-md-7.mb-4.mb-md-0.ms-5
            h4 Iluminación
            p.text-small En este grupo de dispositivos electrónicos, se encuentran todos aquellos elementos que convierten la energía eléctrica en energía luminosa y la controlan. Estos aparatos resultan de suma importancia debido a que la mayor parte de la información que es percibida por el ser humano, se hace por medio del sentido de la vista. Debido a su importancia, en la percepción humana, este tipo de elementos son habituales en muchos entornos como, por ejemplo, tipos de luces, bombillas inteligentes, reproductores de video, pantallas de señalización o información, etc.

          .col-md-4
            figure
              img(src='@/assets/curso/temas/t1/f6.png', alt='imagen relacionada')
        .row.justify-content-between.align-items-center
          .col-md-7.mb-4.mb-md-0.ms-5
            h4 Herramientas
            p.text-small Ayudan en tareas que requieren gran desgaste físico, precisión o monitoreo de variables físicas. Resultan de gran importancia debido a su uso en el proceso de las pruebas a las variables físicas asociadas a los aparatos, es decir, a la medición de variables. Por tal razón, se debe aprender a identificar el tipo de instrumento que mejor se comporte en el entorno a trabajar, o los disponibles en el sitio, de acuerdo con la forma en la que se presentan y se miden los resultados que se tienen.

            p.text-small Tales herramientas pueden ser analógicas o digitales: voltímetros, conversores, velocímetros, etc.
          
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t1/f7.png', alt='imagen relacionada')
        
        .row.justify-content-between.align-items-center
          .col-md-7.mb-4.mb-md-0.ms-5
            ul.lista-ul--color
              li
                i.fas.fa-circle.text-small.cab
                p.mb-0: b Instrumentos de medición analógicos 
            p.text-small Los instrumentos de medición analógicos se caracterizan por presentar los resultados de la variable física, medida mediante una aguja móvil que se desplaza a lo largo de una escala graduada. Lo anterior, se debe a los cambios de corriente provocados por la variable a medir que circulan por una bobina centrada en un campo magnético y, gracias a la interacción entre el campo magnético variable de la bobina y el campo magnético fijo producido por un imán se genera el desplazamiento de la aguja. Este tipo de instrumentos son los más habituales dentro de un entorno laboral, aunque en la actualidad la presencia de los dispositivos digitales ha comenzado a desplazar la utilización de este tipo de herramientas. El principal problema en el uso de estos aparatos electrónicos es la baja precisión y la dificultad de leer de manera correcta los resultados proporcionados por el equipo. (Miguel, A. P. S. 2016)

          .col-md-4
            figure
              img(src='@/assets/curso/temas/t1/f8.png', alt='imagen relacionada')
        .row.justify-content-between.align-items-center
          .col-md-7.mb-4.mb-md-0.ms-5
            ul.lista-ul--color
              li
                i.fas.fa-circle.text-small.cab
                p.mb-0: b Instrumentos de medición digitales 
            p.text-small A diferencia de los anteriores, los instrumentos de medición digitales no emplean ningún tipo de componente mecánico para la obtención de la medida. En su defecto, este tipo de herramientas emplean una serie de complejos circuitos electrónicos integrados que permiten el uso de pantallas o display para la visualización de los resultados, lo que facilita la lectura de estos haciendo que su aplicación dentro de los procesos de diagnóstico y mantenimiento sean más frecuentes, adicionalmente, permiten la recolección de datos de manera más rápida y efectiva. Por último, al no emplear partes mecánicas estos dispositivos son más robustos y fuertes que su contraparte analógica. (Miguel, A. P. S. 2016)

          .col-md-4
            figure
              img(src='@/assets/curso/temas/t1/f9.png', alt='imagen relacionada')
        .row.justify-content-between.align-items-center
          .col-md-7.mb-4.mb-md-0.ms-5
            h4 Médicos
            p.text-small Estos dispositivos se caracterizan por tener una alta precisión y seguridad; dentro de este tipo de equipos se pueden encontrar herramientas, elementos electromecánicos y maquinarias destinadas al monitoreo de variables fisiológicas. Estos equipos se agrupan o se clasifican según el riesgo que representen para el paciente. A pesar de que estos dispositivos electrónicos no son los más comunes de observar se debe tener mucho cuidado a la hora de realizar o agendar cualquier tipo de procedimiento, esto pues, conserva la integridad, confianza, fidelidad y precisión con la cual fue diseñado es crucial, esto recordando que en muchas ocasiones la vida de los pacientes depende de la lectura, procesamiento y visualización de los resultados presentados por el equipo.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t1/f10.png', alt='imagen relacionada')
        .row.justify-content-between.align-items-center
          .col-md-7.mb-4.mb-md-0.ms-5
            h4 Juguetería
            p.text-small Por último, pese a que se pueden interpretar como elementos de consumo se tiene los juguetes, estos equipos son todos aquellos dispositivos electrónicos destinados al fortalecimiento del desarrollo, habilidades o recreación. A diferencia de lo que se suele pensar cuando se escucha la categoría juguetería, estos aparatos electrónicos favorecen el desarrollo de habilidades cognitivas como la memoria, la percepción, concentración, etc. También promueven el desarrollo de habilidades físicas como la coordinación, equilibrio y las habilidades motoras necesarias para que un infante comience a caminar o gatear. (La Importancia del juego y los juguetes | CAIJ - Cámara argentina de la industria del juguete, s. f.)
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t1/f11.png', alt='imagen relacionada')

    .row.mt-5
      h3 Bloques funcionales y parámetros de interpretación


    .row.justify-content-center.align-items-center.mb-5.traslape1
      .col-lg-6.tarjeta.bg-c-l.fgris1
        .p-4
          p.mb-0 Los #[b bloques funcionales] de un equipo electrónico, #[b indican aquellas secciones en donde un proceso se lleva a cabo]; por ejemplo: #[b etapas de potencia, procesamiento de señales, filtrado, alimentación, control, etc]. Todos los bloques funcionales de un equipo electrónico deben estar conectados entre sí de forma lógica, y siguiendo la secuencia correcta de la estructura del dispositivo. De acuerdo con lo anterior, #[b este tipo de bloques resultan fundamentales para el funcionamiento del equipo] (de ahí su nombre). Así pues, todas las etapas posteriores, dependerán de los bloques funcionales anteriores.

      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/t1/f12.svg', alt='imagen relacionada')  

    .row.mt-5
      p Los parámetros de interpretación son aquellos datos importantes que se deben tener en cuenta a la hora de verificar el funcionamiento de los equipos eléctricos y electrónicos. Estos datos o parámetros indican la tensión, corriente, frecuencia y demás propiedades que se deben garantizar para el correcto funcionamiento de un dispositivo. Sin estos parámetros asegurados, no se debe intervenir el equipo. 


    .row.justify-content-center.align-items-center.mb-5.traslape2
      .col-lg-5(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/t1/f13.svg', alt='imagen relacionada')  
      .col-lg-6.tarjeta.bg-c-r.fcab30
        .p-4
          p.mb-0 Para el caso de componentes electrónicos se deben revisar las condiciones de funcionamiento en la hoja de datos, dispuesta por el fabricante y verificar si estas se cumplen o no.
          br
          p En cada caso se recomienda seguir el manual o las indicaciones del fabricante para no comprometer la integridad del aparato electrónico y la seguridad de los agentes encargados de la revisión, manipulación o funcionamiento del dispositivo.

    .row.mt-5
      h3 Políticas de garantía

      p Las políticas de garantía de una empresa, buscan asegurar el correcto estado de un equipo electrónico. Para esto, cada una de las empresas establece pruebas dentro de los procesos de fabricación, para evitar defectos o fallas críticas. Para el técnico del área de mantenimiento, es muy importante seguir recomendaciones, manuales y asesorías, durante la instalación y puesta en marcha de los equipos electrónicos, lo que favorece la conservación de la integridad de los equipos. 

    .row.justify-content-center.align-items-center.mb-5.traslape1
      .col-lg-6.tarjeta.bg-c-l.fgris1
        .p-4
          p.mb-0 Cuando un equipo o dispositivo llega al lugar de su instalación con defectos de fabricación, funcionamiento o aplicación, es responsabilidad del fabricante cambiar el producto. Los profesionales encargados del mantenimiento o instalación de los aparatos electrónicos, deben asegurar que todas las condiciones recomendadas por el fabricante se cumplan a cabalidad, para no incurrir en violaciones a las políticas de garantía de un equipo.
          
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/t1/f14.svg', alt='imagen relacionada')  
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
