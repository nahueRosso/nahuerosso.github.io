# Sensonoro

Landing one-page de Sensonoro: chalecos hápticos para que personas sordas e hipoacúsicas sientan la música en vivo. Next.js (App Router) + TypeScript + Tailwind CSS + shadcn/ui, exportado como sitio 100% estático.

## Desarrollo

```bash
npm install
npm run dev
```

## Qué editar

- Textos: `lib/content.ts`.
- Formulario: reemplazá `FORMSPREE_ID` y `CONTACT_EMAIL` en `lib/content.ts`.

## Despliegue en GitHub Pages

1. Subí el proyecto a un repositorio de GitHub (rama `main`).
2. En **Settings → Pages**, elegí **GitHub Actions** como *Source*.
3. Cada push a `main` ejecuta `.github/workflows/deploy.yml`: instala (`npm ci`), compila con `NEXT_PUBLIC_BASE_PATH=/<nombre-del-repo>` y publica la carpeta `out/`.

Para probar el build de producción en local:

```bash
NEXT_PUBLIC_BASE_PATH=/nombre-del-repo npm run build
npx serve out
```

Si usás un dominio propio o un repositorio `usuario.github.io`, dejá `NEXT_PUBLIC_BASE_PATH` vacío.
