# Tech Tsu — Site Institucional

## Vault

Vault Obsidian: `~/Downloads/Obsidian/`

Ao iniciar sessão:
1. `~/Downloads/Obsidian/Guia/Guia-Contexto-IA.md` — regras globais
2. `~/Downloads/Obsidian/Tech-Tsu/Tech-Tsu.md` — negócio, ICP, linhas de receita
3. `~/Downloads/Obsidian/Guia/Brand-Kit.md` — identidade visual e tom de voz
   e `~/Downloads/Obsidian/Guia/Assets-Logos-Icones.md` — specs de logo, ícone e favicon
4. `~/Downloads/Obsidian/Tech-Tsu/Tech-Tsu-Site.md` — arquitetura deste site
5. `~/Downloads/Obsidian/Tech-Tsu/Materiais-Midias.md` — criativos prontos

Ao concluir tarefa significativa, atualizar `Tech-Tsu-Site.md` (seção Log).

## Projeto

Landing page B2B de captação. Duas ofertas na mesma página: sistema sob medida (ciclo longo) e disparos via API Oficial do WhatsApp (ciclo curto).

## Stack

- Next.js App Router, TypeScript, Tailwind v4, Framer Motion v12
- Leads em Neon serverless (`DATABASE_URL`), tabela `leads` com migração idempotente em `src/lib/db.ts`
- Deploy: Vercel (`main` = produção)

## Estrutura

```
src/
  app/
    layout.tsx            → metadata, Space Grotesk + JetBrains Mono, CookieConsent
    page.tsx              → ordem das seções
    globals.css           → tokens do brand
    opengraph-image.tsx   → OG dinâmica com a marca
    api/leads/route.ts    → POST de lead + lead scoring (hot/warm/cold)
    admin/leads/page.tsx  → central de leads com filtros
    termos/ privacidade/  → páginas legais (LGPD)
  components/
    Topbar · Hero · Marquee · Clientes · Case · Oferta · Solucoes
    Segmentos · Comparativo · Processo · Vitrine · Ferramentas
    Empresa · Disparos · Seguranca · ContatoLeads (Quiz) · Footer
    ScrollProgress · WhatsAppFab · MediaFrame
    CookieConsent · CursorGlow · LegalPage
  lib/
    site.ts   → dados da empresa + links de WhatsApp por contexto
    db.ts     → Neon + initDb
    motion.ts → variantes e easing padrão
public/
  mark-* logo-* appicon-* favicon-256.png
  bg-noise.svg bg-circuit.svg bg-topology.svg
  dor-*.svg resultado-*.svg
  logo-bblaw · logo-rbmotos · logo-zap · logo-cicatribem · logo-pointify · logo-social-seller
  midia/  → imagens e vídeos das seções novas (nomes esperados no README da pasta)
```

## Cores

Fonte da verdade: `src/app/globals.css`. Detalhe completo no [Brand-Kit](~/Downloads/Obsidian/Guia/Brand-Kit.md).

- Ink Black `#191B21` — `--bg` / `--ink`
- Signal Blue `#2C55E8` — `--teal` (a variável se chama teal por herança, mas o valor é AZUL; não voltar para `#2ec4b6`)
- Warm Paper `#F5F2EB` — `--text` · Paper `#F8F7F4` / `#EFECEA`
- Sky Tint `#8FA8FF` — `--sky` · Clay `#C8B49A` · Amber `#f6c85f`
- Gradiente de destaque: `linear-gradient(145deg, #1238C4, #2C55E8 55%, #4B74FF)`

Fontes: Space Grotesk (UI) + JetBrains Mono (label, número, badge).

## Regras

- Mobile-first — breakpoints 980px e 560px
- Seções alternam dark e paper; não há dark mode alternável
- Nunca usar emoji em código, UI, copy ou commit — ícone SVG quando precisar de elemento visual
- Lead score é interno: nunca aparece para o lead, só em `/admin/leads`
- Contato e CNPJ vêm de `src/lib/site.ts` — nunca escrever direto no componente
- Link de WhatsApp com mensagem pré-preenchida só funciona no formato `wa.me/<numero>?text=`; o link curto `wa.me/message/...` ignora `?text=`
- `main` = produção no Vercel
