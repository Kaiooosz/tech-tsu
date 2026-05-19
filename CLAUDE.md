# Tech Tsu — Site Institucional

## Vault

Vault Obsidian: `~/Downloads/Tech Tsu/`

Ao iniciar sessão:
1. Ler `~/Downloads/Tech Tsu/01-Projetos/Tech-Tsu.md`
2. Ler `~/Downloads/Tech Tsu/08-Marca/Brand-Kit.md`
3. Ler `~/Downloads/Tech Tsu/02-Contexto/Guia-Contexto-IA.md`

## Projeto

Site institucional da Tech Tsu — landing page de captação de clientes para a software house.

## Stack

- Next.js 14+ App Router, TypeScript, Tailwind CSS
- Deploy: Vercel (`main` = produção)

## Estrutura

```
src/
  app/
    layout.tsx      → metadata, font Inter
    page.tsx        → monta todos os componentes
    globals.css     → CSS variables do brand (--ink, --teal, --amber…)
  components/
    Topbar.tsx      → nav sticky com blur
    Hero.tsx        → seção dark com painéis flutuantes animados
    ProofStrip.tsx  → faixa CRM / ERP / Dashboards…
    Oferta.tsx      → 3 cards: Diagnóstico, MVP, Evolução
    Case.tsx        → case BBLAW com mock de dashboard
    Processo.tsx    → 4 etapas em grid
    Contato.tsx     → CTA final com email
    Footer.tsx      → rodapé com CNPJ
public/
  mark.svg          → ícone/monograma TT
  logo.svg          → wordmark completo
```

## Cores (Brand Kit)

- Ink:   `#0d1117` — fundo dark, texto principal
- Paper: `#f7f8f4` — fundo light
- Teal:  `#2ec4b6` — cor primária / CTA
- Amber: `#f6c85f` — destaque / números
- Coral: `#ff6b4a` — status / ação
- Steel: `#3a6ea5` — secundário

## Regras

- Mobile-first — breakpoints 980px e 560px
- Sem dark mode — site é light only
- Email: contato@techtsu.com.br
- `main` = produção no Vercel
