PORTAL WEB ILOBASCO TRAVEL

Contenido:
Segundo entregable del portal Web Ilobasco Travel

Lic. Criseyda Guadalupe Araujo
Asignatura:
Módulo



Ilobasco Travel - Proyecto de Portal Web de Turísmo

Desarrolladores:
-	José Rolando Velasco Peña
-	Flor Estefany Campos Palacios

Descripción:
Ilobasco Travel es un portal web creado para promover el turismo local en Ilobasco, El Salvador,
dirigido tanto a visitantes nacionales como extranjeros. Nuestro objetivo es dar a conocer los diversos atractivos turísticos del 
municipio, ofreciendo información detallada sobre restaurantes, sitios turísticos, actividades recreativas, artesanías locales 
y fichas informativas de interés. Además, proporciona la ubicación de cada sitio turístico, para que los visitantes tengan una
experiencia acogedora y completa, conociendo todas las actividades disponibles y asegurando que su visita sea lo más satisfactoria posible.
------------------------------------------------------------------------------------------------------------------------------------------------
Funciones Implementadas 

•	Menú desplegable: Hemos integrado un menú desplegable justamente en el apartado del menú “Más” y uno para dispositivos 
    Móviles en (@media), de pantallas de 470px

•	Registro e inicio de sesión (simulados): Hemos implementado un inicio de sesión junto a un registro, que su próxima
    implementación es agregar una base de datos par que este almacene datos reales:

•	Ventanas (Modales): El portal Ilobasco Travel cuenta en la sección de “Activades Turísticas”, ventanas la tarares que se
    abre con los botones, que contienen un carrusel de imágenes, información he ubicación del sitio turístico.

•	Calificación: Se incluye un sistema de calificación mediante íconos de corazón, que en futuras versiones estará conectado a
    una base de datos para almacenar las valoraciones de los usuarios.

•	Movilidad a distintas páginas: El portal cuenta con paginas de “Artesanías”, “Gastronomía”, “Contacto”, "Cuía Práctica" y “Home”

Características Principales:

1. Sección de actividades y lugares turísticos con: Carruseles de imágenes. 
   Botones "CONOCE MÁS" que abren ventanas modales con información 
   detallada. Valoración y comentarios simulados con estrellas y iconos.
2. Fichas informativas dinámicas con carrusel propio.
3. Sección de artesanías locales con enlace a página dedicada.
4. Footer con enlaces, redes sociales y derechos de autor.
5. Modales de inicio de sesión y registro de usuarios.
6. Mapas de ubicación integrados con Google Maps.
7. Diseño responsivo y moderno, adaptado a dispositivos móviles y escritorio.
-------------------------------------------------------------------------------------------------------------------------------------------------
Estructura de Archivos:
/PORTAL_WEB_TURISMO
├─ Imagenes_Proyecto/  --> Carpeta con imágenes y banners
├─ node_modules/       --> Carpeta con de Node.js para base de datos
│  ├─ index.html       --> Página principal
│  │  
│  ├─ Artesanias-.html       --> Página de artesanías 
│  ├─ Gastronomía.html       --> Página de gastronomía local
│  ├─ GuiaTuristica.html     --> Página de guía Práctica
│  ├─ Contacto.html          --> Página de Contacto
│  ├─ Actividad.js           --> Script principal para carruseles, modales y calificación, menú
│  ├─ ActividadArte.js       --> Script principal para carruseles, modales, menú
│  ├─ ActividadContac.js     --> Script principal para carruseles, modales, menú
│  ├─ ActividadGastrono.js   --> Script principal para carruseles, modales, menú
│  ├─ ActividadGuiaPrac.js   --> Script principal para carruseles, modales, menú
│  ├─ styleHome.css          --> Estilos generales del sitio 
│  ├─ styleArtesania.css     --> Estilos generales de la subpagina Artesanía 
│  ├─ styleContacto.css      --> Estilos generales de la pagina Contacto
│  ├─ styleGastrono.css      --> Estilos generales de la pagina gastronomía
│  ├─ GuiaPractic.css        --> Estilos generales de la pagina GuiaTuristica


