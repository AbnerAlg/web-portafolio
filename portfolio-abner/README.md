# Portafolio de Abner García

Sitio estático (HTML, CSS y JavaScript puro). No necesita instalar nada ni compilar.

## Estructura

```
portfolio-abner/
├── index.html              Todo el contenido, dividido por secciones comentadas
├── css/
│   ├── tokens.css          Colores, tipografía, formas (cambia la marca aquí)
│   ├── base.css            Reinicio y reglas globales
│   ├── layout.css          Contenedor, secciones y cuadrícula bento
│   ├── components.css      Botones, chips, tarjetas, ventana de código
│   ├── animations.css      Animaciones y movimiento reducido
│   └── sections/           Un archivo por sección de la página
│       ├── nav.css
│       ├── hero.css
│       ├── now.css
│       ├── experience.css
│       ├── stack.css
│       ├── projects.css
│       ├── education.css
│       └── contact.css
└── js/                     Un archivo por comportamiento
    ├── theme.js            Tema claro / oscuro
    ├── rotator.js          Palabra rotatoria de la portada
    ├── reveal.js           Aparición al hacer scroll
    ├── progress.js         Barra de progreso de lectura
    └── copy-email.js       Botón "Copiar correo"
```

## Nombres de clases

Cada pieza usa el patrón `bloque__elemento--variante`:
`.project` es el bloque, `.project__title` una parte suya y `.project--blue` una variante.

## Cómo editar

- **Cambiar un texto o agregar un proyecto:** edita `index.html`. Copia un bloque `<article class="project ...">`.
- **Cambiar colores o la tipografía:** edita `css/tokens.css`.
- **Agregar una tecnología:** añade un `<span class="chip">` dentro del grupo de `index.html`. Usa `chip--learning` si la estás aprendiendo.

## Publicar en Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. En Vercel elige "Add New Project" e importa el repositorio.
3. Framework Preset: `Other`. Deja vacíos el comando de build y el directorio de salida.
