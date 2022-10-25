export default {
  global: {
    componenteFormativo: 'Diagnóstico de equipos electrónicos',
    descripcionCurso:
      'Los equipos electrónicos son fundamentales en la producción de una empresa, por esto es necesario revisar de manera periódica cada uno de estos dispositivos en busca de fallas o imperfecciones que puedan provocar un mal desempeño y así, mitigar el desgaste de los equipos provocados por el uso excesivo, minimizar costos operacionales, maximizar la productividad y reducir el tiempo de las intervenciones realizadas.',
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
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Equipos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Bloques funcionales',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Parámetros de interpretación',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Políticas de garantía',
            hash: 't_1_4',
          },
        ],
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
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Pruebas',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Protocolos ',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Unidades de medida',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Variables y rangos',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Interpretación',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Funcionamiento',
            hash: 't_3_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.7',
            titulo: 'Puesta en marcha',
            hash: 't_3_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.8',
            titulo: 'Protocolo de seguridad',
            hash: 't_3_8',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Gestión de mantenimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Características de la gestión de mantenimiento',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Planes',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Costos y presupuestos',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Repuestos, piezas y documentos',
            hash: 't_4_4',
          },
        ],
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
      tema: 'Protocolos de seguridad',
      referencia:
        'Nl, D. (2021, 18 marzo). <em>Veiligheidsmaatregelen bij het werken met elektrische apparatuur</em> | Dell Nederland. Recuperado 13 de septiembre de 2022',
      tipo: 'Artículo ',
      link:
        'https://www.dell.com/support/kbdoc/es-co/000137973/precauciones-de-seguridad-cuando-se-trabaja-con-el-equipo-el%C3%A9ctrico',
    },
    {
      tema: 'Protocolos de seguridad',
      referencia:
        'Aprende Institute. (2022, 22 julio). <em>Herramientas utilizadas en la reparación electrónica</em>.',
      tipo: 'Página web',
      link:
        'https://aprende.com/blog/oficios/reparacion-electronica/herramientas-utilizadas-en-la-reparacion-electronica/',
    },
    {
      tema: 'Pruebas y mediciones',
      referencia:
        '<em>Cómo reparar una lámpara LED </em>| Aprende Institute. (2021, 3 septiembre). [Vídeo]. YouTube.',
      tipo: 'video',
      link:
        'https://www.youtube.com/watch?v=CvZeHIvXL60&list=PLntfA_AupyFvHBOBC5x4UqIYeIHaXnLYn',
    },
    {
      tema: 'Mantenimiento de equipos',
      referencia:
        'Renovetec. (2 de noviembre de 2020). <em>MANTENIMIENTO DE SISTEMAS ELECTRÓNICOS (INSTRUMENTACIÓN Y CONTROL)</em>. (). [Vídeo]. YouTube.',
      tipo: 'video',
      link: 'https://www.youtube.com/watch?v=2NlDkTy0lPc',
    },
    {
      tema: 'Mantenimiento de equipos',
      referencia:
        'Miguel, A. P. S. (2016). <em>Electrónica aplicada</em> (Edición número 2). Paraninfo.',
      tipo: 'Libro',
      link:
        'https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/library/filter?category=ingenieria-electrica-electronica-y-telecomunicaciones',
    },
    {
      tema: 'Puesta a tierra',
      referencia:
        'Levy, R. R. (2020). <em>Puestas a tierra: criterios de seguridad eléctrica y técnica</em>. Jorge Sarmiento Editor - Universitas.',
      tipo: 'Libro',
      link:
        'https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/reader/puestas-a-tierra-seguridad-electrica-y-tecnica-ruben-levy?location=1',
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
        'Agudelo Ríos, L. H. (2001). <em>Importancia de las telecomunicaciones en el desarrollo universal</em>. Ciencia e Ingeniería Neogranadina, 11, 13-15.',
      link: 'https://doi.org/10.18359/rcin.1349',
    },
    {
      referencia:
        'Alcalde San Miguel, P. (2016). <em>Electrónica aplicada</em>. (2 Ed). Madrid: Paraninfo.',
    },
    {
      referencia:
        'Cámara Argentina de la Industria del Juguete [CAIJ]. (s.f.). <em>La Importancia del juego y los juguetes</em>.  Recuperado 10 de septiembre de 2022, de',
      link:
        'https://caij.org.ar/ejes-de-trabajo/valoracion-del-juguete/la-importancia-de-los-juguetes-y-el-juego/',
    },
    {
      referencia:
        'Centro de Estudios Superiores Maranathá [Cesuma], A. (2022, 21 junio). <em>Sistema informático: características, funciones, clasificación y etapas de desarrollo</em>. Recuperado 10 de septiembre de 2022, de',
      link:
        'https://www.cesuma.mx/blog/sistema-informatico-caracteristicas-funciones-clasificacion-y-etapas-de-desarrollo.html',
    },
    {
      referencia:
        'García, F. C., Tárraga, D., Gil, J., Madrid, P. L. C., FERNÁNDEZ GARCÍA, C., LASSO TARRAGA, D., & MORENO GIL, J. (2016). <em>Instalaciones eléctricas interiores</em> 4.a edición. Paraninfo.',
    },
    {
      referencia:
        'Instituto Renovetec IRIM (s.f). <em>¿Qué es un plan de mantenimiento? ¿Quieres saberlo todo sobre la elaboración de un plan de mantenimiento?</em> Recuperado el 22 de septiembre de 2022 de',
      link:
        'http://www.renovetec.com/irim/sobre-mantenimiento/planes-de-mantenimiento/que-es-un-plan-de-mantenimiento',
    },
    {
      referencia:
        'Levy, R. R. (2020). <em>Puestas a tierra: criterios de seguridad eléctrica y técnica</em>. Jorge Sarmiento Editor - Universitas.',
    },
    {
      referencia:
        '<em>La Importancia del juego y los juguetes</em> | CAIJ - Cámara argentina de la industria del juguete. (s. f.). Recuperado 10 de septiembre de 2022, de',
      link:
        'https://caij.org.ar/ejes-de-trabajo/valoracion-del-juguete/la-importancia-de-los-juguetes-y-el-juego/',
    },
    {
      referencia:
        'Machado, P. (2022, 5 abril). <em>¿Cuáles Son Los Diferentes Tipos de Mantenimiento?</em> [2022]. Infraspeak Blog.',
      link: 'https://blog.infraspeak.com/es/tipos-de-mantenimiento/',
    },
    {
      referencia:
        'Revista educativa Caracteristicasdel.com. (2021). <em>Características del Mantenimiento Preventivo</em>. Recuperado el 22 de septiembre de 2022 de',
      link:
        'https://www.caracteristicasdel.com/negocios/caracteristicas_del_mantenimiento_preventivo.html',
    },
    {
      referencia:
        'Revista educativa Caracteristicasdel.com. (2021). <em>Características de cosas y términos</em>. Recuperado el 22 de septiembre de 2022 de',
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