Estructura de Portal web:

index.html (Inicio)
│
├── Artesanías
│     ├── Home
│     ├── Gastronomía
│     ├── Guía Práctica 
│     └─ Contacto
├── Gastronomía
│     ├── Home
│     ├── Artesanías
│     ├── Guía Práctica 
│     └─ Contacto
├── Guía Práctica
│     ├── Home
│     ├── Artesanías
│     └── Gastronomía
│     ├── Contacto

└── Contacto
│     ├── Home
│     ├── Artesanías
│     └── Gastronomía
│     ├── Guía Práctica 

Descripción de las tecnologías utilizadas
HTML5: 
Se utilizó para estructurar el contenido del portal web, organizando los encabezados, 
párrafos, imágenes y enlaces de cada sección. Su uso fue fundamental para el desarrollo de 
todas las páginas, aplicando etiquetas semánticas, así como identificadores (id) y clases
 (class) que permitieron una mejor organización y vinculación con las hojas de estilo y los 
 scripts en los otros archivos, como en lazar Css y JavaScript, para integrar etilo y actividad 
 a las páginas.
CSS3: 
Se empleó para diseñar y dar estilo al portal web “Ilobasco Travel”, definiendo los colores, 
tipografías, márgenes y la disposición visual de cada elemento. Gracias a CSS3 fue posible
construir un diseño atractivo, ordenado y coherente con la temática del sitio. Se implementaron
herramientas modernas como Flexbox y CSS Grid, que permitieron organizar de forma flexible 
adaptable las secciones principales del portal, tales como los contenedores, el menú de
navegación y las galerías de contenido. Asimismo, se utilizaron clases e identificadores (ID) 
definidos en el código HTML para aplicar estilos específicos a distintos componentes del sitio. 
En resumen, CSS3 constituye la base estética del portal web; sin él, las páginas carecerían de form
color y diseño visual, elementos esenciales para lograr una experiencia agradable y moderna para el
usuario.

JavaScript: 
Se utilizó para dotar al portal web de interactividad y dinamismo, permitiendo que los elementos respondieran a las acciones del usuario en tiempo real. Gracias a JavaScript se implementaron diversas funcionalidades clave, como la validación de formularios, la gestión de sesiones e inicio de sesión, la creación de menús desplegables y la aparición de elementos mediante instrucciones programadas.
Además, se empleó este lenguaje para controlar componentes interactivos como carruseles de imágenes, ventanas modales, sistemas de registro e inicio de sesión, e incluso funciones avanzadas como botones de “me gusta” o calificaciones dinámicas. Sin el uso de JavaScript, el portal sería únicamente estático; con él, se logra una experiencia más fluida, atractiva y funcional para el usuario.
Git/ GitHub / GitHub Pages:

GitHub sirvió como plataforma en línea donde se almacenó el repositorio del proyecto “Portal_Web_Ilobasco_Travel”

Instrucciones de Uso:
1. Abrir el archivo `index.html` en cualquier navegador web moderno.
2. Explorar las secciones de actividades y restaurantes.
3. Hacer clic en "CONOCE MÁS" para abrir ventanas con información detallada.
4. Usar los carruseles para navegar entre imágenes.
5. Revisar mapas de ubicación en cada sección.
6. Registrarse o iniciar sesión si se desea probar los modales interactivos.

Requisitos:

- Navegador moderno (Chrome, Firefox, Edge, Safari).
- Conexión a internet para cargar Google Maps.
- No requiere servidor web para funciones básicas (solo archivos locales).

Notas:
- Los enlaces locales deben mantener la misma estructura de carpetas para
  funcionar correctamente.
- Se recomienda mantener todos los archivos y carpetas juntos para evitar
  errores de ruta.

Enlace a Githud Pages:
https://joserolandovelascopena-code.github.io/Portal_Web_Ilobasco_Travel/