# Documento de Requisitos

## Introducción

Convertir el sitio multi-página de Hexagon Studio en una landing page de una sola página donde las secciones Home, Servicios, Proyectos y Contacto se muestran en una página scrollable en lugar de rutas separadas. La navegación cambia de enlaces de página a scroll suave hacia secciones con anclas (`#id`).

## Glosario

- **Landing_Page**: La página principal (`index.tsx`) que contiene todas las secciones del sitio en un solo documento scrollable.
- **NavBar**: Componente de navegación fijo en la parte superior que contiene los enlaces a las secciones.
- **Sección**: Bloque visual de contenido identificado por un `id` HTML (home, servicios, proyectos, contacto).
- **Scroll_Suave**: Comportamiento de desplazamiento animado al hacer clic en un enlace de navegación.
- **Página_de_Proyecto**: Página dinámica individual (`/proyectos/[slug]`) que muestra el detalle de un proyecto específico.

## Requisitos

### Requisito 1: Consolidar secciones en una sola página

**Historia de Usuario:** Como visitante, quiero ver todas las secciones del sitio en una sola página scrollable, para poder explorar todo el contenido sin cambiar de ruta.

#### Criterios de Aceptación

1. THE Landing_Page SHALL renderizar las secciones Home, Servicios, Proyectos y Contacto en orden secuencial dentro de una sola ruta (`/`).
2. WHEN la Landing_Page se carga, THE Landing_Page SHALL mostrar cada Sección con un atributo `id` HTML correspondiente (`home`, `servicios`, `proyectos`, `contacto`).
3. THE Landing_Page SHALL consolidar la obtención de datos estáticos (imágenes con plaiceholder y lista de proyectos) en un solo `getStaticProps`.

### Requisito 2: Navegación por scroll suave

**Historia de Usuario:** Como visitante, quiero que los enlaces de navegación me lleven a la sección correspondiente con un scroll suave, para tener una experiencia fluida.

#### Criterios de Aceptación

1. WHEN el visitante hace clic en un enlace de la NavBar, THE NavBar SHALL desplazar la vista hacia la Sección correspondiente usando Scroll_Suave.
2. THE NavBar SHALL reemplazar los enlaces `href` de rutas (`/servicios`, `/proyectos`, `/contacto`) por anclas (`#servicios`, `#proyectos`, `#contacto`).
3. WHEN el visitante hace clic en un enlace del menú móvil, THE NavBar SHALL cerrar el menú y desplazar la vista hacia la Sección correspondiente.

### Requisito 3: Resaltado de sección activa en la navegación

**Historia de Usuario:** Como visitante, quiero ver cuál sección estoy viendo actualmente reflejada en la navegación, para orientarme en la página.

#### Criterios de Aceptación

1. WHILE el visitante se desplaza por la Landing_Page, THE NavBar SHALL resaltar el enlace de la Sección actualmente visible en el viewport.
2. THE NavBar SHALL usar un `IntersectionObserver` o lógica equivalente de scroll para determinar la Sección visible.

### Requisito 4: Eliminar páginas de ruta independientes

**Historia de Usuario:** Como desarrollador, quiero eliminar las páginas de ruta que ya no se usan, para mantener el código limpio.

#### Criterios de Aceptación

1. THE Landing_Page SHALL reemplazar las páginas `servicios.tsx`, `proyectos/index.tsx` y `contacto.tsx` eliminándolas del directorio `src/pages/`.
2. THE Página_de_Proyecto (`/proyectos/[slug]`) SHALL permanecer como ruta independiente para mostrar el detalle de cada proyecto.
3. THE Landing_Page SHALL mantener la página `404.tsx` y la ruta API `api/contact.ts` sin cambios.

### Requisito 5: Actualizar enlaces internos en templates

**Historia de Usuario:** Como visitante, quiero que todos los enlaces internos del sitio me lleven a la sección correcta dentro de la landing page, para no encontrar páginas rotas.

#### Criterios de Aceptación

1. THE Landing_Page SHALL actualizar todos los enlaces internos de tipo `Link href="/contacto"` a `href="#contacto"` en los componentes Home, Servicios, Proyectos y Footer.
2. THE Landing_Page SHALL actualizar los enlaces internos de tipo `Link href="/servicios"` a `href="#servicios"` en los componentes que los contengan.
3. THE Landing_Page SHALL actualizar los enlaces internos de tipo `Link href="/proyectos"` a `href="#proyectos"` en los componentes que los contengan.
4. THE Landing_Page SHALL mantener los enlaces a rutas dinámicas (`/proyectos/[slug]`) como enlaces de navegación estándar con `Link`.
