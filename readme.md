# Web Hyprdots

Sitio de documentación para **Hyprdots**: configuraciones y recursos para Arch Linux + Hyprland. Incluye guía general, atajos de teclado, visualización de temas y la variante **Hyprdots Simple**.

## Stack

- **[Astro](https://astro.build)** — Sitio estático con componentes `.astro`
- **[React](https://react.dev)** — Solo donde hace falta interactividad (bloques de código con copiar y resaltado)
- **[Tailwind CSS](https://tailwindcss.com)** v4 — Estilos y modo claro/oscuro
- **pnpm** — Gestor de paquetes

## Estructura

(Aproximación).

``` text
src/
├── components/
│   ├── atomos/      # Enlace, Imagen, Linea, Texto
│   ├── moleculas/   # Lista, Tabla, Titulo, Codigo (React)
│   ├── organismos/  # Estructura, TemarioAsideCompleto, TemarioCompleto
│   └── secciones/   # General, Atajos, Visualizacion, Simple
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro           # /
│   ├── atajos/index.astro    # /atajos/
│   ├── simple/index.astro    # /simple/
│   └── visualizacion/index.astro  # /visualizacion/
└── styles/
    └── global.css
```

## Comandos

| Comando        | Descripción            |
| -------------- | ---------------------- |
| `pnpm install` | Instalar dependencias  |
| `pnpm dev`     | Servidor de desarrollo |
| `pnpm build`   | Generar sitio estático |
| `pnpm preview` | Previsualizar build    |
| `pnpm lint`    | Ejecutar ESLint        |

## Despliegue

El workflow en `.github/workflows/deploy.yml` compila el proyecto con `pnpm build` y publica el contenido de `dist/` (en GitHub Pages).

## Información

**licencia:** MIT

**Autor:** Fravelz
