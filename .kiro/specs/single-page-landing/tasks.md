# Plan de Implementación: Single Page Landing

## Resumen

Consolidar el sitio multi-página de Hexagon Studio en una landing page de una sola página. Se modifican 6 archivos, se eliminan 3 páginas de ruta y se agregan estilos CSS para scroll suave. Todos los cambios usan TypeScript/TSX con Next.js Pages Router.

## Tareas

- [x] 1. Estilos globales y scroll suave

  - [x] 1.1 Agregar `scroll-margin-top` a `src/styles/globals.css`
    - Agregar regla `section[id] { scroll-margin-top: 80px; }` para compensar la NavBar fija
    - Verificar que `html { scroll-behavior: smooth; }` ya existe (ya está presente)
    - _Requisitos: 2.1_

- [x] 2. Consolidar secciones en `index.tsx`

  - [x] 2.1 Reescribir `src/pages/index.tsx` para renderizar todas las secciones

    - Importar los templates `Home`, `Servicios`, `Proyectos` y `Contacto`
    - Envolver cada template en `<section id="home|servicios|proyectos|contacto">`
    - Mantener el `Head` con meta tags del sitio principal
    - _Requisitos: 1.1, 1.2_

  - [x] 2.2 Consolidar `getStaticProps` en `src/pages/index.tsx`
    - Combinar la carga de imágenes de Home (illustrationHome, cubosHome) y Servicios (teamwork) con `getPlaiceholder`
    - Incluir la lista de proyectos en las props
    - Retornar `{ imageProps, serviciosImageProps, projects }`
    - _Requisitos: 1.3_

- [x] 3. Actualizar NavBar con anclas y sección activa

  - [x] 3.1 Cambiar enlaces de la NavBar a anclas en `src/components/modules/NavBar/navBar.tsx`

    - Reemplazar `navLinks` con hrefs de ancla: `#home`, `#servicios`, `#proyectos`, `#contacto`
    - Reemplazar `<Link>` de Next.js por `<a>` para los enlaces de ancla
    - Mantener el logo con `<Link href="/">`
    - _Requisitos: 2.2_

  - [x] 3.2 Implementar `IntersectionObserver` para sección activa

    - Agregar estado `activeSection` con `useState`
    - Crear `useEffect` con `IntersectionObserver` que observe las 4 secciones por `id`
    - Aplicar clase de resaltado (`text-cyan-400`) al enlace de la sección visible
    - Reemplazar la lógica actual de `router.pathname` por `activeSection`
    - _Requisitos: 3.1, 3.2_

  - [x] 3.3 Cerrar menú móvil al hacer clic en enlace
    - En el handler de click de los enlaces móviles, llamar `setIsOpen(false)`
    - Verificar que el scroll suave funciona después de cerrar el menú
    - _Requisitos: 2.3_

- [x] 4. Checkpoint - Verificar navegación

  - Asegurar que la NavBar navega correctamente a cada sección con scroll suave, que el resaltado de sección activa funciona y que el menú móvil se cierra al hacer clic. Preguntar al usuario si hay dudas.

- [x] 5. Actualizar enlaces internos en templates

  - [x] 5.1 Actualizar enlaces en `src/components/templates/Home/home.tsx`

    - Cambiar `href="/proyectos"` a `href="#proyectos"` (botón "Ver Proyectos" y enlace "Ver todos los proyectos")
    - Cambiar `href="/contacto"` a `href="#contacto"` (enlace "Hablemos" y botón "Contactar Ahora")
    - Cambiar `href="/servicios"` a `href="#servicios"` (botón "VER SERVICIOS")
    - Reemplazar `<Link>` por `<a>` en los enlaces de ancla; mantener `<Link>` para `/proyectos/[slug]`
    - _Requisitos: 5.1, 5.2, 5.3, 5.4_

  - [x] 5.2 Actualizar enlaces en `src/components/templates/Servicios/servicios.tsx`

    - Cambiar `href="/contacto"` a `href="#contacto"` (botón "Contáctanos")
    - Reemplazar `<Link>` por `<a>` en ese enlace
    - Eliminar imports no usados de `GetStaticProps` e `InferGetStaticPropsType` de Next.js
    - _Requisitos: 5.1_

  - [x] 5.3 Actualizar enlaces en `src/components/templates/Proyectos/proyectos.tsx`

    - Cambiar `href="/contacto"` a `href="#contacto"` (enlace "Iniciar un proyecto" y botón "Contactar Ahora")
    - Reemplazar `<Link>` por `<a>` en esos enlaces; mantener `<Link>` para `/proyectos/[slug]`
    - _Requisitos: 5.1, 5.4_

  - [x] 5.4 Ajustar padding en `src/components/templates/Contacto/contacto.tsx`
    - Cambiar `pt-40` a `pt-24` (o valor adecuado) ya que no es página independiente y no necesita compensar la NavBar
    - _Requisitos: 1.1_

- [x] 6. Eliminar páginas de ruta obsoletas

  - [x] 6.1 Eliminar `src/pages/servicios.tsx`

    - _Requisitos: 4.1_

  - [x] 6.2 Eliminar `src/pages/proyectos/index.tsx`

    - _Requisitos: 4.1_

  - [x] 6.3 Eliminar `src/pages/contacto.tsx`
    - _Requisitos: 4.1_

- [x] 7. Checkpoint final
  - Verificar que el build de Next.js compila sin errores. Confirmar que `/proyectos/[slug]` sigue funcionando como ruta independiente. Asegurar que `404.tsx` y `api/contact.ts` no fueron afectados. Preguntar al usuario si hay dudas.

## Notas

- Las tareas marcadas con `*` son opcionales y se pueden omitir para un MVP más rápido
- Cada tarea referencia requisitos específicos para trazabilidad
- Los checkpoints aseguran validación incremental
- Los enlaces a `/proyectos/[slug]` deben mantener `<Link>` de Next.js para navegación client-side
