# Hair Clinic by Fábia Oliveira

Landing page da clínica capilar Hair Clinic — tricologia e diagnóstico avançado no Porto.

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS 4 · TypeScript.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de produção
npm run start   # servir o build
npm run lint    # ESLint
```

## Estrutura

```
app/
  page.tsx           # landing page (secções: sobre, equipa, método, tratamentos, casos, testemunhos, FAQ, contacto)
  layout.tsx         # metadata, fontes, SEO
  globals.css        # design tokens e estilos globais
  robots.ts          # /robots.txt
  sitemap.ts         # /sitemap.xml
  manifest.ts        # /manifest.webmanifest
  icon.png           # favicon + apple-icon (convenção de metadata do Next.js)
  components/        # Nav, TreatmentsTabs, Reveal, StructuredData
  lib/               # dados de contacto e FAQ
public/
  logo.png           # logo da nav e footer
  og-image.png       # imagem de partilha social
  photos/            # fotografia usada no site (apenas o que é referenciado)
```

## Deploy

Alojado na [Vercel](https://vercel.com). O deploy é automático a cada push para `main`;
cada pull request gera um preview. Não são necessárias variáveis de ambiente —
o site é totalmente estático (todas as rotas são pré-renderizadas).

O domínio de produção (`https://hairclinic.pt`) está definido em `SITE_URL` em
[`app/layout.tsx`](app/layout.tsx), [`app/robots.ts`](app/robots.ts) e
[`app/sitemap.ts`](app/sitemap.ts).

## Fotografia

`public/photos/` contém apenas as imagens referenciadas no site, redimensionadas
para um máximo de 2560px e comprimidas para web. Os originais em resolução total
não fazem parte deste repositório.
