export default {
  global: {
    componenteFormativo: 'Diagnóstico de equipos electrónicos',
    descripcionCurso:
      'Los equipos electrónicos son fundamentales en la producción de una empresa; por esta razón, es necesario revisar, de manera periódica, cada uno de estos dispositivos, en busca de fallas o imperfecciones que puedan provocar un mal desempeño y, de esta manera, mitigar el desgaste de los equipos provocados por el uso excesivo, como también minimizar costos operacionales, maximizar la productividad y reducir el tiempo de las intervenciones realizadas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-img.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/banner-bg.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Equipos electrónicos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Fallas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Pruebas y mediciones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Gestión de mantenimiento',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Pruebas y mediciones',
      referencia:
        'Dell technologies. (2021). <em>Precauciones de seguridad al trabajar con equipos</em>.',
      tipo: 'Artículo',
      link:
        'https://www.dell.com/support/kbdoc/es-co/000137973/precauciones-de-seguridad-cuando-se-trabaja-con-el-equipo-el%C3%A9ctrico',
    },
    {
      tema: 'Gestión de mantenimiento',
      referencia:
        'Aprende Institute. (s.f.). <em>Herramientas utilizadas en la reparación electrónica</em>. ',
      tipo: 'Página web',
      link:
        'https://aprende.com/blog/oficios/reparacion-electronica/herramientas-utilizadas-en-la-reparacion-electronica/',
    },
    {
      tema: 'Gestión de mantenimiento',
      referencia:
        'Aprende Institute Oficios. (2021). <em>Cómo reparar una lámpara LED | Aprende Institute</em> [video]. YouTube.',
      tipo: 'video',
      link:
        'https://www.youtube.com/watch?v=CvZeHIvXL60&list=PLntfA_AupyFvHBOBC5x4UqIYeIHaXnLYn',
    },
    {
      tema: 'Gestión de mantenimiento',
      referencia:
        'Renovetec. (2020). <em>Mantenimiento de sistemas electrónicos (instrumentación y control</em> [video]. YouTube.',
      tipo: 'video',
      link: 'https://www.youtube.com/watch?v=2NlDkTy0lPc',
    },
    {
      tema: 'Gestión de mantenimiento',
      referencia:
        'Miguel, A. (2016). <em>Electrónica aplicada</em>. Paraninfo.',
      tipo: 'Libro',
      link:
        'https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/library/filter?category=ingenieria-electrica-electronica-y-telecomunicaciones',
    },
    {
      tema: 'Pruebas y mediciones',
      referencia:
        'Levy, R. (2020). <em>Puestas a tierra: criterios de seguridad eléctrica y técnica</em>. Universitas.',
      tipo: 'Libro',
      link:
        'https://login.bdigital.sena.edu.co/login?qurl=https://www.alphaeditorialcloud.com%2freader%2fpuestas-a-tierra-seguridad-electrica-y-tecnica-ruben-levy%3flocation%3d1',
    },
  ],
  glosario: [
    {
      termino: 'Acumulador',
      significado:
        'es la propiedad que tiene un dispositivo para almacenar energía eléctrica.',
    },
    {
      termino: 'Código error',
      significado:
        'información suministrada por los fabricantes para ayudar a localizar el área afectada o averiada en un equipo.',
    },
    {
      termino: 'Confiabilidad',
      significado:
        'sinónimo de seguridad, se atribuye a un equipo electrónico cuando este funciona con precisión.',
    },
    {
      termino: 'Costo',
      significado:
        'es el valor que representa para una organización el adquirir o generar un producto, servicio o acción.',
    },
    {
      termino: 'Frecuencia',
      significado:
        'se refiere a la cantidad de veces con las que se debe realzar un procedimiento de cualquier tipo a un equipo electrónico.',
    },
    {
      termino: 'Fisiológicas',
      significado:
        'es el estudio de todos los procesos que se desempeñan en un sistema vivo, por ejemplo, órganos, tejidos y células.',
    },
    {
      termino: 'Inspección',
      significado:
        'hace referencias a las acciones llevadas a cabo para verificar el estado de un producto, proceso o servicio.',
    },
    {
      termino: 'Mantenimiento correctivo',
      significado:
        'se realiza cuando un equipo electrónico deja de funcionar por completo o su desempeño no es el adecuado.',
    },
    {
      termino: 'Mantenimiento preventivo',
      significado:
        'se realiza antes de que una falla se presente en un equipo electrónico con el fin de evitar este suceso.',
    },
    {
      termino: 'Presupuesto',
      significado:
        'hace referencia a una estimación de los gastos a realizar en un plan manteniendo un equilibrio contable, es decir, que los gastos a realizar en un periodo se puedan cubrir con los ingresos. ',
    },
    {
      termino: 'Protocolo de seguridad',
      significado:
        'normas que buscan reducir los accidentes o riesgos laborales dentro de una organización.',
    },
    {
      termino: 'Rango',
      significado:
        'valores dentro de los cuales un equipo o herramienta funciona de manera correcta y precisa.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agudelo, L. (2001). Importancia de las telecomunicaciones en el desarrollo universal. <em>Ciencia e Ingeniería Neogranadina, 11</em>, p. 13-15.',
      link: 'https://doi.org/10.18359/rcin.1349',
    },
    {
      referencia:
        'Alcalde, P. (2016). <em>Electrónica aplicada</em>. Paraninfo.',
      link: '',
    },
    {
      referencia:
        'Cámara Argentina de la Industria del Juguete. (s.f.). <em>La Importancia del juego y los juguetes</em>.  CAIJ. ',
      link:
        'https://caij.org.ar/ejes-de-trabajo/valoracion-del-juguete/la-importancia-de-los-juguetes-y-el-juego/',
    },
    {
      referencia:
        'Cortés, D. (2022). Sistema informático: características, funciones, clasificación y etapas de desarrollo. <em>Cesuma</em>.',
      link:
        'https://www.cesuma.mx/blog/sistema-informatico-caracteristicas-funciones-clasificacion-y-etapas-de-desarrollo.html',
    },
    {
      referencia:
        'Instituto Renovetec.  (s.f). <em>¿Qué es un plan de mantenimiento? ¿Quieres saberlo todo sobre la elaboración de un plan de mantenimiento?</em>',
      link:
        'http://www.renovetec.com/irim/sobre-mantenimiento/planes-de-mantenimiento/que-es-un-plan-de-mantenimiento',
    },
    {
      referencia:
        'Levy, R. (2020). <em>Puestas a tierra: criterios de seguridad eléctrica y técnica</em>. Universitas.',
      link: '',
    },
    {
      referencia:
        'Machado, P. (2022, abril 5). ¿Cuáles Son Los Diferentes Tipos de Mantenimiento? [Web log post]. <em>Infraspeak</em>.',
      link: 'https://blog.infraspeak.com/es/tipos-de-mantenimiento/ ',
    },
    {
      referencia:
        'Madrid, P., Fernández, C., Lasso, D., & Moreno, J. (2016). <em>Instalaciones eléctricas interiores</em>. Paraninfo.',
      link: '',
    },
    {
      referencia:
        'Revista educativa Caracteristicasdel. (2021). <em>Características del Mantenimiento Preventivo</em>.',
      link:
        'https://www.caracteristicasdel.com/negocios/caracteristicas_del_mantenimiento_preventivo.html',
    },
    {
      referencia:
        'Revista educativa Caracteristicasdel. (2021). <em>Características de cosas y términos</em>.',
      link:
        'https://www.caracteristicasdel.com/?s=Caracter%C3%ADsticas+de+cosas+y+t%C3%A9rminos',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
