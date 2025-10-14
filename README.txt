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

•	Movilidad a distintas páginas: El portal cuenta con paginas de “Artesanías”, “Gastronomía”, “Contacto”, y “Home”

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
├─ index.html             --> Página principal
├─ Artesanias-.html       --> Página de artesanías
├─ Imagenes_Proyecto/     --> Carpeta con imágenes y banners
├─ Actividad.js           --> Script principal para carruseles y modales
├─ ActividadArte.js       --> Script principal para carruseles y modales
├─ ActividadContac.js     --> Script principal para carruseles y modales
├─ ActividadGastrono.js   --> Script principal para carruseles y modales
├─ styleHome.css          --> Estilos generales del sitio 
├─ styleArtesania.css     --> Estilos generales de la subpagina Artesanía 
├─ styleContacto.css      --> Estilos generales de la pagina Contacto
├─ styleGastrono.css      --> Estilos generales de la pagina gastronomía


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
